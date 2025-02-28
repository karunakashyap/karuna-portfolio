import React from 'react';
import './Contact.css';
import themeImg from '../../Assets/theme_pattern.svg';
import mailIcon from '../../Assets/mail_icon.svg';
import locationIcon from '../../Assets/location_icon.svg';
import callIcon from '../../Assets/call_icon.svg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "343a2a66-c9c0-44a8-928c-bbdd2f3d0e4c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };
    return (
        <div className='contact' id='contact'>
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
                <form onSubmit={onSubmit} className="contact-right">
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
