import React from 'react'
import Layout from '../../components/layout/Layout'
import Abi from '../../images/DSC_4790-2 2.png'
import './Portfolio.css'

const Portfolio = () => {
    const listItems = [
        {path: '/about', currentPage: false, linkText: 'about'},
        {path: '/portfolio', currentPage: true, linkText: 'portfolio'},
        {path: '/contact', currentPage: false, linkText: 'contact'}
    ]
  return (
    <Layout portfolio={true} listItems={listItems} pageClass='about-page'>
        <div className='portfolio'>
          <img className='portfolio-image' src={Abi} alt='portfolio'/>
        </div>
    </Layout>
  )
}

export default Portfolio