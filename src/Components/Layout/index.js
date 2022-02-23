import React, { useState, useEffect } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import classes from "./style.module.css";
import Card from "../UI/Card";
import Grid from "@mui/material/Grid";

function Layout(props) {
  const [reverse, setReverse] = useState(false);
  const [windowWidth, setWindowHeight] = useState(window.innerWidth);
  const a = "column-reverse";

  const handleResize = () => {
    setWindowHeight(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (windowWidth < 1200) {
      setReverse(true);
    } else {
      setReverse(false);
    }
  }, [windowWidth]);

  return (
    <React.Fragment>
      <Header />

      <div className={classes["main-container"]}>
        <Grid
          container
          className={classes.wrapper}
          direction={reverse ? a : "row"}
        >
          <Grid item xs={12} sm={12} md={12} lg={4} className={classes.left}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <Card>{props.children}</Card>
          </Grid>
        </Grid>
        
      </div>
    </React.Fragment>
  );
}

export default Layout;
