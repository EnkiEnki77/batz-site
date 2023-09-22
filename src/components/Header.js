import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import HamburgerMenu from './HamburgerMenu'

const Header = (props) => {
    
  return (
    <header className='header'>
        <Logo/>
        <Nav {...props}/>
        <HamburgerMenu/>
        {/* MobileNav */}
    </header>
  )
}

export default Header