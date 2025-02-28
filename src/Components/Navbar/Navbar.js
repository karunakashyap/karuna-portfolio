import React, { useState } from 'react';
import logo from '../../Assets/logo-karuna.png';
import './Navbar.css';
import underLine from '../../Assets/nav_underline.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
      <img src={logo} alt=''></img>
      <ul className='nav-menu'>
        <li><a href='#home'><p onClick={() => { setMenu("home") }}>Home</p>{menu === "home" ? <img src={underLine} alt=''></img> : <></>}</a></li>
        <li><a href='#about'><p onClick={() => { setMenu("about") }}>About Me</p>{menu === "about" ? <img src={underLine} alt=''></img> : <></>}</a></li>
        <li><a href='#resume'><p onClick={() => { setMenu("resume") }}>Resume</p>{menu === "resume" ? <img src={underLine} alt=''></img> : <></>}</a></li>
        <li><a href='#project'><p onClick={() => { setMenu("project") }}>Project</p>{menu === "project" ? <img src={underLine} alt=''></img> : <></>}</a></li>
        <li><a href='#contact'><p onClick={() => { setMenu("contact") }}>Contact</p>{menu === "contact" ? <img src={underLine} alt=''></img> : <></>}</a></li>
      </ul>
      <div className="nav-connect"><a href='#contact'>Connect With Me</a></div>

    </div>
  )
}

export default Navbar
