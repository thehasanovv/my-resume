import { Fragment } from "react";
import layoutClasses from "../Layout/style.module.css";
import pigGameImg from "../../assets/pig-game.png";
import bookStoreImg from "../../assets/book-store.png";
import teslaCLone from "../../assets/tesla-clone.png";
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
        title={"Tesla clone"}
        published={"January, 2022"}
        image={teslaCLone}
        description={"Tesla clone with react & redux"}
        link={"https://tesla-clone-94qat2rmj-thehasanovv.vercel.app/"}
      />
      <Project
        title={"Book store"}
        published={"December, 2021"}
        image={bookStoreImg}
        description={"Book store from A-Z"}
        link={"https://huseynahmadov.github.io/book-store/index.html"}
      />
      <Project
        title={"Pig Game"}
        published={"November, 2021"}
        image={pigGameImg}
        description={
          "The game of Pig is a very simple jeopardy dice game in which two players race to reach 100 points."
        }
        link={"https://thehasanovv.github.io/pig-game/"}
      />
    </Fragment>
  );
}

export default Projescts;
