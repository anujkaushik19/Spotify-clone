import React from 'react';

const SpotifyContext = React.createContext({
    user : null,
    playlists : [],
    spotify:null,
    discover_weekly:null,
    playing:false,
    item:null
});
export default SpotifyContext;