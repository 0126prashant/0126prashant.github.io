import React from "react";
import { data } from "../data/data.js";
import "../styles/Projects.css"


const Project = () => {
  const projects = data;

  return (
    <div id="projects" className="work-container">
      <div className="work-content">
        <h2 className="work-heading">Projects</h2>
        <p className="work-description">
          I like to showcase my work, and thus you can see my projects hosted online. Each project is briefly described with links to code repositories and live demos.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
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
