import { Fragment } from "react";
import layoutClasses from "../Layout/style.module.css";

import Project from "./project";

function Projescts() {
  return (
    <Fragment>
      <div className={layoutClasses.title}>
        <h2>
          <a href="#">Projects</a>
        </h2>
        <p>A SELECTION OF PROJECTS THAT I'M NOT TOO ASHAMED OF</p>
      </div>
      <Project
        title={"Nearest Dollar"}
        published={"NOVEMBER, 2015"}
        image={"https://picsum.photos/seed/picsum/1000/600"}
        description={
          "Lorem ipsum dolor sit amet, consect. Lorem ipsum dolor sit amet, consectetur"
        }
      />
      <Project
        title={"Nearest Dollar"}
        published={"NOVEMBER, 2015"}
        image={"https://picsum.photos/id/237/1000/600"}
        description={
          "Lorem ipsum dolor sit amet, consect. Lorem ipsum dolor sit amet, consectetur"
        }
      />
    </Fragment>
  );
}

export default Projescts;
