import React from 'react'
import './Header.css'
import {SiBuymeacoffee} from 'react-icons/si';
function Header() {
    return (
        <div>
            <div className="logo">
                <i>Send'ed</i>
            </div>
            <div className="header">
                <SiBuymeacoffee size="4em" color="black" />
                <div className="onTop">
                    <span className="buyme">Buyme</span> 
                </div>
            </div>
        </div>
        
       
    )
}

export default Header
