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
       
            <div className='contact-bg'>
                <form className='contact-form' style={{height: 'auto'}}>
                    <h2 className='form-title'>Contact Me</h2>
                    {/* <img className='contact-tag' src={tag} alt='contact form title'/> */}
                    <input className='contact-form-name' type='text' placeholder='Name...'/>
                    <input className='contact-form-email' type='email' placeholder='Email...'/>
                    <textarea className='contact-form-message' placeholder='Message...'></textarea>
                    <button className='contact-form-submit' type='submit'>submit</button>
                    {/* <img className='flower' src={flower} alt='flower'/> */}
                </form> 
            </div>

    </Layout>
  )
}

export default Contact