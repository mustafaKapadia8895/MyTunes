import { call, put, takeLatest } from "redux-saga/effects";
import * as FollowActions from "../actions/FollowActions";
import FollowService from "../services/FollowService";

export function* getFollows({ payload }) {
  try {
    const response = yield call(FollowService.getFollows, payload);
    if (response.status === 200) {
      yield put(FollowActions.getFollowingUsersSuccess(response.data));
    } else {
      console.log(response);
    }
  } catch {
    console.log("in catch");
  }
}

export function* getFollowers({ payload }) {
  try {
    console.log("followers user", payload);
    const response = yield call(FollowService.getFollowers, payload);
    if (response.status === 200) {
      yield put(FollowActions.getFollowerUsersSuccess(response.data));
    } else {
      console.log(response);
    }
  } catch {
    console.log("in catch");
  }
}

export function* followUser({ payload }) {
  try {
    console.log("following user", payload);
    const response = yield call(FollowService.followUser, payload);
    if (response.status === 200) {
      yield put(FollowActions.followUserSuccess());
    } else {
      console.log(response);
    }
  } catch {
    console.log("in catch");
  }
}

export function* FollowUserSaga() {
  yield takeLatest(FollowActions.FOLLOW_USER, followUser);
  yield takeLatest(FollowActions.UNFOLLOW_USER, followUser);
  yield takeLatest(FollowActions.GET_FOLLOWING_USERS, getFollows);
  yield takeLatest(FollowActions.GET_FOLLOWER_USERS, getFollowers);
}
