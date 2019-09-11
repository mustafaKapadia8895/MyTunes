import { call, put, takeLatest } from "redux-saga/effects";
import * as LikesActions from "../actions/LikesActions";
import LikesService from "../services/LikesService";

export function* getLikes({ payload }) {
  try {
    const response = yield call(LikesService.getLikedSongs, payload);
    if (response.status === 200) {
      yield put(LikesActions.getLikedSongsSuccess(response.data));
    } else {
      console.log(response);
    }
  } catch {
    console.log("in catch");
  }
}

export function* likeSong({ payload }) {
  try {
    console.log(payload);
    const response = yield call(LikesService.likeSong, payload);
    if (response.status === 200) {
      yield put(LikesActions.likeSongSuccess());
    } else {
      console.log(response);
    }
  } catch {
    console.log("in catch");
  }
}

export function* LikeSongSaga() {
  yield takeLatest(LikesActions.GET_LIKED_SONGS, getLikes);
  yield takeLatest(LikesActions.LIKE_SONG, likeSong);
  yield takeLatest(LikesActions.UNLIKE_SONG, likeSong);
}
