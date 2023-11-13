import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import "./NewsLetterPopup.css"


const NewsLetterPopup = ({onValidated , status, message}) => {
  const [email, setEmail] = useState('')
  
  const submit = (e) => {
    e.preventDefault()

    onValidated({
      EMAIL: email,
    });
    setEmail('')
  }

  console.log(console.log(`message: ${message}, status: ${status}`))
  
  return (
    <div className='newsletter-popup'>
        {/* <AiOutlineClose onClick={onPopupClick} className='close-popup'/> */}
        {status === "sending" && (
          <div
          className=' px-8 py-4 bg-black/40 rounded-xl top-32 lg:top-56   absolute mx-auto text-green-300 flex items-center justify-center text-center'
            
          >sending...</div>
        )}
        {status === "success" && (
          <div
          className=' px-8 py-4 bg-black/40 rounded-xl top-32 lg:top-56   absolute mx-auto text-pink-300 flex items-center justify-center text-center'
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
         {status === "error" && (
          <div
          className=' px-8 py-4 bg-black/40 rounded-xl top-32 lg:top-56   absolute mx-auto text-red-500 flex items-center justify-center text-center'
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <h1 className='newsletter-popup-title'>subscribe</h1>
        <p className='sub-title'>for exclusive updates and offers</p>
        <form className='popup-form' onSubmit={(e) => submit(e)}>
            <input  value={email}
               onChange={(e) => setEmail(e.target.value)}
        required
        autoCapitalize="off"
        autoCorrect="off"
        type="email"
        id="email-input"
        name="email"
        className='popup-form-input' placeholder='email address...'/>
            <button className='popup-form-btn' type="submit" value="" name="subscribe">sign up</button>
        </form>
    </div>
  )
}



export default NewsLetterPopup