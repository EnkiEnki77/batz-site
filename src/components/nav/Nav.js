import React from 'react'
import "./Nav.css"
import {AiOutlineClose} from "react-icons/ai"

const Nav = ({listItems, onToggleNav, navToggle}) => {
  return (
    <nav className={`nav ${navToggle ? "nav-open" : "nav-closed"}`}>
        <button className='close-nav-btn' onClick={onToggleNav}><AiOutlineClose/></button>
        <ul className='nav-list'>
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