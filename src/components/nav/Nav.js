import React from 'react'
import "./Nav.css"
import Logo from '../logo/Logo'


const Nav = ({listItems, navToggle}) => {
  return (
    <nav className={`nav ${navToggle ? "nav-open" : "nav-closed"}`}>
       
        <ul className='nav-list'>
            <Logo/>
            {listItems.map(item => {
                return (<li className='nav-list-item' key={item.linkText}>
                    <a 
                        href={item.path} 
                        className={`nav-link ${item.currentPage && 'current-page'}`}>
                        {item.linkText}
                    </a>
                </li>)
            })}
        </ul>
    </nav>
  )
}

export default Nav