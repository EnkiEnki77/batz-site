import React from 'react'
import "./CarouselPicker.css"

const CarouselPicker = () => {
  return (
    <div className='picker'>
        
        <div className='picker-item'><div className='picker-item-selected'></div></div>
        <div className='picker-item'><div className='picker-item-not-selected'></div></div>
        <div className='picker-item'><div className='picker-item-not-selected'></div></div>
        <div className='picker-item'><div className='picker-item-not-selected'></div></div>
    </div>
  )
}

export default CarouselPicker