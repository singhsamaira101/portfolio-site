import React, { useState } from "react";
import './mobile.css';
import closeicon from './close-icon.png';
import projecticon from './pro-icon.png';
import skillsicon from './skill-icon.png'
import eduicon from './edu-icon.png';
import contacticon from './contact-icon.png';
console.log(projecticon);
console.log(contacticon);
console.log(eduicon);
console.log(skillsicon);
console.log(closeicon);

function Mobile({ isOpen, setIsOpen }) {
    return (
        <div className='mobile'>
            <div className='close' onClick={() => setIsOpen(!isOpen)}>
            <img src={closeicon} height='35' width='35' />
            </div>
            <div className='mobile-options'>
            <div className='mobile-option'>
                <a href='#skills'>
                <img  className='option-icon' src={skillsicon} width='35' height='35'/>Skills
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#education'>
                <img  className='option-icon' src={eduicon} width='35' height='35' />Education
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#project'>
                <img  className='option-icon' src={projecticon} width='35' height='35' />Projects
                </a>
                
            </div>
            
            <div className='mobile-option'>
                <a href='#contact'>
                    <img className='option-icon' src={contacticon} width='35' height='35' />Contact
                </a>
            </div>
            </div>
            
        </div>
    );
}

            

export default Mobile