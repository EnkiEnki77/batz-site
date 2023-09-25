import React, { Children } from 'react'
import "./Layout.css"
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = ({listItems, home, children, pageClass}) => {
  return (
    <div className={pageClass}>
        <Header listItems={listItems}/>
        <main className='main-content'>
            {children}
        </main>
        {!home && <Footer/>}
    </div>
  )
}

export default Layout