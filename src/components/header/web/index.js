import React from "react";
import './web.css';
import projecticon from './pro-icon.png';
import skillsicon from './skill-icon.png'
import eduicon from './edu-icon.png';
import contacticon from './contact-icon.png';
console.log(projecticon);
console.log(contacticon);
console.log(eduicon);
console.log(skillsicon);

function Web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#project'>
                <img  className='option-icon' src={projecticon} width='30' height='30' />Projects
                </a>
                
            </div>
            <div className='web-option'>
                <a href='#skills'>
                <img  className='option-icon' src={skillsicon} width='30' height='30'/>Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='#education'>
                <img  className='option-icon' src={eduicon} width='30' height='30' />Education
                </a>
            </div>
            
            
            <div className='web-option'>
                <a href='#contact'>
                    <img className='option-icon' src={contacticon} width='25' height='25' />Contact
                </a>
            </div>
            
        </div>
    )
}

export default Web