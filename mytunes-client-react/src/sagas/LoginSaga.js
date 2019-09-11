import { call, put, takeLatest } from "redux-saga/effects";
import * as LoginActions from "../actions/LoginActions";
import * as MyTunesActions from "../actions/MyTunesActions";
import LoginService from "../services/LoginService";

export function* intitiateLogin({ payload }) {
  var response;
  try {
    response = yield call(LoginService.initiateLogin, payload);
    if (response.status === 200) {
      yield put(MyTunesActions.sessionIdChanged(response.data));
    } else {
      yield put(LoginActions.loginFailed());
    }
  } catch {
    yield put(LoginActions.loginFailed());
  }
}

export function* LoginSaga() {
  yield takeLatest("LOGIN_INITIATED", intitiateLogin);
}
