import React from "react";
import classes from "./Footer.module.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Grid , Slider } from '@mui/material';

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
      <img src="" alt="" className={classes['album-logo']} />
      <div className={classes['song-info']}>
        <h4>Yeah...</h4>
        <p>info..</p>
      </div>
      </div>
      <div className={classes.center}>
        <ShuffleIcon className={classes["footer-green"]} />
        <SkipPreviousIcon className={classes["footer-icon"]} />
        <PlayCircleOutlineIcon fontSize="large" className={classes['footer-icon']}/>
        <SkipNextIcon className={classes["footer-icon"]} />
        <RepeatIcon className={classes["footer-green"]} />
      </div>
      <div className={classes.right}>
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" className={classes.slider} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
