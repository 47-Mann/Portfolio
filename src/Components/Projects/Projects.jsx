import React from "react";
import { FaLaptopCode, FaDatabase, FaBrain, FaGithub } from "react-icons/fa";
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
              <h3 className="project-title">
                <FaBrain className="project-title-icon" />
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
                A real-time malware detection web app that uses static analysis
                and machine learning to classify executables safely without
                running them.
                <br />
                <strong>Tech Stack:</strong> Python • Scikit-learn • Pandas •
                NumPy • Streamlit
                <br />
                <strong>Highlights:</strong> Static file analysis • Multi-model
                comparison • Instant web-based predictions
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
            <div className="item-des">
              <h3 className="project-title">
                <FaLaptopCode className="project-title-icon" />
                <a
                  className="ml"
                  href="https://nodejs-system-view-api.onrender.com/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  System View Dashboard
                </a>
              </h3>
              <br />
              <p>
                A lightweight real-time monitoring dashboard for tracking live
                system performance and storing recent snapshots for quick health
                visibility.
                <br />
                <strong>Tech Stack:</strong> Node.js • Express • MongoDB •
                Socket.IO • Chart.js
                <br />
                <strong>Highlights:</strong> Live CPU/memory metrics • Snapshot
                storage • Interactive health visualization
              </p>
              <a
                className="ml"
                href="https://github.com/47-Mann/NodeJS-System-View-API"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="project-item">
            <div className="item-des">
              <h3 className="project-title">
                <FaDatabase className="project-title-icon" />
                Blog Platform
              </h3>
              <p>
                A full-stack blog platform for creating, managing, and exploring
                posts with a smooth publishing workflow.
                <br />
                <strong>Tech Stack:</strong> Node.js • Express • MongoDB
                <br />
                <strong>Highlights:</strong> CRUD blog management • Clean
                content flow • Scalable backend structure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
