import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact/index';



function About() {
    return <div className='about'>
        <div className='about-top'>

        

            <div className='about-info'>Hello! I'm 
            <br /> <span className='info-name'>Samaira Singh</span>
            <br /> and am a student and an aspiring software engineer.
            </div>

            <div className='about-photo'>
                <img className='picture' src={require('/Users/samairasingh/portfolio/src/components/body/about/profile.jpeg').default} />

        </div>

    </div>
    <SocialContact />
    </div>
}
export default About;