import React,{useCallback, useState} from 'react'
import './Uploader.css'
import {AiOutlineCloudUpload} from 'react-icons/ai';
import {useDropzone} from 'react-dropzone'
import axios from 'axios';
import { FaRegCopy } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import side from '../../../rocketMan.svg'

var ip;
function UploadFiles(files,setOnload,setLink){
   console.log(files[0]);
    // const zip = require('jszip')();
    // for (let i = 0;i < files.length;i++) {
    //     zip.file(files[i].name,files[i]);
    // }
    setLink("");
    const Url = 'https://api.sended.in/api/upload';
    const fd = new FormData();
    fd.append('data',ip);
    fd.append('file',files[0]);
    // zip.generateAsync({type: "blob"}).then(content => {
    //     fd.append('file',content,'example');
        axios.post(Url,fd)
        .then((res)=>{
            console.log(res.data.link);
            setOnload(false);
            setLink(res.data.link);
        })
        .catch(err =>{
            console.log(err);
            setOnload(false);
        })
    
}
function Uploader(props) {
    ip = props.ip;
    const [onload,setOnload] = useState(false);
    const [link,setLink] = useState("");
    const onDrop = useCallback((acceptedFiles,rejectedFiles) =>{
        if(acceptedFiles.length){
            setOnload(true);
            UploadFiles(acceptedFiles,setOnload,setLink);
        }
    },[]);
    
    const {getRootProps,getInputProps} = useDropzone({onDrop});
    return (
        <div className="d-flex flex-column p-5">
            <div className="p-3">
                <div>
                    <h3>UPLOAD FILE</h3>
                </div>
                <div>
                    <p>Upload zipped file you want to share</p>
                </div>
            </div>
            <div className="pt-3 d-flex justify-content-around align-items-end pb-1">
                <div>                    
                    <div {...getRootProps()} className="box dashed">
                        {onload ? <h1>Uploading...</h1>:
                        <div >
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
                                <input  {...getInputProps()} type="file"/>
                            </label>
                        </div>
                    }</div>
                    <div className="pt-2">
                    {link.length ?
                    <div className="d-flex flex-row m-2">
                        <label className="text-white">Share&nbsp;
                        <a target="_blank" href={link}>
                            <input className="rounded p-1" type="text" disabled value={link} />
                        </a>
                        </label>&nbsp;
                        <CopyToClipboard text={link}>
                            <button className="copy"><FaRegCopy/></button>
                        </CopyToClipboard>
                    </div>:<div></div>}
                    </div>
                </div>
                <div className="box d-none d-md-block">
                    <img width="400px" src ={side} alt ="Illustrator" />
                </div>
            </div>     
        </div>      
    )
}
export default Uploader
