import React from 'react';
import './Resume.css';
import themePattern from '../../Assets/theme_pattern.svg'

const Resume = () => {
    return (
        <div className='resume' id='resume'>
            <div className="resume-title">
                <h1>Resume</h1>
                <img src={themePattern} alt=''></img>
            </div>
            <div className="resume-para">
                <p>B.Tech graduate with one year of internship experience in website development. Proficient in
                    <span> HTML, CSS, JavaScript, and ReactJS,</span> with a passion for creating user-friendly and visually
                    appealing web applications. Seeking opportunities to apply my skills and grow as a developer by
                    contributing to innovative and impactful projects.</p>
            </div>
            <div className="experience">
                <h1>Experience</h1>
                <div className='underline'></div>
                <div className='experience-details'>
                    <h3 className='date'>March 2023-2024</h3>
                    <h5>Frontend Developer</h5>
                    <p>PINAK LIFE SCIENCES</p>
                    <ul className='descriptions'>
                        <li>Developed and maintained multiple websites using HTML, CSS, Javascript, and Reactjs.
                        </li>
                        <li>Collabrated with design and backend teams to implement website design and
                            functionalities.</li>
                        <li>Ensured responsiveness and cross-browser compatibility of website for optimal user
                            experience.</li>
                        <li>Utilises version control system such as Git for efficient code management and
                            collaboration.</li>
                        <li>Worked closely with team members to troubleshoot issues, optimize performance, and
                            meet project deadlines.</li>
                    </ul>
                </div>

            </div>
            <div className="education">
                <h1>Education</h1>
                <div className='underline'></div>
                <div className='education-details'>
                    <div className="detail">
                        <div className="date">2019-2023</div>
                        <h2>Bachelor of Engineering</h2>
                        <span>UttaraKhand Technological University</span>
                        <p>Percentage: <span className='percent'>80%</span></p>
                    </div>
                    <div className="detail">
                        <div className="date">2018-2019</div>
                        <h2>Higher Secondary School</h2>
                        <span>Red Rose Public School</span>
                        <p>Percentage: <span className='percent'>72%</span></p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Resume
