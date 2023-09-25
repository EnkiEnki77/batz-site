import React from 'react'
import Header from '../../components/header/Header'
import Carousel from '../../components/carousel/Carousel'
import "./Home.css"
import Layout from '../../components/layout/Layout'

const Home = () => {
    const listItems = [
        {path: '/about', currentPage: true, linkText: 'about'},
        {path: '/portfolio', currentPage: false, linkText: 'portfolio'},
        {path: '/shop', currentPage: false, linkText: 'shop'},
        {path: '/contact', currentPage: false, linkText: 'contact'}
    ]

  return (
    <Layout listItems={listItems} home={true} pageClass='home-page'>
      <Carousel/>
    </Layout>
  )
}

export default Home