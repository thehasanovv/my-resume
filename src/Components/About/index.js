import React from "react";

import classes from "../Layout/style.module.css";
function About() {
  return (
    <React.Fragment>
      <div className={classes.title}>
        <h2>
          <a href="#">About this site</a>
        </h2>
        <p>
          RESPONSIVE, STATICALLY-GENERATED, REACT APPLICATION WRITTEN WITH
          MODERN JAVASCRIPT.
        </p>
      </div>
      <div className={classes.main}>
        <h3>Intro</h3>
        <p>
          Goal-oriented Junior React Developer with less than 1 year of
          experience in React JS, HTML and CSS Able to work well independetly or
          as part of a professional computer program development team.
        </p>
        <h3>CURRENTLY</h3>
        <p>
          I am seeking a role where I can grow and learn from experianced team
          members while drawing on project experiance I have already excuated.
        </p>
        <h3>I like</h3>
        <ul>
          <li>Listening to music</li>
          <li>Watching movies</li>
        </ul>
        <h3>I DREAM OF</h3>
        <ul>
          <li>Always finding inspiration.</li>
          <li>Enabling a brighter future.</li>
          <li>Doing better.</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default About;
