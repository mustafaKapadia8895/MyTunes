import { ADD_SONG_TO_PLAYLIST_SUCCESS } from "../actions/PlayListDisplayActions";

const initialState = {
  selectedPlaylist: null,
  playlistInputValue: "",
  playlists: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "PLAYLIST_SELECTED":
      return { ...state, selectedPlaylist: payload.playlist };

    case "PLAYLIST_INPUT_CHANGED":
      return {
        ...state,
        playlistInputValue: payload.newValue
      };

    case "GET_PLAYLISTS_SUCCESS":
      return {
        ...state,
        playlists: payload.playlists
      };
    case "CREATE_PLAYLIST_SUCCESS":
      return {
        ...state,
        playlists: [...state.playlists, payload.playlist]
      };
    case ADD_SONG_TO_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlists: state.playlists.map(playlist =>
          playlist.id === payload.playlist.id ? payload.playlist : playlist
        )
      };
    case "DELETE_PLAYLIST_SUCCESS":
      return {
        ...state,
        playlists: state.playlists.filter(
          playlist => playlist.id !== payload.playlistId
        )
      };

    case "REMOVE_FROM_PLAYLIST_SUCCESS":
      return {
        ...state,
        playlists: state.playlists.map(playlist =>
          playlist.id === payload.playlist.id ? payload.playlist : playlist
        )
      };

    default:
      return state;
  }
};
