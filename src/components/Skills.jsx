import React from "react";
import "../styles/Skills.css"

import HTML from "../assets/projects/tech/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Express from "../assets/express.png";
import GitHub from "../assets/github.png";
import Bootstrap from "../assets/bootstrap.jpeg";
import Mongo from "../assets/mongo.png";
import Typescript from "../assets/typescript.png";
import ChakraUi from "../assets/chakraUi.jfif";
import Redux from "../assets/projects/tech/redux.png";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-content">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-grid">
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={HTML}
              alt="HTML icon"
            />
            <p className="skills-card-name">HTML</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={CSS}
              alt="CSS icon"
            />
            <p className="skills-card-name">CSS</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="skills-card-name">JavaScript</p>
          </div>
          <div className="skills-card">
            <div className="skills-card-img-container">
              <img
                src={Typescript}
                className="skills-card-img"
                alt="TypeScript icon"
              />
            </div>
            <p className="skills-card-name">TypeScript</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={ReactImg}
              alt="React icon"
            />
            <p className="skills-card-name">React</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Redux}
              alt="Redux icon"
            />
            <p className="skills-card-name">Redux</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={GitHub}
              alt="GitHub icon"
            />
            <p className="skills-card-name">GitHub</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Node}
              alt="Node.js icon"
            />
            <p className="skills-card-name">Node.js</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Mongo}
              alt="MongoDB icon"
            />
            <p className="skills-card-name">MongoDB</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Bootstrap}
              alt="Bootstrap icon"
            />
            <p className="skills-card-name">Bootstrap</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={ChakraUi}
              alt="Chakra UI icon"
            />
            <p className="skills-card-name">Chakra UI</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Express}
              alt="Express icon"
            />
            <p className="skills-card-name">Express</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
