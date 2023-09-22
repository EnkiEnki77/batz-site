import React from 'react'
import Header from '../components/Header'

const Home = () => {
    const listItems = [
        {path: '/about', currentPage: true, linkText: 'about'},
        {path: '/portfolio', currentPage: false, linkText: 'portfolio'},
        {path: '/shop', currentPage: false, linkText: 'shop'},
        {path: '/contact', currentPage: false, linkText: 'contact'}
    ]
    
  return (
    <div className='home-page'>
        <Header listItems={listItems}/>
        {/* <Carousel/> */}
        {/* <NewsLetterPopup/> */}
    </div>
  )
}

export default Home