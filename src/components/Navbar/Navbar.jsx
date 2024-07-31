/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
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
                  <li><a className='menu-item'>home</a> </li>
                  <li><a className='menu-item'>about</a> </li>
                  <li><a className='menu-item'>projects</a> </li>
                  <li><a className='menu-item'>skills</a> </li>
                  <li><a className='menu-item'>contacts</a> </li>
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