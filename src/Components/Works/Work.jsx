import React from "react";
import "./Work.css";
import {
  SiJavascript,
  SiPython,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPlotly,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Work = () => {
  return (
    <div className="works-container">
      <h1>My Tech Stack</h1>

      <div className="works-list-container">
        <div className="works-item">
          <SiJavascript />
          <p>JavaScript</p>
        </div>

        <div className="works-item">
          <SiPython />
          <p>Python</p>
        </div>

        <div className="works-item">
          <FaJava />
          <p>Java</p>
        </div>

        <div className="works-item">
          <SiCss />
          <p>CSS</p>
        </div>

        <div className="works-item">
          <SiReact />
          <p>React</p>
        </div>

        <div className="works-item">
          <SiNodedotjs />
          <p>NodeJS</p>
        </div>

        <div className="works-item">
          <SiExpress />
          <p>ExpressJS</p>
        </div>

        <div className="works-item">
          <SiMongodb />
          <p>MongoDB</p>
        </div>

        <div className="works-item">
          <SiScikitlearn />
          <p>Scikit-learn</p>
        </div>

        <div className="works-item">
          <SiPandas />
          <p>Pandas</p>
        </div>

        <div className="works-item">
          <SiNumpy />
          <p>NumPy</p>
        </div>

        <div className="works-item">
          <SiPlotly />
          <p>Matplotlib</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
