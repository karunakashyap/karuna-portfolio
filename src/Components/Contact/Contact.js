import React from 'react';
import './Contact.css';
import themeImg from '../../Assets/theme_pattern.svg';
import mailIcon from '../../Assets/mail_icon.svg';
import locationIcon from '../../Assets/location_icon.svg';
import callIcon from '../../Assets/call_icon.svg';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={themeImg} alt=''></img>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p></p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mailIcon} alt=''></img>
                            <p>kashyapkaruna60@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={callIcon} alt=''></img>
                            <p>1232-343-23232</p>
                        </div>
                        <div className="contact-detail">
                            <img src={locationIcon} alt=''></img>
                            <p>Muzaffarnagar Uttar Pradesh</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name'></input><br></br>
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email'></input><br></br>
                    <label htmlFor=''>Write your message here</label>
                    <textarea name='message' rows={8} placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
