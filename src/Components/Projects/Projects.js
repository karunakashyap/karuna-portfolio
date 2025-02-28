import React from 'react';
import './Projects.css';
import themeImg from '../../Assets/theme_pattern.svg';
import projectData from '../../Assets/projects_data';
import arrowIcon from '../../Assets/arrow_icon.svg'

const Projects = () => {
    return (
        <div className='projects'>
            <div className='project-title'>
                <h1>My Projects</h1>
                <img src={themeImg} alt=''></img>
            </div>
            <div className="project-container">
                {projectData.map((project, index) => {
                    return <div key={index} className='project-format'>
                        <h3>{project.p_no}</h3>
                        <h2>{project.p_name}</h2>
                        <p>{project.p_desc}</p>
                        <div className="project-readmore">
                            <a href={project.p_link} target="_blank" rel="noopener noreferrer">Check Here</a>
                            <img src={arrowIcon} alt=''></img>
                        </div>
                    </div>

                })}
            </div>


        </div>
    )
}

export default Projects
