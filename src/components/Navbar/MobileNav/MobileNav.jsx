// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from 'react-scroll'
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
          <li><Link to="skills" spy={true} smooth={true} hashSpy={true} offset={-1300} duration={500} className='menu-item' onClick={toggleMenu}>home</Link> </li>
          <li><Link to="skills" spy={true} smooth={true} hashSpy={true} offset={-150} duration={500} className='menu-item' onClick={toggleMenu}>skills</Link> </li>
          <li><Link to="skills" spy={true} smooth={true} hashSpy={true} offset={300} duration={500} className='menu-item' onClick={toggleMenu}>work</Link> </li>
          <li><Link to="skills" spy={true} smooth={true} hashSpy={true} offset={1000} duration={500} className='menu-item' onClick={toggleMenu}>contacts</Link> </li>
        </ul>

        <a href="./assets/docx/Mvula Kolweni CV.pdf" download="myCV" target="blank"><button className='mobile-nav-btn'>Get CV</button></a>

      </div>
    </div>
  </>
}

export default MobileNav;