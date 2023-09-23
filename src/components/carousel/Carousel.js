import React from 'react'
import Arrow from '../../images/arrow.png'
import './Carousel.css'

const Carousel = () => {
  return (
    <div className='carousel'>
        <img className='carousel-previous-img' src={Arrow} alt='arrow for going to previous item in carousel'/>
        <img className='carousel-img' alt='carousel item'/>
        <img className='carousel-next-img' src={Arrow} alt='arrow for going to next item in carousel'/>
    </div>
  )
}

export default Carousel