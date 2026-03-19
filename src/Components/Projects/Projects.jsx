import React from "react";
import {
  FaLaptopCode,
  FaDatabase,
  FaBrain,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./Projects.css";

const projectData = [
  {
    title: "ML Malware Detection Web App",
    icon: <FaBrain className="project-title-icon" />,
    demo: "https://machine-learning-based-malware-detection-e9ruhic9w7xmai5uhtbr3.streamlit.app",
    github:
      "https://github.com/47-Mann/Machine-Learning-Based-Malware-Detection",
    status: "Live",
    description:
      "ML-based malware detection system that uses static analysis to classify executable files safely without running them.",
    stack: "Python • Scikit-learn • Pandas • NumPy • Streamlit",
    highlights: [
      "Static file analysis for safe malware classification",
      "Compared multiple ML models for prediction performance",
      "Delivered instant predictions through a browser-based interface",
      "Achieved up to 99.36% accuracy and 0.9997 ROC-AUC using XGBoost, demonstrating strong model performance",
    ],
  },
  {
    title: "System View Dashboard",
    icon: <FaLaptopCode className="project-title-icon" />,
    demo: "https://nodejs-system-view-api.onrender.com/dashboard/",
    github: "https://github.com/47-Mann/NodeJS-System-View-API",
    status: "Live",
    description:
      "Real-time system monitoring dashboard for tracking machine performance and storing recent snapshots for quick health visibility.",
    stack: "Node.js • Express • MongoDB • Socket.io • Chart.js",
    highlights: [
      "Live CPU and memory monitoring",
      "Snapshot storage for recent system state history",
      "Interactive dashboard for quick health visualization",
    ],
  },
  {
    title: "Full-Stack Chat Application",
    icon: <FaDatabase className="project-title-icon" />,
    github: "",
    demo: "",
    status: "In Progress",
    description:
      "Real-time full-stack chat platform focused on live messaging, authentication, and responsive user interaction.",
    stack: "React • Node.js • Express • MongoDB • Socket.io",
    highlights: [
      "Real-time messaging architecture",
      "User authentication and protected routes",
      "Typing indicators and middleware-based backend flow",
    ],
  },
];

const Projects = () => {
  return (
    <section className="projects-container">
      <div className="projects-content">
        <h1>
          Featured <span>Projects</span>
        </h1>
        <p className="projects-subtitle">
          A selection of applications I’ve built across full-stack development,
          real-time systems, and machine learning.
        </p>

        <div className="projects-grid">
          {projectData.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-header">
                <h3 className="project-title">
                  {project.icon}
                  {project.title}
                </h3>
                <span
                  className={`project-badge ${project.status.toLowerCase().replace(" ", "-")}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="project-description">{project.description}</p>

              <p className="project-stack">
                <strong>Tech Stack:</strong> {project.stack}
              </p>

              <ul className="project-highlights">
                {project.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.demo && (
                  <a
                    className="project-link"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
