import React, { useState } from "react";
import './header.css'
import Web from "./web/index";
import logomenu from './icons.png'; 
import Mobile from './mobile/index'
console.log(logomenu);


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='header'>
    <div className='logo'>Samaira Singh</div>
    <div className='menu'>
        <div className='web-menu'>
            <Web />
        </div>
        <div className='mobile-menu'>
            <div onClick={() => setIsOpen(!isOpen)} >
          
            <img className='menu-icon' src={logomenu} height='35' width='35' />
            </div>
            {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        
        </div>
    </div>
    </div>
    );
}

export default Header;
