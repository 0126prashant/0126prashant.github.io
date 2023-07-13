import React, { useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-scroll";
import Resume from "../assets/resume.pdf";
import "../styles/Navbar.css"
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="navbar" id="nav-menu">
      <div className="logo-container">
      <Link to="home" smooth={true} duration={500}>
          <div className="user-detail-name">PRASHANT SOM</div>
        </Link>
      </div>

      <ul className={nav ? "nav-menu active" : "nav-menu"}>
      
        <li className="nav-link home">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-link about">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="nav-link skills">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="nav-link projects">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="nav-link contact">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="nav-link resume">
          <a href={Resume} download={"Prashant-Som-Resume"}>
            Resume
          </a>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={nav ? "mobile-menu active" : "mobile-menu"}>
        <li className="mobile-link">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="mobile-link">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="mobile-link">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="mobile-link">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="mobile-link">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="mobile-link resume">
          <a href={Resume} download={"Prashant-Som-Resume"}>
            Resume
          </a>
        </li>
      </ul>


    </div>
  );
};

export default Navbar;
