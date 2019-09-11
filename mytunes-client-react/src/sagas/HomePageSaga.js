import { call, put, takeLatest } from "redux-saga/effects";
import * as HomePageActions from "../actions/HomePageActions";
import HomePageService from "../services/HomePageService";

export function* getSongsHome() {
  var response;
  try {
    console.log("home page saga");
    response = yield call(HomePageService.getSongs);
    if (response.status === 200) {
      yield put(HomePageActions.songsReceived(response.data));
    } else {
      console.log("in else");
    }
  } catch {
    console.log("in catch");
  }
}

export function* HomePageSaga() {
  yield takeLatest(HomePageActions.BUTTON_TRIGGERED, getSongsHome);
}
