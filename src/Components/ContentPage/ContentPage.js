import {React,useState,useEffect} from 'react'
import Uploader from './Uploader/Uploader'
import AllUploads from './AllUploads/AllUploads'
import {DATA} from './../../Data/Api/ServerData'
import axios from 'axios';


function ContentPage(props) {
    const [data,setData] = useState({DATA});
    const [ip, setIP] = useState('');

    const getData = async() =>{
        const res = await axios.get('https://geolocation-db.com/json/');
        setIP(res.data.IPv4);
    }
    useEffect(() =>{
        getData();

    },[]);
    return (
        <div>
            <Uploader data ={data}/>
            <AllUploads data ={data}/>
        </div>
    )
}

export default ContentPage
