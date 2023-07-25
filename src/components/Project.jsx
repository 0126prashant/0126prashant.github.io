import React from "react";
import { data } from "../data/data.js";
import "../styles/Projects.css"


const Project = () => {
  const projects = data;

  return (
    <div id="projects" className="work-container">
      <div className="work-content">
        <h2 className="work-heading">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.projectname} />
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.projectname}</h3>
                <p className="project-description">{project.projectdescription}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span className="tech" key={index}>{tech.name}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button className="link-button">Code</button>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <button className="link-button">Live</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
