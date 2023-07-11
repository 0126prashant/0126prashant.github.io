import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Resume from "../assets/resume.pdf";
import "../styles/Home.css"; 

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div id="user-detail-intro">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="user-name">PRASHANT SOM</h1>
        <h2 className="user-title">Full Stack Web Developer</h2>
        <div>
          <a id="resume-link-2" href={Resume} download="Prashant-som-resume">
            <button className="resume-button">
              Resume{" "}
              <span className="resume-button-icon">
                <AiOutlineCloudDownload />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
