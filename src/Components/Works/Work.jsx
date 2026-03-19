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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";

const techGroups = [
  {
    title: "Full-Stack Development",
    items: [
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiCss />, name: "CSS" },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { icon: <SiPython />, name: "Python" },
      { icon: <FaJava />, name: "Java" },
    ],
  },
  {
    title: "ML / Data Tools",
    items: [
      { icon: <SiScikitlearn />, name: "Scikit-learn" },
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiNumpy />, name: "NumPy" },
      { icon: <HiOutlineChartBar />, name: "Matplotlib" },
    ],
  },
];

const Work = () => {
  return (
    <section className="works-container">
      <h1>Tech Stack</h1>
      <p className="works-subtitle">
        Technologies I use to build full-stack applications, real-time systems,
        and ML-powered projects.
      </p>

      {techGroups.map((group) => (
        <div className="tech-group" key={group.title}>
          <h2>{group.title}</h2>
          <div className="works-list-container">
            {group.items.map((item) => (
              <div className="works-item" key={item.name}>
                <div className="works-icon">{item.icon}</div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Work;
