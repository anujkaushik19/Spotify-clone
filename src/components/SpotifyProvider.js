import React, { useReducer, useContext, createContext } from "react";

const defaultSpotifyState = {
  // remove token value after finished developing
  // token:
  //   "BQCCyrZtFibQbhxHHQTFhpKMoSdtIz6a_jLS9nbWmIztzYhwy5u6GhOz-xTky97e0xOjRElwSwGqeuLTN3oYgqsfr8_su5FT9gmoW6c0ZPeZ1ujKuV1W5xVl2isrN7TNrLoqdgsmyPYkSulsDZq6LFXEJ0REjEeaXs7UjNBhG7T14UiUvXj_1puGAyNLhy1vl65dvbKMkpxRLsz41rppFA",
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
};
export const SpotifyContext = createContext();
export const spotifyReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case 'SET_PLAYING':
        return {
          ...state,
          playing:action.playing
        }
        case 'SET_ITEM':
        return {
          ...state,
          item:action.item
        }
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists : action.playlists
      }
      case 'SET_DISCOVER_WEEKLY':
        return{
          ...state,
          discover_weekly : action.discover_weekly
        }
    default:
      return state;
  }
};

export const SpotifyProvider = (props) => {
  return (
    <SpotifyContext.Provider
      value={useReducer(spotifyReducer, defaultSpotifyState)}
    >
      {props.children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyProvider;
export const useStateValue = () => useContext(SpotifyContext);
