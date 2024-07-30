/* eslint-disable no-unused-vars */
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav-container">
        <div className='nav-content'>
            <h3 className='logo'><a>ePortfolio</a></h3>
            <ul>
                <li><a className='menu-item'>home</a> </li>
                <li><a className='menu-item'>about</a> </li>
                <li><a className='menu-item'>projects</a> </li>
                <li><a className='menu-item'>skills</a> </li>
                <li><a className='menu-item'>contacts</a> </li>
            </ul>

            <button className='menu-btn' onClick={()=>{}}>
                <span className={"material-symbol-outlined"} style={{fontSize:"0.8rem"}}>
                    menu
               </span>
            </button>
        </div>
    </nav>
  )
}

export default Navbar 