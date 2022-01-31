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
          <a href="mailto:hasanov.95@gmail.com">hasanov.e95@gmail.com</a>
        </section>
        <section className={classes.blurb}>
          <h3>About</h3>
          <p>
            Hi, I'm Elnur. I like building things. I am a Stanford ICME
            graduate, YC Alumni, and the co-founder and CTO of Arthena. Before
            Arthena I was at Matroid, Planet, Planetary Resources, Facebook, and
            SEDS.
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
