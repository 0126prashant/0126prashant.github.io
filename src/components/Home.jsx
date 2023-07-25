
import "../styles/Home.css"; 
import React from "react";
import Resume from "../assets/resume.pdf";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Home = () => {
  return (
    <div id="home" className="home-section">
      <div className="container">
        <div className="user-details">
          <p className="subheading">Hi, my name is</p>
          <h1 id="user-detail-name">PRASHANT SOM</h1>
          <h2 id="user-detail-intro" className="job-title">Full Stack Web Developer.</h2>
          <p className="description">
  I have a strong foundation in full stack development, with a focus on MERN stack technologies (MongoDB, Express.js, React.js, and Node.js). I'm proficient in building responsive and user-friendly web applications using these technologies. I have experience in developing RESTful APIs, integrating databases, and implementing authentication and authorization systems. I enjoy working with JavaScript and have knowledge of HTML and CSS for creating beautiful and intuitive user interfaces. I'm constantly learning and exploring new technologies to stay up-to-date with the latest industry trends. I'm passionate about creating efficient and scalable solutions that meet user needs and deliver a great user experience.
</p>

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
      </div>
    </div>
  );
};

export default Home;

