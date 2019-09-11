import { call, put, takeLatest } from "redux-saga/effects";
import * as PlayListDisplayActions from "../actions/PlayListDisplayActions";
import PlaylistService from "../services/PlaylistService";

export function* getPlaylists({ payload }) {
  var response;
  try {
    response = yield call(PlaylistService.getPlaylists, payload);
    if (response.status === 200) {
      yield put(PlayListDisplayActions.getPlaylistsSuccess(response.data));
    } else {
      console.log(response);
    }
  } catch {
    console.log(response);
  }
}

export function* createPlaylist({ payload }) {
  var response;
  try {
    response = yield call(PlaylistService.createPlaylist, payload);
    if (response.status === 200) {
      yield put(PlayListDisplayActions.createPlaylistSuccess(response.data));
    } else {
      console.log(response);
    }
  } catch {
    console.log(response);
  }
}

export function* deletePlaylist({ payload }) {
  var response;
  try {
    response = yield call(PlaylistService.deletePlaylist, payload);
    if (response.status === 200) {
      yield put(
        PlayListDisplayActions.deletePlaylistSuccess(payload.playlistId)
      );
    } else {
      console.log(response);
    }
  } catch {
    console.log(response);
  }
}

export function* addSongToPlaylist({ payload }) {
  var response;
  try {
    console.log("pl saga");
    console.log("payload", payload);
    response = yield call(PlaylistService.addSongToPlaylist, payload);
    if (response.status === 200) {
      yield put(PlayListDisplayActions.addSongToPlaylistSuccess(response.data));
    } else {
      console.log(response);
    }
  } catch {
    console.log(response);
  }
}

export function* removeSongFromPlaylist({ payload }) {
  console.log(payload);
  var response;
  try {
    response = yield call(PlaylistService.deleteSongFromPlaylist, payload);
    if (response.status === 200) {
      yield put(
        PlayListDisplayActions.removeFromPlaylistSuccess(response.data)
      );
    } else {
      console.log(response);
    }
  } catch {
    console.log(response);
  }
}

export function* PlaylistSaga() {
  yield takeLatest("GET_PLAYLISTS", getPlaylists);
  yield takeLatest("CREATE_PLAYLIST", createPlaylist);
  yield takeLatest("DELETE_PLAYLIST", deletePlaylist);
  yield takeLatest(
    PlayListDisplayActions.REMOVE_FROM_PLAYLIST,
    removeSongFromPlaylist
  );
  yield takeLatest(
    PlayListDisplayActions.ADD_SONG_TO_PLAYLIST,
    addSongToPlaylist
  );
}
