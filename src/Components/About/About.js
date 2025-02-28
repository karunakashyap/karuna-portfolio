import React from 'react';
import './About.css';
import themePattern from '../../Assets/theme_pattern.svg';
import profileImg from '../../Assets/profileImg.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={themePattern} alt=''></img>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profileImg} alt="" width={300} height={400} />
                </div>
                <div className="about-right">
                    <div className='about-para'>
                        <p>I am Karuna Kashyap, a B.Tech graduate with one year of internship experience in
                            website development. I am proficient in HTML, CSS, JavaScript, and ReactJS, and I am
                            passionate about building user-friendly and visually appealing web applications. My
                            goal is to continue growing as a developer while contributing to innovative projects
                            that make a difference.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: '60%' }}></hr></div>
                        <div className="about-skill"><p>Bootstrap</p><hr style={{ width: '70%' }}></hr></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: '50%' }}></hr></div>
                        <div className="about-skill"><p>React Js</p><hr style={{ width: '80%' }}></hr></div>
                        <div className="about-skill"><p>Git, GitHub</p><hr style={{ width: '50%' }}></hr></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
