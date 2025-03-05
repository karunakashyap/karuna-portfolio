import React, { useRef, useState } from 'react';
import logo from '../../Assets/logo-karuna.png';
import './Navbar.css';
import underLine from '../../Assets/nav_underline.svg';
import menuOpen from '../../Assets/menu_open.svg';
import menuClose from '../../Assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt=''></img>
      <img className='nav-mob-open' onClick={openMenu} src={menuOpen} alt=''></img>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menuClose} alt='' className='nav-mob-close' onClick={closeMenu}></img>
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
