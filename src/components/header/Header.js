import React, { useState } from 'react'
import Logo from '../logo/Logo'
import Nav from '../nav/Nav'
import HamburgerMenu from '../hamburger-menu/HamburgerMenu'
import "./Header.css"


const Header = (props) => {
  const [toggleNav, setToggleNav] = useState(false)

  function handleToggleNav(){
    setToggleNav(!toggleNav)
  }
    
  return (
    <header className='header'>
        <Logo home={props.home}/>
        <Nav onToggleNav={handleToggleNav} navToggle={toggleNav} {...props}/>
        {!toggleNav && <HamburgerMenu home={props.home} onToggleNav={handleToggleNav}/>}
    </header>
  )
}

export default Header