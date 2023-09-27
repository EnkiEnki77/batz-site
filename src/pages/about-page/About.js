import React from 'react'
import Layout from '../../components/layout/Layout'
import "./About.css"
import paint from '../../images/paint.png'
import batz from '../../images/DSC_0311 1.png'
import frame from '../../images/frame-7242710_1280 1.png'
import bat from '../../images/Bat.png'

const About = () => {
    const listItems = [
        {path: '/about', currentPage: true, linkText: 'about'},
        {path: '/portfolio', currentPage: false, linkText: 'portfolio'},
        {path: '/shop', currentPage: false, linkText: 'shop'},
        {path: '/contact', currentPage: false, linkText: 'contact'}
    ]
  return (
    <Layout listItems={listItems} pageClass='about-page'>
        <div className='about-image'>
            <img src={paint} alt='paint-splotch' className='paint-splotch'/>
            <img src={batz} alt='The artist Bat' className='batz'/>
            <img src={frame} alt='The artists frame' className='frame'/>
            <img src={bat} alt='bat' className='bat'/>
            <p className='about-body'>Im Bat, a 21-year old photographer and fashion designer based in Roanoke, Virginia. I’ve been an artist my whole life, dabbling in writing, painting, dance, and everything in between before I found my calling in photography. I started officially working towards this business in 2022, and got my kickstart as the head photographer for Roanoke Fashion Week. I am co-founder of Haus of the Star, a fashion collective for Roanoke creatives.</p>
            <p className='about-body'>Being an artist at heart, I specialize in the fine art style of photography. I aim to explore a concept or story in each shoot that uniquely complements my subject. I particularly like to work with fantastical or gothic themes. My style is most suited to portraits, but I carry this approach to my fashion and event photography as well. My goal is to portray feeling in every shot.</p>
            <p className='about-body'>Fashion has always been my first love, and I express my alternative style through my fashion brand, BATZ. I create one-of-a-kind unique pieces from upcycled clothing, each collection revolving around a different theme. In the goal of sustainable fashion, each piece is made from 100% thrifted or deadstock fabric.</p>
            <p className='signature'>Batzygraphy</p>
        </div>
    </Layout>
  )
}

export default About