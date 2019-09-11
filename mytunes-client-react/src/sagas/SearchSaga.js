import { all, call, put, takeLatest } from "redux-saga/effects";
import * as SongDisplayActions from "../actions/SongDisplayActions";
import SearchService from "../services/SearchService";

export function* getSearchResults({ payload }) {
  try {
    const [songs, users] = yield all([
      call(SearchService.searchTracks, payload.newValue),
      call(SearchService.searchUsers, payload.newValue)
    ]);
    if (songs.status === 200 && users.status === 200) {
      yield put(
        SongDisplayActions.getSearchResultsSuccess({
          songs: songs.data,
          users: users.data
        })
      );
    } else {
      console.log(songs, users);
    }
  } catch {
    console.log("in catch");
  }
}

export function* SearchSaga() {
  yield takeLatest("SEARCH_INPUT_CHANGED", getSearchResults);
}
