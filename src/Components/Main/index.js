import React from "react";
import classes from "../Layout/style.module.css";

function Main() {
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
      <div>
        <p>
          Welcome to my website. Please feel free to read more about me, or you
          can check out my resume, projects, view site statistics, or contact
          me.
        </p>
        <p>
          Source available{" "}
          <a link href="https://github.com/thehasanovv/my-resume">
            here
          </a>
          .
        </p>
      </div>
    </React.Fragment>
  );
}

export default Main;
