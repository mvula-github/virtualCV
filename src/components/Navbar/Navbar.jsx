/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {Link} from 'react-scroll'
import "./Navbar.css"
import MobileNav from "./MobileNav/MobileNav"

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu)

  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-container">
          <div className='nav-content'>
              <h3 className='logo'>ePortfolio</h3>
              <ul>
                  <li><Link className='menu-item' to="skills" spy={true} smooth={true} hashSpy={true} offset={-1000} duration={500}>home</Link> </li>
                  <li><Link className='menu-item' to="skills" spy={true} smooth={true} hashSpy={true} offset={-200} duration={500}>skills</Link> </li>
                  <li><Link className='menu-item' to="skills" spy={true} smooth={true} hashSpy={true} offset={230} duration={500}>work</Link> </li>
                  <li><Link className='menu-item' to="skills" spy={true} smooth={true} hashSpy={true} offset={1000} duration={500}>contact</Link> </li>
              </ul>

              <button className='menu-btn' onClick={toggleMenu}>
                  <span className={"material-symbol-outlined"} style={{fontSize:"0.8rem"}}>
                      {openMenu ? "close": "menu"}
                </span>
              </button>
          </div>
      </nav>
    </>
  )
}

export default Navbar     