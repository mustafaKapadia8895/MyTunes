import {
  BUTTON_TRIGGERED,
  SONGS_RECEIVED,
  SONG_SELECTED
} from "../actions/HomePageActions";

const initialState = {
  selectedSong: null,
  songs: [],
  selectedButton: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SONG_SELECTED:
      return { ...state, selectedSong: payload.song };

    case BUTTON_TRIGGERED:
      console.log("button reducer");
      return {
        ...state,
        selectedButton: payload.selectedButton
      };

    case SONGS_RECEIVED:
      return {
        ...state,
        songs: payload.songs
      };

    default:
      return state;
  }
};
