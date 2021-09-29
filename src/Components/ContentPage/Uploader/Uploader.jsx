import React,{useCallback, useState} from 'react'
import './Uploader.css'
import {AiOutlineCloudUpload} from 'react-icons/ai';
import {useDropzone} from 'react-dropzone'
import AllUploads from '../AllUploads/AllUploads';
import axios from 'axios';
import { FaRegCopy } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';

var ip;
function UploadFiles(files,setOnload,setLink,setError){
    const zip = require('jszip')();
    for (let i = 0;i < files.length;i++) {
        zip.file(files[i]);
    }
    const Url = 'https://6675-103-115-128-194.ngrok.io/api/upload/';
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
    const onDrop = useCallback((acceptedfiles,rejectedfiles) =>{
        const mapaccepted = acceptedfiles.map((file) =>({file}));
    
        if(acceptedfiles.length){
            setOnload(true);
            UploadFiles(acceptedfiles,setOnload,setLink,setError);
        }
        setFiles((curr) =>[...curr, ...mapaccepted, ...rejectedfiles])
    },[]);
    
    const {getRootProps,getInputProps} = useDropzone({onDrop});
    return (
        <div className="uploader">
            <div className="upload-info">
                <div>
                    <h3>UPLOAD FILES</h3>
                </div>
                <div>
                    <p>Upload documents you want to share</p>
                </div>
            </div>
            {onload ? <h1 className="uploader-box">Uploading...</h1>:
            <div {...getRootProps()} className="uploader-box">
                <div>
                    <AiOutlineCloudUpload  color="rgb(47, 102, 169)" fontSize="60px"/>
                </div>
                <div>
                   <h3> Drag and Drop Your Files </h3>
                </div>  
                <div>
                        <h4>OR</h4>
                </div> 
                <label for="file-upload" class="custom-file-upload">
                    Browser Files
                    <input  {...getInputProps()} />
                </label>
            </div>

            }
            {
                link.length 
                ? 
                <div className="copying">
                    <input type="text" value={link} />
                    <CopyToClipboard text= {link} >
                    <span className="low"><FaRegCopy/></span>
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
                        <div>Select some files...</div>
               :
               <div>Api Failed</div>
            }
            
        </div>
    )
}
export default Uploader
