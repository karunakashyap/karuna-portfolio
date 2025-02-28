import React from 'react';
import './Footer.css';
import karunaLogo from '../../Assets/logo-karuna.png';
import userIcon from '../../Assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={karunaLogo} alt=''></img>
                    <p>I'm Frontend Developer with 1 year internship experience in Pinak Life Sciences</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={userIcon} alt=''></img>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="intern-certificate"><a href='https://drive.google.com/drive/folders/1u3SlxjFsv3cEvSFZCtdyAFPsyCeOfEpc'>Intern Certificate</a></div>
                </div>
            </div>
            <hr></hr>
            <div className="footer-bottom">
                <p className='footer-bottom-left'>@ 2025 Karuna Kashyap. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Cookies Policy</p>
                    <p>Legal Policy</p>
                    <p>Privacy Policy</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
