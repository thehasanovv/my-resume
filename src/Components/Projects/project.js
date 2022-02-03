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
          <a href={props.link} className={classes.image} target="_blank">
            <img src={props.image} alt="" />
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
