export const songSelected = song => ({
  type: "SONG_SELECTED",
  payload: {
    song
  }
});

export const searchInputChanged = newValue => ({
  type: "SEARCH_INPUT_CHANGED",
  payload: {
    newValue
  }
});

export const getSearchResultsSuccess = ({ songs, users }) => ({
  type: "SEARCH_RESULTS_SUCCESS",
  payload: {
    songs,
    users
  }
});
