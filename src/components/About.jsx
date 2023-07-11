import React from "react";
import Resume from "../assets/resume.pdf";
import passport from "../assets/passport.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "../styles/About.css"; // Import external CSS file or create a Material-UI component

const About = () => {
  return (
    <div id="about" name="about" className="about-container">
      <div className="about-content">
        <div className="about-heading">
          <p id="about" className="about-section-heading">
            About
          </p>
        </div>
      </div>

      <div className="about-details">
        <div className="profile-image">
          <img src={passport} alt="profile-image" />
        </div> 
        <div className="user-intro">
        <p id="user-detail-intro">
            An enthusiastic and driven Full Stack Web Developer eagerly seeking
            opportunities within an organization to apply extensive skills and
            expertise, driving growth and achievement for the company. Committed
            to constant learning and advancement, this developer aims to stay at
            the forefront of industry trends and emerging technologies. With a
            proven track record in creating dynamic and user-friendly websites
            using a diverse tech stack, including HTML, CSS, JavaScript, React,
            Redux, and ChakraUI, this individual thrives in collaborative and
            innovative environments. Dedicated to delivering high-quality
            solutions, the developer is poised to make a meaningful impact on
            the organization's success.
          </p>
        </div>      
      </div>


      <div className="resume-button">
        <a id="resume-link-2" href={Resume} download={"Prashant-som-resume"}>
          <button className="resume-button">
            <div className="resume-button-content">
              Resume{" "}
              <span className="resume-button-icon">
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
