import { call, put, takeLatest } from "redux-saga/effects";
import * as AdminActions from "../actions/AdminActions";
import AdminService from "../services/AdminService";

export function* getAllUsers({ payload }) {
  try {
    console.log(payload);
    const response = yield call(AdminService.getAllUsers, payload);
    if (response.status === 200) {
      yield put(AdminActions.getAllUsersSuccess(response.data));
    } else {
      yield put(AdminActions.getAllUsersFailed());
    }
  } catch {
    yield put(AdminActions.getAllUsersFailed());
  }
}

export function* deleteUser({ payload }) {
  try {
    console.log(payload);
    const response = yield call(AdminService.deleteUser, payload);
    if (response.status === 200) {
      yield put(AdminActions.deleteUserSuccess());
    } else {
    }
  } catch {
    console.log("in catch");
  }
}

export function* AdminSaga() {
  yield takeLatest(AdminActions.GET_ALL_USERS, getAllUsers);
  yield takeLatest(AdminActions.DELETE_USER, deleteUser);
}
