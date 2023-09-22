import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import HamburgerMenu from './HamburgerMenu'
import MobileNav from './MobileNav'

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