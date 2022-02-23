import React from "react";
import classes from "../Layout/style.module.css";
import Icons from "../UI/Icons";
function About() {
  return (
    <React.Fragment>
      <div className={classes.title}>
        <h2>
          <a href="#">Contact</a>
        </h2>
      </div>
      <p style={{ color: "#646464" }}>
        Feel free to get in touch. You can email me at: <br />
        <span>
          <a
            href="mailto:byelnurhasanov@gmail.com"
            style={{ color: "#646464" }}
          >
            byelnurhasanov@gmail.com
          </a>
        </span>
      </p>
      <Icons color={"#000"} />
    </React.Fragment>
  );
}

export default About;
