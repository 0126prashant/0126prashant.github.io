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
import Aws from "../assets/logo_0.png";
import Vercel from "../assets/logo-vercel.svg";
import  Next from "../assets/nextlogo.jpg";
import  Python from "../assets/python-logo.jpeg";
import  Azure from "../assets/azurelogo.jpeg";
import  GenAi from "../assets/Generative_AI_(2).png";
import  Tailwind from "../assets/tailwind.png";
import  PromptEng from "../assets/prompteng.webp";
import  RunPod from "../assets/runpod.png";
import  Hugginface from "../assets/huggingface.png";
import  Docker from "../assets/docker.jpeg";

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


          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Aws}
              alt="aws icon"
            />
            <p className="skills-card-name">AWS</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Next}
              alt="next icon"
            />
            <p className="skills-card-name">Next-Js</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Vercel}
              alt="Vercel icon"
            />
            <p className="skills-card-name">Vercel</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Python}
              alt="Python icon"
            />
            <p className="skills-card-name">Python</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Azure}
              alt="Azure icon"
            />
            <p className="skills-card-name">Azure</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={GenAi}
              alt="GenAi icon"
            />
            <p className="skills-card-name">Generative_AI_</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={PromptEng}
              alt="PromptEng icon"
            />
            <p className="skills-card-name">Prompt Engineering</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Tailwind}
              alt="Tailwind icon"
            />
            <p className="skills-card-name">Tailwind-Css</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Hugginface}
              alt="Hugginface icon"
            />
            <p className="skills-card-name">Hugginface</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={RunPod}
              alt="RunPod icon"
            />
            <p className="skills-card-name">RunPod</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={Docker}
              alt="Docker icon"
            />
            <p className="skills-card-name">Docker</p>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Skills;
