import { call, put, takeLatest } from "redux-saga/effects";
import * as ProfileActions from "../actions/ProfileActions";
import ProfileService from "../services/ProfileService";

export function* getProfile({ payload }) {
  try {
    const response = yield call(ProfileService.getProfile, payload);
    if (response.status === 200) {
      yield put(ProfileActions.setProfile(response.data));
    } else {
      console.log(response);
    }
  } catch {
    console.log("in catch");
  }
}

export function* updateProfile({ payload }) {
  try {
    const response = yield call(ProfileService.updateProfile, payload);
    if (response.status === 200) {
      yield put(ProfileActions.updateSuccessful(response.data));
    } else {
      console.log(response);
    }
  } catch {
    console.log("in catch");
  }
}

export function* ProfileSaga() {
  yield takeLatest(ProfileActions.GET_PROFILE, getProfile);
  yield takeLatest(ProfileActions.UPDATE_PROFILE, updateProfile);
}
