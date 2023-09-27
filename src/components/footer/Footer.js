import React from 'react'
import "./Footer.css"
import Logo from '../logo/Logo'
import Nav from '../nav/Nav'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {BiLogoTiktok} from 'react-icons/bi'
import {BiLogoInstagramAlt} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='footer'>
        <Logo home={true}/>
        <nav className='footer-nav'>
            <ul className='footer-nav-list'>
                <li className='footer-nav-item'><a href='#' className='footer-link'>faq</a></li>
                <li className='footer-nav-item'><a href='#' className='footer-link'>privacy policy</a></li>
                <li className='footer-nav-item'><a href='#' className='footer-link'>contact</a></li>
            </ul>
        </nav>
        <ul className='social-links'>
            <li className='social-links-item'><a href='#' className='social-link'><BiLogoFacebookCircle/></a></li>
            <li className='social-links-item'><a href='#' className='social-link'><BiLogoTiktok/></a></li>
            <li className='social-links-item'><a href='#' className='social-link'><BiLogoInstagramAlt/></a></li>
        </ul>
        <p className='fine-print'>copyright Batzygraphy 2023</p>
    </footer>
  )
}

export default Footer