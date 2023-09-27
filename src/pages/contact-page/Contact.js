import React from 'react'
import Layout from '../../components/layout/Layout'
import "./Contact.css"
import tag from '../../images/contact-tag.png'
import flower from '../../images/flower.png'

const Contact = () => {
    const listItems = [
        {path: '/about', currentPage: false, linkText: 'about'},
        {path: '/portfolio', currentPage: false, linkText: 'portfolio'},
        {path: '/shop', currentPage: false, linkText: 'shop'},
        {path: '/contact', currentPage: true, linkText: 'contact'}
    ]
  return (
    <Layout listItems={listItems} pageClass='contact-page'>
       
            <form className='contact-form'>
                <img className='contact-tag' src={tag} alt='contact form title'/>
                <input className='contact-form-name' type='text' placeholder='Name...'/>
                <input className='contact-form-email' type='email' placeholder='Email...'/>
                <textarea className='contact-form-message' placeholder='Message...'></textarea>
                <button className='contact-form-submit' type='submit'>submit</button>
                <img className='flower' src={flower} alt='flower'/>
            </form> 

    </Layout>
  )
}

export default Contact