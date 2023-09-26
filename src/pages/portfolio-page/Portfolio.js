import React from 'react'
import Layout from '../../components/layout/Layout'

const Portfolio = () => {
    const listItems = [
        {path: '/about', currentPage: false, linkText: 'about'},
        {path: '/portfolio', currentPage: true, linkText: 'portfolio'},
        {path: '/shop', currentPage: false, linkText: 'shop'},
        {path: '/contact', currentPage: false, linkText: 'contact'}
    ]
  return (
    <Layout listItems={listItems} pageClass='about-page'>
        
    </Layout>
  )
}

export default Portfolio