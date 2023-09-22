import React from 'react'
import LogoImg from '../images/Logo.png'

const Logo = () => {
  return (
    <picture>
        <img src={LogoImg} alt='site logo'/>
    </picture>
  )
}

export default Logo