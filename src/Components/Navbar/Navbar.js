import React from 'react';
import logo from '../../Assets/logo-karuna.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt=''></img>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>

    </div>
  )
}

export default Navbar
