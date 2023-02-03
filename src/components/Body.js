import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import React from "react";
import classes from "./Body.module.css";
import Header from "./Header";
import { useStateValue } from "./SpotifyProvider";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {
  const [{discover_weekly},dispatch] = useStateValue();
 
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcQ9COmYvdajy`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
 
  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className={classes.body}>
      <Header spotify={spotify} />
      <div className={classes['body-info']}>
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className={classes["info-text"]}>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className={classes['body-songs']}>
        <div className={classes['body-icons']}>
          <PlayCircleFilledIcon className={`${classes.shuffle} ${classes.icon}`} onClick={playPlaylist}/>
          <FavoriteIcon fontSize='large' className={classes.icon}/>
          <MoreHorizIcon className={classes.icon}/>
        </div>
      </div>
      {/* list of songs */}
      {discover_weekly?.tracks.items.map((item)=>(
        
        <SongRow track={item.track} playSong={playSong}/>
      ))}
    </div>
  );
}

export default Body;
