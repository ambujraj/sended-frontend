import React,{useCallback, useState} from 'react'
import './Uploader.css'
import {AiOutlineCloudUpload} from 'react-icons/ai';
import {useDropzone} from 'react-dropzone'



function Uploader(props) {

    const [files,setFiles] = useState([]);
    const onDrop = useCallback((acceptedfiles,rejectedfiles) =>{
        const mapaccepted = acceptedfiles.map((file) =>({file}));
        setFiles((curr) =>[...curr, ...mapaccepted, ...rejectedfiles])
    },[]);
    
    const {getRootProps,getInputProps} = useDropzone({onDrop});
    return (
        <div className="uploader">
            <div className="upload-info">
                <div>
                    {console.log(JSON.stringify(files))}
                    <h3>UPLOAD FILES</h3>
                </div>
                <div>
                    <p>Upload documents you want to share</p>
                </div>
            </div>
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
        </div>
    )
}

export default Uploader
