import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import "./NewsLetterPopup.css"

const NewsLetterPopup = ({onPopupClick}) => {
  
  return (
    <div className='newsletter-popup'>
        <AiOutlineClose onClick={onPopupClick} className='close-popup'/>
        <h1 className='newsletter-popup-title'>subscribe</h1>
        <p className='sub-title'>for exclusive updates and offers</p>
        <form className='popup-form'>
            <input className='popup-form-input' type='email' required placeholder='email address...'/>
            <button className='popup-form-btn' type='submit'>sign up</button>
        </form>
    </div>
  )
}

export default NewsLetterPopup