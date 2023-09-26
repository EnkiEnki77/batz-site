import React from 'react'
import LogoImg from '../../images/Logo.png'
import "./Logo.css"

const Logo = ({home = false}) => {
  return (
   <a href='/' className='home-link'>
      <picture className='logo'>
          <img className={`${home ? 'logo-home' : 'logo-mobile'}`} src={LogoImg} alt='site logo'/>
      </picture>
   </a>
  )
}

export default Logo