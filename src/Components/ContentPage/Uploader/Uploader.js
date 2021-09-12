import React from 'react'
import './Uploader.css'
import {AiOutlineCloudUpload} from 'react-icons/ai';

function Uploader(props) {
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
            <div className="uploader-box">
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
                    <input id="file-upload" type="file"/>
                </label>
            </div>
        </div>
    )
}

export default Uploader
