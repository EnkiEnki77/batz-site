import React from 'react'
import Layout from '../../components/layout/Layout'
import "./Contact.css"
import tag from '../../images/contact-tag.png'
import flower from '../../images/flower.png'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const listItems = [
        {path: '/about', currentPage: false, linkText: 'about'},
        {path: '/portfolio', currentPage: false, linkText: 'portfolio'},
        {path: '/contact', currentPage: true, linkText: 'contact'}
    ]

    const form = useRef();

    const sendEmail = (e) => {
      // e.preventDefault();
  
      emailjs.sendForm('service_tx4uuic', 'template_h2qdea5', form.current, 'VyyBW59Td4VO1szmG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <Layout listItems={listItems} pageClass='contact-page'>
       
            <div className='contact-bg'>
                <form className='contact-form' style={{height: 'auto'}} ref={form} onSubmit={sendEmail}>
                    <h2 className='form-title'>Contact Me</h2>
                    {/* <img className='contact-tag' src={tag} alt='contact form title'/> */}
                    <input className='contact-form-name' name="user_name" type='text' placeholder='Name...'/>
                    <input className='contact-form-email' name="user_email"  type='email' placeholder='Email...'/>
                    <textarea className='contact-form-message' name="message" placeholder='Message...'></textarea>
                    <button className='contact-form-submit' type='submit'>submit</button>
                    {/* <img className='flower' src={flower} alt='flower'/> */}
                </form> 
            </div>

    </Layout>
  )
}

export default Contact