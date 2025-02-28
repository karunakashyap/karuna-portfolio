import React from 'react';
import './Hero.css';
import profileImage from '../../Assets/imgkk (1).png'

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <img src={profileImage} alt='' width={250} height={250}></img>
            <h1>I'm Karuna Kashyap</h1>
            <p>Frontend Developer with with one year of internship experience in website development.
            </p>
            <div className="hero-action">
                <div className='hero-connect'><a href='#contact'>Connect With Me</a></div>
                <div className='hero-resume'>My Resume</div>
            </div>
        </div>
    )
}

export default Hero
