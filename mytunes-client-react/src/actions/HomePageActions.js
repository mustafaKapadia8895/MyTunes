export const BUTTON_TRIGGERED = "BUTTON_TRIGGERED";
export const SONGS_RECEIVED = "SONGS_RECEIVED_HOME";
export const SONG_SELECTED = "SONG_SELECTED_HOME";

export const buttonTriggered = selectedButton => ({
  type: BUTTON_TRIGGERED,
  payload: {
    selectedButton
  }
});

export const songsReceived = songs => ({
  type: SONGS_RECEIVED,
  payload: {
    songs
  }
});

export const songSelected = song => ({
  type: SONG_SELECTED,
  payload: {
    song
  }
});
