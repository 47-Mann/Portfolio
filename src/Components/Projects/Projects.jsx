import React from "react";
import { FaLaptopCode, FaDatabase, FaBrain } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-list-container">
        <div className="projects-des-container">
          <h1>
            My <span>Projects</span>
          </h1>
          <p>Here are my Projects:</p>
          <div className="project-item">
            <div className="item-des">
              <h3>
                <a
                  className="ml"
                  href="https://machine-learning-based-malware-detection-e9ruhic9w7xmai5uhtbr3.streamlit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ML Malware Detection Web App
                </a>
              </h3>
              <br />
              <p>
                Built a real-time malware classifier using static analysis and
                ML, enabling safe threat detection of executables without
                running them.
              </p>
              <a
                className="ml"
                href="https://github.com/47-Mann/Machine-Learning-Based-Malware-Detection"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
