import React from 'react'
import Arrow from '../../images/arrow.png'
import Ivy from "../../images/ivy.png"
import './Carousel.css'
import CarouselPicker from '../carousel-picker/CarouselPicker'

const Carousel = () => {
  return (
    <div className='carousel'>
        <img className='carousel-previous-img' src={Arrow} alt='arrow for going to previous item in carousel'/>
        <img className='carousel-img' src={Ivy} alt='carousel item'/>
        <img className='carousel-next-img' src={Arrow} alt='arrow for going to next item in carousel'/>
        <CarouselPicker/>
    </div>
  )
}

export default Carousel