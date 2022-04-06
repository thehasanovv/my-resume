import { Fragment } from "react";
import layoutClasses from "../Layout/style.module.css";

import Project from "./project";
import { Projects } from "../../data-app/Projects";
function Projescts() {
  return (
    <Fragment>
      <div className={layoutClasses.title}>
        <h2>
          <a href="#">Projects</a>
        </h2>
        <p>A SELECTION OF PROJECTS THAT I'M NOT TOO ASHAMED OF</p>
      </div>
      {Projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          published={project.published}
          image={project.image}
          description={project.description}
          link={project.link}
        />
      ))}
    </Fragment>
  );
}

export default Projescts;
