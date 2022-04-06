import React from "react";
import classes from "../Layout/style.module.css";
import rClasses from "./style.module.css";
import { Certificates } from "../../data-app/Certificates";

function Resume() {
  return (
    <React.Fragment>
      <div className={rClasses.header}>
        <h2 className={rClasses.title}>
          <a href="#">Resume</a>
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
          International relations <br />
          <span>Baku State University, 2021</span>
        </p>
      </div>
      <div id="experience" className={rClasses.experience}>
        <h3>EXPERIENCE</h3>
        <h4>
          <a href="#">Roof Academic Training</a> - Accauntants
        </h4>
        <p>December 2019 - September 2021 </p>
        <div className={classes.main}>
          <ul>
            <li>Ensure timely bank payments</li>
            <li>Handle monthly, quarterly and annual closings</li>
            <li>Auditing financial information</li>
          </ul>
        </div>
      </div>
      <div id="skills" className={rClasses.experience}>
        <h3>SKILLS</h3>
        <div className={classes.main}>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React JS</li>
            <li>Material UI</li>
            <li>API</li>
            <li>AJAX</li>
          </ul>
        </div>
      </div>
      <div id="courses" className={rClasses.courses}>
        <h3>Certificates</h3>
        <ul>
          {Certificates.map((certificate) => (
            <li key={certificate.id}>
              <a href={certificate.href}>{certificate.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Resume;
