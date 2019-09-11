import {
  GET_LIKED_SONGS_SUCCESS,
  LIKE_SONG,
  UNLIKE_SONG
} from "../actions/LikesActions";

const initialState = {
  likedSongs: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LIKE_SONG:
      return {
        ...state,
        likedSongs: [...state.likedSongs, payload.song]
      };

    case UNLIKE_SONG:
      return {
        ...state,
        likedSongs: state.likedSongs.filter(song => song.id !== payload.song.id)
      };

    case GET_LIKED_SONGS_SUCCESS:
      return {
        ...state,
        likedSongs: payload.likedSongs
      };

    default:
      return state;
  }
};
