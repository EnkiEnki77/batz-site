import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import "./HamburgerMenu.css"

const HamburgerMenu = ({onToggleNav}) => {
  return (
    <><GiHamburgerMenu className='hamburger' onClick={onToggleNav}/></>
  )
}

export default HamburgerMenu