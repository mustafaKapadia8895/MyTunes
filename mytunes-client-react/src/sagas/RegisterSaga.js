import { call, put, takeLatest } from "redux-saga/effects";
import * as MyTunesActions from "../actions/MyTunesActions";
import * as RegisterActions from "../actions/RegisterActions";
import RegisterService from "../services/RegisterService";

export function* intitiateLogin({ payload }) {
  var response;
  try {
    response = yield call(RegisterService.initiateLogin, payload);
    if (response.status === 200) {
      yield put(MyTunesActions.sessionIdChanged(response.data));
    } else {
      yield put(RegisterActions.registerFailed());
    }
  } catch {
    yield put(RegisterActions.registerFailed());
  }
}

export function* RegisterSaga() {
  yield takeLatest("REGISTER_INITIATED", intitiateLogin);
}
