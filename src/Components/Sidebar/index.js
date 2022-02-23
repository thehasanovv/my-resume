import React from "react";
import me from "../../assets/me.jpg";
import classes from "./style.module.css";
import Icons from "../UI/Icons";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const history = useNavigate();
  return (
    <React.Fragment>
      <aside className={classes.sidebar}>
        <section>
          <img src={me} alt="" />

          <h2>Elnur Hasanov</h2>
          <a href="mailto:byelnurhasanov@gmail.com">byelnurhasanov@gmail.com</a>
        </section>
        <section className={classes.blurb}>
          <h3>About</h3>
          <p>
            Hi, I'm Elnur. I like coding and expanding my technical skills day
            by day. I have huge interest for learning new frameworks and
            languages.
          </p>

          <button
            onClick={() => {
              history("/resume");
            }}
          >
            Learn More
          </button>
        </section>
        <div className={classes.icons}>
          <Icons color={"aaa"} />
        </div>
      </aside>
    </React.Fragment>
  );
}

export default Sidebar;
