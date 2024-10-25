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
        {/* ------------------------------ */}
        <a
          id="resume-link-1"
          // className="nav-link resume"
          href={Resume}
          download="Prashant-Som-Resume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1QFoxdMHiLmq0QOtwaP1iLzO7x5CvsoRv/view?usp=sharing"
            );
          }}
        >
          <button id="resume-button-1" >
            Resume
          </button>
        </a>
        {/* ------------------------------ */}
          {/* <a
           id="resume-link-1"  
          href={Resume} download=""
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/10PFPlZeAnCnPwTzyjGX56JQASF87DnMt/view?usp=sharing"
            )}}>
            Resume
          </a> */}
           
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
        <a
          id="resume-link-1"
          href={Resume}
          download="Prashant-Som-Resume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1lebhSso8IshOxeoq-7VoFDw_ZyMWCXH1/view?usp=sharing"
            );
          }}
        >
          <button id="resume-button-1" >
            Resume
          </button>
        </a>
        </li>
      </ul>


    </div>
  );
};

export default Navbar;
