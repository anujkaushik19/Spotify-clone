import React from "react";
import classes from "./Sidebar.module.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useStateValue } from "./SpotifyProvider";

function Sidebar() {
  const [{playlists},dispatch] = useStateValue();
  console.log(playlists)
  return (
    <div className={classes.sidebar}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        className={classes.logo}
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className={classes["sidebar__title"]}>PLAYLISTS</strong>
      <hr />
      {playlists ?.items?.map((playlist)=>(
         <SidebarOption title={playlist.name} />
      ))}
      
    </div>
  );
}

export default Sidebar;
