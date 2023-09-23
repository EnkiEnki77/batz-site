import React from 'react'
import Logo from '../logo/Logo'
import Nav from '../nav/Nav'
import HamburgerMenu from '../hamburger-menu/HamburgerMenu'
import "./Header.css"


const Header = (props) => {
    
  return (
    <header className='header'>
        <Logo/>
        <Nav {...props}/>
        <HamburgerMenu/>
    </header>
  )
}

export default Header