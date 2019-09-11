import { all } from "redux-saga/effects";
import { AdminSaga } from "./AdminSaga";
import { FollowUserSaga } from "./FollowUserSaga";
import { HomePageSaga } from "./HomePageSaga";
import { LikeSongSaga } from "./LikeSongSaga";
import { LoginSaga } from "./LoginSaga";
import { PlaylistSaga } from "./PlaylistSaga";
import { ProfileSaga } from "./ProfileSaga";
import { RegisterSaga } from "./RegisterSaga";
import { SearchSaga } from "./SearchSaga";
export default function* rootSaga() {
  yield all([
    SearchSaga(),
    RegisterSaga(),
    LoginSaga(),
    ProfileSaga(),
    LikeSongSaga(),
    FollowUserSaga(),
    AdminSaga(),
    PlaylistSaga(),
    HomePageSaga()
  ]);
}
