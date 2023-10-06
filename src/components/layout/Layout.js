import React, { Children } from 'react'
import "./Layout.css"
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = ({listItems, home=false, children, pageClass}) => {
  return (
    <div className={pageClass}>
        <Header listItems={listItems} home={home}/>
        <main className={`${home && 'main-content-home'}`}>
            {children}
        </main>
        {!home && <Footer/>}
    </div>
  )
}

export default Layout