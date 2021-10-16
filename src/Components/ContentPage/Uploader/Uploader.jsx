import React,{useCallback, useState} from 'react'
import './Uploader.css'
import {AiOutlineCloudUpload} from 'react-icons/ai';
import {useDropzone} from 'react-dropzone'
import AllUploads from '../AllUploads/AllUploads';
import axios from 'axios';
import { FaRegCopy } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import side from '../../../rocketMan.svg'

var ip;
function UploadFiles(files,setOnload,setLink,setError){
    const zip = require('jszip')();
    for (let i = 0;i < files.length;i++) {
        zip.file(files[i].name,files[i]);
    }
    const Url = 'https://api.sended.in/api/upload';
    const fd = new FormData();
    fd.append('data',ip);
    zip.generateAsync({type: "blob"}).then(content => {
        fd.append('file',content,'example.zip');
        axios.post(Url,fd,{})
        .then((res)=>{
            console.log(res.data.link);
            setOnload(false);
            setLink(res.data.link);
        })
        .catch(err =>{
            console.log(err);
            setOnload(false);
            setError("Failed in the Api Call");
        })
    });
}
function Uploader(props) {
    ip = props.ip;
    const [onload,setOnload] = useState(false);
    const [files,setFiles] = useState([]);
    const [link,setLink] = useState("");
    const [error,setError] = useState("");
    const onDrop = useCallback((acceptedFiles,rejectedFiles) =>{
        const mapaccepted = acceptedFiles.map((file) =>({file}));
    
        if(acceptedFiles.length){
            setOnload(true);
            UploadFiles(acceptedFiles,setOnload,setLink,setError);
        }
        setFiles((curr) =>[...curr, ...mapaccepted, ...rejectedFiles])
    },[]);
    
    const {getRootProps,getInputProps} = useDropzone({onDrop});
    return (
        <div className="d-flex flex-column p-5">
            <div className="p-3">
                <div>
                    <h3>UPLOAD FILES</h3>
                </div>
                <div>
                    <p>Upload documents you want to share</p>
                </div>
            </div>
            <div className="pt-3 d-flex justify-content-around align-items-end">
                    <div {...getRootProps()} className="box dashed">
                        {onload ? <h1>Uploading...</h1>:
                        <div className="">
                            <div>
                                <AiOutlineCloudUpload  color="rgb(47, 102, 169)" fontSize="60px"/>
                            </div>
                            <div>
                                <h3> Click / Drop Your Files </h3>
                            </div>  
                            <div className="p-2">
                                <h4>OR</h4>
                            </div> 
                            <label for="file-upload" className="button_upload">
                                Browse Files
                                <input  {...getInputProps()} />
                            </label>
                        </div>
                        }
                    </div>
                <div className="box d-none d-md-block">
                    <img width="400px" src ={side} alt ="Side Image" />
                </div>
            </div>
            <div classsName="list_page">
            {
                link.length 
                ? 
                <div className="box p-5">
                    <label>
                       <span className="text-primary"> Copy the Link</span>
                    <input type="text" value={link} />
                    </label>
                    <CopyToClipboard text= {link} >
                    <span className="copy"><FaRegCopy/></span>
                    </CopyToClipboard>
                </div>
                :
                <div >
                </div>
            }
            {
                !error.length ?
                !onload && files.length?
                        <AllUploads file={files} />
                        : 
                        <div className="pt-5 text-danger">Select some files...</div>
               :
               <div className="text-danger">Api Failed</div>
            }
            </div>
        </div>
        
        
    )
}
export default Uploader
