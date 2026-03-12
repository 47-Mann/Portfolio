import React from "react";
import { FaLaptopCode, FaDatabase, FaBrain } from "react-icons/fa";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-list-container">
        <div className="projects-des-container">
          <h1>
            My <span>Projects</span>
          </h1>
          <p>Here are some of the projects I've worked on:</p>
          <div className="project-item">
            <FaLaptopCode className="project-icon" />
            <div className="item-des">
              <h3>Task Manager App</h3>
              <p>Full-stack MERN application for managing tasks.</p>
            </div>
          </div>
          <div className="project-item">
            <FaDatabase className="project-icon" />
            <div className="item-des">
              <h3>Blog Platform</h3>
              <p>Node.js and MongoDB based blogging platform.</p>
            </div>
          </div>
          <div className="project-item">
            <FaBrain className="project-icon" />
            <div className="item-des">
              <h3>Malware Detection using ML</h3>
              <p>
                Static analysis based malware detection using machine learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
