
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
          I possess a solid foundation in full stack development, specializing in MERN stack technologies (MongoDB, Express.js, React.js, and Node.js). I am proficient in building responsive and user-friendly web applications, and I have recently expanded my skill set to include generative AI, enabling me to craft intelligent and dynamic content. My experience includes developing RESTful APIs, integrating databases, and implementing robust authentication and authorization systems.

I enjoy working with JavaScript and have a strong grasp of HTML and CSS for creating beautiful and intuitive user interfaces. Additionally, I am familiar with Express.js, Next.js, Redux, Git, and have a background in data structures and algorithms, Python, and cloud platforms like AWS and Azure. Committed to continuous learning, I actively explore new technologies to stay abreast of industry trends, driven by a passion for delivering efficient, scalable solutions that enhance user experience.
</p>

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
      </div>
    </div>
  );
};

export default Home;

