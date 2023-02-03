import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import classes from "./Player.module.css";
import Sidebar from "./Sidebar";

function Player({spotify}) {
  return (
    <div className={classes.player}>
      <div className={classes["player-body"]}>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
     <Footer/>
    </div>
  );
}

export default Player;
