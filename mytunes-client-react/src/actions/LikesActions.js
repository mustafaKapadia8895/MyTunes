export const LIKE_SONG = "LIKE_SONG";
export const LIKE_SONG_SUCCESS = "LIKE_SONG_SUCCESS";
export const GET_LIKED_SONGS = "GET_LIKED_SONGS";
export const GET_LIKED_SONGS_SUCCESS = "GET_LIKED_SONGS_SUCCESS";
export const UNLIKE_SONG = "UNLIKE_SONG";

export const likeSong = (sessionId, song) => ({
  type: LIKE_SONG,
  payload: {
    sessionId,
    song
  }
});

export const unlikeSong = (sessionId, song) => ({
  type: UNLIKE_SONG,
  payload: {
    sessionId,
    song
  }
});

export const getLikedSongs = (sessionId, userId = undefined) => ({
  type: GET_LIKED_SONGS,
  payload: {
    sessionId,
    userId
  }
});

export const likeSongSuccess = () => ({
  type: LIKE_SONG_SUCCESS
});

export const getLikedSongsSuccess = likedSongs => ({
  type: GET_LIKED_SONGS_SUCCESS,
  payload: {
    likedSongs
  }
});
