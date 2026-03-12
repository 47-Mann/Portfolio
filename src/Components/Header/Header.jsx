import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Header.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../../assets/Me.png";
const Header = () => {
  return (
    <div className="header-container">
      {/* {Header Content} */}
      <div className="header-content">
        <h1>Hi, This is </h1>
        <h2 className="fullName">Sahil Mann</h2>
        <h2>
          I am a {""}
          <TypeAnimation
            sequence={[
              "Full Stack Developer 💻",
              500,
              "ML Enthusiast 🤖",
              500,
              "Problem Solver 🧠",
              500,
              "Tech Innovator ⚡",
              500,
            ]}
            speed={15}
            repeat={Infinity}
            cursor={true}
            omitDeletionCharacters={false}
            deletionSpeed={35}
            wrapper="b"
          />
        </h2>
        <p>
          Driven Computer Science student with practical experience in
          developing machine learning models and scalable software systems.
          Completed full-stack and ML-based projects leveraging Python, Java,
          and Scikit-learn. Strong grasp of algorithms, distributed systems, and
          data analysis, with a focus on building efficient, user-centered
          solutions.
        </p>
      </div>
      <div>
        <div className="profile-img-container">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
