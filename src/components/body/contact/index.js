import React from 'react';
import './contact.css';
import Separator from  '/Users/samairasingh/portfolio/src/components/common/separator/index'
import SocialContact from '../../common/social-contact/index';
import mailpic from './mail2.png';
import downloadpic from './download.png';
console.log(downloadpic)
console.log(mailpic)

function Contact() {
    return <div className='contact'>
        <Separator />
        <label className='section-title'>Contact</label>
        <div className='contact-container'>
            <div className='contact-left'>
                <img className='mail-pic' src={mailpic} height='28' width='28'/> singh.samaira101@gmail.com
             
                <SocialContact />
            </div>
            <div className='download'>
                <a download href={require('/Users/samairasingh/portfolio/src/assets/down.pdf').default}>
                    <img className='download-icon'  src={downloadpic} height='30' width='30'/>
                    Download Resume
                </a>

            </div>
        </div>
    </div>
}
export default Contact;