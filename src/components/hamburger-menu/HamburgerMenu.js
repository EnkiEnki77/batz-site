import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import "./HamburgerMenu.css"

const HamburgerMenu = ({onToggleNav, home}) => {
  return (
    <><GiHamburgerMenu className={`${home ? 'hamburger-home': 'hamburger'}`} onClick={onToggleNav}/></>
  )
}

export default HamburgerMenu