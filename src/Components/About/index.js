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
          A BEAUTIFUL, RESPONSIVE, STATICALLY-GENERATED, REACT APPLICATION
          WRITTEN WITH MODERN JAVASCRIPT.
        </p>
      </div>
      <div className={classes.main}>
        <h3>Intro</h3>
        <p>
          I am a co-founder and the CTO of Arthena where I build tools to price
          fine art quickly, accurately, and at scale. I also advise startups,
          and I invest in people and ideas through a small venture fund. I am
          particularly interested in projects that touch health and safety,
          imaging, social impact, and aerospace. If you think I can be helpful
          to you or would like to meet me, please feel free to get in touch.
        </p>
        <h3>CURRENTLY</h3>
        <p>
          At Arthena, I have learned how to build teams, manage people, shape
          culture, develop relationships with customers, sell enterprise
          products, and build on-line predictive models with technologies like
          Dask, Dagster, TensorFlow, and spaCy. I primarily work as a data
          engineer but have broad experience across Arthena’s stack.
        </p>
        <h3>I like</h3>
        <ul>
          <li>Summer</li>
          <li>Space</li>
          <li>Listening to music</li>
          <li>Watching movies</li>
        </ul>
        <h3>I DREAM OF</h3>
        <ul>
          <li>always finding inspiration.</li>
          <li>enabling a brighter future.</li>
          <li>doing better.</li>
          <li>
            you not checking the commit history for earlier drafts of this file.
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default About;
