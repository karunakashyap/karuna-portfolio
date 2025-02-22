import React from 'react';
import './Hero.css';
import profileImage from '../../../Assets/imgkk (1).png'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profileImage} alt='' width={200} height={200}></img>
            <h1>Frontend Developer</h1>
            <p>I am Karuna Kashyap, a B.Tech graduate with one year of internship experience in
                website development. I am proficient in HTML, CSS, JavaScript, and ReactJS, and I am
                passionate about building user-friendly and visually appealing web applications. My
                goal is to continue growing as a developer while contributing to innovative projects
                that make a difference.
            </p>
            <div className="hero-action">
                <div className='hero-connect'>Connect With Me</div>
                <div className='hero-resume'>My Resume</div>
            </div>

        </div>
    )
}

export default Hero
