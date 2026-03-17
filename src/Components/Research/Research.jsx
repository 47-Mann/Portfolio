import React from "react";
import { FaLaptopCode, FaDatabase, FaBrain } from "react-icons/fa";
import "./Research.css";
const Research = () => {
  return (
    <div className="research-container">
      <div className="research-list-container">
        <div className="research-des-container">
          <h1>
            My <span>Research Work</span>
          </h1>
          <h2>
            <a
              className="research-link"
              href="https://github.com/47-Mann/EMBER2024-Temporal-Malware-Detection-Study"
              target="_blank"
              rel="noopener noreferrer"
            >
              Temporal Generalization of Static Malware Detectors: A Large-Scale
              Empirical Study
            </a>
          </h2>
          <div className="research-item">
            <ul>
              <li>
                Conducted an empirical study on temporal robustness of malware
                detection models using EMBER2024 (3M+ samples)
              </li>
              <li>
                Evaluated LR, SVM, LightGBM, XGBoost, and MLP under strict
                chronological splits
              </li>
              <li>
                Identified performance degradation under temporal drift,
                especially in recall
              </li>
              <li>
                Demonstrated limitations of random-split evaluation (overly
                optimistic results)
              </li>
              <li>
                Performed permutation feature importance to analyze feature
                stability across time
              </li>
              <li>
                Accepted for oral presentation at an international conference
                (ICAISET 2026)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
