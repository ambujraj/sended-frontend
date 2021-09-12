import {React,useState} from 'react';
import './AllUploads.css';
import { AiFillFile } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

function CustomFunction({value}){
    console.log(value);
    if(value === "TXT"){
        return (
            <FaRegFileAlt color='rgba(85, 111, 244, 0.482)' fontSize="3em"/>
        )
    }
    else if(value === "PDF"){
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


function AllUploads(props) {
    
   const Cards = props.data.DATA.map((item,id)=>{
    return(
        <div className="carding" key={id}>
            <div>
                <CustomFunction value={item.type} />
            </div>
            <div className="flexi">
                <div>
                    <h6>{item.filename}</h6>
                </div>
                <div>
                    <p>{item.filesize}</p>
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
