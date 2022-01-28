import React from "react";

import classes from "./style.module.css";
function Project(props) {
  return (
    <React.Fragment>
      <div className={classes["cell-container"]}>
        <article className={classes["mini-post"]}>
          <div className={classes["mini-post-header"]}>
            <h3>{props.title}</h3>
            <time className={classes.published}>{props.published}</time>
          </div>
          <a className={classes.image}>
            <img src={props.image} />
          </a>
        </article>
        <div className={classes.description}>
          <p>{props.description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Project;
