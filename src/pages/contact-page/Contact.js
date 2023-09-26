import React from 'react'
import Layout from '../../components/layout/Layout'

const Contact = () => {
    const listItems = [
        {path: '/about', currentPage: false, linkText: 'about'},
        {path: '/portfolio', currentPage: false, linkText: 'portfolio'},
        {path: '/shop', currentPage: false, linkText: 'shop'},
        {path: '/contact', currentPage: true, linkText: 'contact'}
    ]
  return (
    <Layout listItems={listItems} pageClass='contact-page'>
        
    </Layout>
  )
}

export default Contact