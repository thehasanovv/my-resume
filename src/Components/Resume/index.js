import React from "react";
import classes from "../Layout/style.module.css";
import rClasses from "./style.module.css";

function Resume() {
  return (
    <React.Fragment>
      <div className={rClasses.header}>
        <h2 className={rClasses.title}>
          <a>Resume</a>
        </h2>
        <ul className={rClasses.list}>
          <li>
            <a href="#education">EDUCATION</a>
          </li>
          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#courses">COURSES</a>
          </li>
        </ul>
      </div>
      <div id="education" className={rClasses.education}>
        <h3>EDUCATION</h3>
        <p>
          M.S. Computational and Mathematical Engineering <br />
          <span>Stanford University, 2016</span>
        </p>
      </div>
      <div id="experience" className={rClasses.experience}>
        <h3>EXPERIENCE</h3>
        <h4>
          <a href="#">Roof Academic Training</a> - Accauntants
        </h4>
        <p>JANUARY 2014 - PRESENT</p>
        <div className={classes.main}>
          <ul>
            <li>
              Deployed quantitative strategies to predict the value of fine art
              in various pricing contexts.
            </li>
            <li>
              Built production, on-line, end-to-end optimized machine learning
              pipelines with Pandas, Numpy, Scikit, Tensorflow, Dagster,
              Postgres, etc. on GCP with Kubernetes.
            </li>
            <li>
              Designed micro-service architecture around: data collection, data
              integrity, feature engineering, research, strategy, backtesting,
              deployment, and reporting.
            </li>
            <li>
              YC Alumn. Worked on everything. Built a 16-person team. Operated
              company for 6+ years.
            </li>
          </ul>
        </div>
      </div>
      <div id="skills" className={rClasses.experience}>
        <h3>SKILLS</h3>
        <div className={classes.main}>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>API</li>
            <li>Fetch</li>
          </ul>
        </div>
      </div>
      <div id="courses" className={rClasses.courses}>
        <h3>Courses</h3>
      </div>
    </React.Fragment>
  );
}

export default Resume;
