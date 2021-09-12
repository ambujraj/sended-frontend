import {React,useState,useEffect} from 'react'
import Uploader from './Uploader/Uploader'
import AllUploads from './AllUploads/AllUploads'
import {DATA} from './../../Data/Api/ServerData'


function ContentPage(props) {
    const [data,setdata] = useState({DATA});
    return (
        <div>
            <Uploader data ={data}/>
            <AllUploads data ={data}/>
        </div>
    )
}

export default ContentPage
