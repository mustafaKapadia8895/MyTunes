export const ADD_SONG_TO_PLAYLIST = "ADD_SONG_TO_PLAYLIST";
export const ADD_SONG_TO_PLAYLIST_SUCCESS = "ADD_SONG_TO_PLAYLIST_SUCCESS";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
export const REMOVE_FROM_PLAYLIST_SUCCESS = "REMOVE_FROM_PLAYLIST_SUCCESS";

export const playlistSelected = playlist => ({
  type: "PLAYLIST_SELECTED",
  payload: {
    playlist
  }
});

export const playlistInputChanged = newValue => ({
  type: "PLAYLIST_INPUT_CHANGED",
  payload: {
    newValue
  }
});
export const getPlaylists = (sessionId, userId = undefined) => ({
  type: "GET_PLAYLISTS",
  payload: {
    sessionId,
    userId
  }
});

export const getPlaylistsSuccess = playlists => ({
  type: "GET_PLAYLISTS_SUCCESS",
  payload: {
    playlists
  }
});

export const createPlaylist = (sessionId, playlist) => ({
  type: "CREATE_PLAYLIST",
  payload: {
    sessionId,
    playlist
  }
});

export const createPlaylistSuccess = playlist => ({
  type: "CREATE_PLAYLIST_SUCCESS",
  payload: { playlist }
});

export const deletePlaylist = (sessionId, playlistId) => ({
  type: "DELETE_PLAYLIST",
  payload: {
    sessionId,
    playlistId
  }
});

export const deletePlaylistSuccess = playlistId => ({
  type: "DELETE_PLAYLIST_SUCCESS",
  payload: {
    playlistId
  }
});

export const addSongToPlaylist = (sessionId, playlistId, song) => ({
  type: ADD_SONG_TO_PLAYLIST,
  payload: {
    sessionId,
    playlistId,
    song
  }
});

export const addSongToPlaylistSuccess = playlist => ({
  type: ADD_SONG_TO_PLAYLIST_SUCCESS,
  payload: {
    playlist
  }
});

export const removeFromPlaylist = (sessionId, playlistId, songId) => ({
  type: REMOVE_FROM_PLAYLIST,
  payload: {
    sessionId,
    playlistId,
    songId
  }
});

export const removeFromPlaylistSuccess = playlist => ({
  type: REMOVE_FROM_PLAYLIST_SUCCESS,
  payload: {
    playlist
  }
});
