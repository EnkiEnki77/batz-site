import React from 'react'
import LogoImg from '../../images/Logo.png'
import "./Logo.css"

const Logo = () => {
  return (
   <a href='/' className='home-link'>
      <picture className='logo'>
          <img className='logo-mobile' src={LogoImg} alt='site logo'/>
      </picture>
   </a>
  )
}

export default Logo