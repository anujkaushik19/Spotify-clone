import React from "react";
import classes from './SongRow.module.css'

function SongRow({ track,playSong}) {
    
  return (
    <div className={classes["song-row"]} onClick={()=>playSong(track.id)}>
      <img src={track.album.images[0].url}  className={classes['song-row-album']} />
      <div className={classes["song-row-info"]}>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(",")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
