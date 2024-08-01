// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./MobileNav.css";

// eslint-disable-next-line react/prop-types
const MobileNav = ({isOpen, toggleMenu}) => {
  return <>
    <div 
      className={`mobile-menu ${isOpen ? "active": ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        
        <h3 className='logo'>ePortfolio</h3>

        <ul>
          <li><a className='menu-item'>home</a> </li>
          <li><a className='menu-item'>about</a> </li>
          <li><a className='menu-item'>work</a> </li>
          <li><a className='menu-item'>skills</a> </li>
          <li><a className='menu-item'>contacts</a> </li>
        </ul>

      </div>
    </div>
  </>
}

export default MobileNav;