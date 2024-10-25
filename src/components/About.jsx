import React from "react";
import Resume from "../assets/resume.pdf";
import passport from "../assets/passport.png";
// import { BsFillPersonLinesFill } from "react-icons/bs";
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
        <div>
          <img  src={passport} alt="image"  className="profile-image home-img"/>
        </div> 
        <div id="user-detail-intro" className="user-intro">
        <p>
        A highly motivated Full Stack Developer with a deep passion for coding and a strong dedication to product-based companies. Proficient in React, JavaScript, and CSS, excelling in the creation of single-page applications to deliver outstanding user experiences. Possessing over 1200+ hours of hands-on coding experience in HTML, CSS, Javascript, and React.js. A strong enthusiasm for Generative AI fuels the goal of securing a Software Developer position, with the aim of enhancing product experiences.
          </p>
        </div>              
      </div>
{/* Hide this line for passing the testcases */}
      <div className="about-details-mobile">
        <div>
          <img  src={passport} alt="image-mob"  className="image-mob"/>
        </div> 
        <div id="user-detail-intro-mob" className="user-intro-mob">
        <p>
        A highly motivated Full Stack Developer with a deep passion for coding and a strong dedication to product-based companies. Proficient in React, JavaScript, and CSS, excelling in the creation of single-page applications to deliver outstanding user experiences. Possessing over 1200+ hours of hands-on coding experience in HTML, CSS, Javascript, and React.js. A strong enthusiasm for Generative AI fuels the goal of securing a Software Developer position, with the aim of enhancing product experiences.
          </p>
        </div>              
      </div>
{/* Hide this line for passing the testcases */}


      <div className="resume-button">
            <a 
            id="resume-link-2"  
            href={Resume} download={"Prashant-Som-Resume"}
            onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1lebhSso8IshOxeoq-7VoFDw_ZyMWCXH1/view?usp=sharing"
            )}}
            >
              <button 
               id="resume-button-2"
              className="resume-download-button">
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
