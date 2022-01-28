import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <h1>
          <Link to="/">Elnur Hasanov</Link>
        </h1>
        <nav>
          <ul className={isOpen && classes["nav-active"]}>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/resume">RESUME</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
          <div
            className={`${classes.burger} ${isOpen && classes.toggle}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={classes.line1}></div>
            <div className={classes.line2}></div>
            <div className={classes.line3}></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
