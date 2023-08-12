import React, { useState } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import "../styles/Footer.css"

const Footer = () => {
  const [showMobileNumber, setShowMobileNumber] = useState(false);

  const handleMouseEnter = () => {
    setShowMobileNumber(true);
  };

  const handleMouseLeave = () => {
    setShowMobileNumber(false);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">© 2023 My-Portfolio. All rights reserved.</p>
        </div>
        <div className="footer-icons">
          <ul className="footer-list">
            <li>
              <div
                className="footer-icon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <BsPhone className="footer-icon-phone" />
                {showMobileNumber && (
                  <div className="mobile-number">
                    <span className="mobile-number-text">+91-9548848329</span>
                  </div>
                )}
              </div>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/prashant-som-0943b4249/" className="footer-link">
                <BsLinkedin className="footer-icon-linkedin" />
              </a>
            </li>
            <li>
              <a href="mailto:prashantsom75@gmail.com" className="footer-link">
                <SiGmail className="footer-icon-gmail" />
              </a>
            </li>
            <li>
              <a href="https://github.com/0126prashant" className="footer-link">
                <AiOutlineGithub className="footer-icon-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
