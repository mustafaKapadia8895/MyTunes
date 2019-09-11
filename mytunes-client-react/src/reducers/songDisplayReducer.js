const initialState = {
  selectedSong: null,
  searchValue: "",
  songs: [],
  users: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SONG_SELECTED":
      return { ...state, selectedSong: payload.song };

    case "SEARCH_INPUT_CHANGED":
      return {
        ...state,
        searchValue: payload.newValue
      };

    case "SEARCH_RESULTS_SUCCESS":
      return {
        ...state,
        songs: payload.songs,
        users: payload.users
      };

    default:
      return state;
  }
};
