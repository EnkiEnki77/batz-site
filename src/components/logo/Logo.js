import React from 'react'
import LogoImg from '../../images/Logo.png'
import "./Logo.css"

const Logo = () => {
  return (
    <picture className='logo'>
        <img className='logo-mobile' src={LogoImg} alt='site logo'/>
    </picture>
  )
}

export default Logo