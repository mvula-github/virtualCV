// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-scroll";
import "./MobileNav.css";

// eslint-disable-next-line react/prop-types
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`mobile-menu${isOpen ? " active" : ""}`}
      onClick={toggleMenu}
      aria-label="Mobile navigation menu"
      role="navigation"
      tabIndex={isOpen ? 0 : -1}
    >
      <div
        className="mobile-menu-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          &times;
        </button>
        <h3 className="logo">ePortfolio</h3>
        <ul>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="menu-item"
              onClick={toggleMenu}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="menu-item"
              onClick={toggleMenu}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="menu-item"
              onClick={toggleMenu}
            >
              skills
            </Link>
          </li>
          <li>
            <Link
              to="work"
              spy={true}
              smooth={true}
              duration={500}
              className="menu-item"
              onClick={toggleMenu}
            >
              work
            </Link>
          </li>
          <li>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              duration={500}
              className="menu-item"
              onClick={toggleMenu}
            >
              contacts
            </Link>
          </li>
        </ul>
        <a
          href="./assets/docx/Mvula Kolweni CV.pdf"
          download="myCV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mobile-nav-btn">Get CV</button>
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
