import React from "react";
import Resume from "../assets/resume.pdf";
import passport from "../assets/passport.JPG";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "../styles/About.css"; // Import external CSS file or create a Material-UI component

const About = () => {
  return (
    <div id="about" name="about" className="about-container">
      <div className="about-content">
        <div className="about-heading">
          <p id="about" className="about-section-heading about section">
            About
          </p>
        </div>
      </div>

      <div className="about-details">
        <div className="profile-image home-img" >
          <img src={passport} alt="profile-image" />
        </div> 
        <div className="user-intro">
        <p id="user-detail-intro user-detail-name">
        Passionate about crafting exceptional digital experiences, I am an enthusiastic and driven Full Stack Web Developer. With a hunger for knowledge and a constant drive to stay ahead of the curve, I am always seeking new opportunities to apply my extensive skills and expertise. I bring a dynamic blend of creativity and technical prowess, leveraging a diverse tech stack including HTML, CSS, JavaScript, React, Redux, and ChakraUI. From designing sleek user interfaces to developing robust backend systems, I thrive in collaborative and innovative environments. With a proven track record of delivering high-quality solutions, I am ready to make a meaningful impact on your organization's success, driving growth and achievement in this fast-paced digital landscape.
          </p>
        </div>      
            
      </div>

      <div className="resume-button">
            <a href={Resume} download={"Prashant-Som-Resume"}>
              <button className="resume-download-button">
                <div className="button-content">
                  Resume
                  <span className="button-icon">
                    <AiOutlineCloudDownload />
                  </span>
                </div>
              </button>
            </a>
          </div>
    </div>
  );
};

export default About;
