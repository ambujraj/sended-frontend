import {React,useState,useEffect} from 'react'
import Uploader from './Uploader/Uploader'
import axios from 'axios';


function ContentPage() {
    const [ip, setIP] = useState('');

    const getData = async() =>{
        const res = await axios.get('https://geolocation-db.com/json/');
        setIP(res.data.IPv4);
    }
    useEffect(() =>{
        getData();

    },[]);
    return (
        <div className="container-fluid">
            <Uploader ip ={ip}/>
        </div>
    )
}

export default ContentPage
