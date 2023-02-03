export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-8dd29.web.app/";
const client_id = "9fe2b7602b154b0ea9e569f7aef39e93";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = ()=>{
 
   return window.location.hash.substring(1).split("&").reduce((initial,item)=>{
    var parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
   },{})
}

export const LoginUrl = `${authEndPoint}?client_id=${client_id}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
