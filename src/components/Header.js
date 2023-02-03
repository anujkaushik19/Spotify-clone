import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useStateValue } from "./SpotifyProvider";

function Header({ spotify }) {
    const [{user},dispatch] = useStateValue();
  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <SearchIcon />
        <input
          placeholder="search for Artists, Songs or Playlists"
          type="text"
        />
      </div>
      <div className={classes.right}>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
export default Header;
