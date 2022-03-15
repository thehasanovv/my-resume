import { Fragment } from "react";
import layoutClasses from "../Layout/style.module.css";
import pigGameImg from "../../assets/pig-game.png";
import bookStoreImg from "../../assets/book-store.png";
import teslaCLone from "../../assets/tesla-clone.png";
import adminFoody from "../../assets/admin-foody.png";
import papaJohns from "../../assets/papa-johns.png";
import disney from "../../assets/disney-clone.png";
import shopping from "../../assets/shopping-app.png";
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
        title={"Shopping App"}
        published={"March, 2022"}
        image={shopping}
        description={"Currently working"}
        link={"https://shopping-app-three.vercel.app/"}
      />
      <Project
        title={"Disney+ Clone"}
        published={"February, 2022"}
        image={disney}
        description={"Disnay Clone with redux & firebase"}
        link={"https://disneyplus-clone-53918.web.app/"}
      />
      <Project
        title={"Papa Johns Clone"}
        published={"February, 2022"}
        image={papaJohns}
        description={"Papa Johns Clone with react & redux"}
        link={"https://papa-johns-clone.vercel.app/"}
      />
      <Project
        title={"Admin Foody Delivery"}
        published={"February, 2022"}
        image={adminFoody}
        description={""}
        link={"https://foody-delivery-app.vercel.app/panel/dashboard"}
      />
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
