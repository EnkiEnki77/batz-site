import React from 'react'

const Nav = ({listItems}) => {
  return (
    <nav className='nav'>
        <ul className='nav-list'>
            {listItems.map(item => {
                <li className='nav-list-item'>
                    <a 
                        href={item.path} 
                        className={`nav-link ${item.currentPage && 'current-page'}`}>
                        {item.linkText}
                    </a>
                </li>
            })}
        </ul>
    </nav>
  )
}

export default Nav