import {React} from 'react';
import './AllUploads.css';
import { AiFillFile } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

function CustomFunction({value}){
    console.log(value);
    if(value === "image/png"){
        return (
            <FaRegFileAlt color='rgba(85, 111, 244, 0.482)' fontSize="3em"/>
        )
    }
    else if(value === "application/pdf"){
        return (
            <FaRegFilePdf color='red' fontSize="3em"/>
        )
    }
    else{
        return(
            <AiFillFile color="gray" fontSize="3em"/>
        )
    }

}


function AllUploads({file}) {
   
   const Cards = file.map((item,id)=>{
    return(
        <div className="carding" key={id}>
            <div>
                <CustomFunction value={item.file.type} />
            </div>
            <div className="flexi">
                <div>
                    <h6>{item.file.name}</h6>
                </div>
                <div>
                    <p>{Math.round(item.file.size / 1080) } KB</p>
                </div>
            </div>
            
        </div>
    )
   })
    return (
        <div className="file-container">
            <div className="all-uploads">
                <h5>Uploaded Files</h5>    
            </div>
            <div className="all-center">
                {Cards}
            </div>
        </div>
    )
}

export default AllUploads
