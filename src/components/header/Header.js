import React, { useState } from 'react'
import Logo from '../logo/Logo'
import Nav from '../nav/Nav'
import HamburgerMenu from '../hamburger-menu/HamburgerMenu'
import "./Header.css"
import {AiOutlineClose} from "react-icons/ai"


const Header = (props) => {
  const [toggleNav, setToggleNav] = useState(false)

  function handleToggleNav(){
    setToggleNav(!toggleNav)
  }
    
  return (
    <header className='header'>
        <Logo home={props.home}/>
        <Nav onToggleNav={handleToggleNav} navToggle={toggleNav} {...props}/>
        {!toggleNav ? <HamburgerMenu home={props.home} onToggleNav={handleToggleNav}/> :  <button className='close-nav-btn' onClick={handleToggleNav}><AiOutlineClose/></button>}
    </header>
  )
}

export default Header