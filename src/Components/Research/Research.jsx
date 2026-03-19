import React from "react";
import "./Research.css";

const Research = () => {
  return (
    <section className="research-container">
      <div className="research-content">
        <p className="research-label">Research Work</p>

        <h1>Temporal Generalization of Static Malware Detectors</h1>

        <h2>
          <a
            className="research-link"
            href="https://github.com/47-Mann/EMBER2024-Temporal-Malware-Detection-Study"
            target="_blank"
            rel="noopener noreferrer"
          >
            Large-Scale Empirical Study on EMBER2024
          </a>
        </h2>

        <p className="research-summary">
          A large-scale study analyzing how static malware detection models
          degrade over time under realistic chronological evaluation.
        </p>

        <div className="research-item">
          <ul>
            <li>
              Used EMBER2024 with 3M+ samples to study temporal robustness in
              malware detection
            </li>
            <li>
              Evaluated Logistic Regression, SVM, LightGBM, XGBoost, and MLP
              under strict chronological splits
            </li>
            <li>
              Observed performance degradation under temporal drift, especially
              in recall
            </li>
            <li>
              Showed that random-split evaluation can produce overly optimistic
              results
            </li>
            <li>
              Applied permutation feature importance to analyze feature
              stability across time
            </li>
            <li className="highlight">
              <strong>Accepted for oral presentation at ICAISET 2026</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Research;
