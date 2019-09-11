import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import followUserReducer from "./followUserReducer";
import homePageReducer from "./homePageReducer";
import likeSongReducer from "./likeSongsReducer";
import loginReducer from "./loginReducer";
import myTunesReducer from "./myTunesReducer";
import playlistDisplayReducer from "./playlistDisplayReducer";
import profileReducer from "./profileReducer";
import registerReducer from "./registerReducer";
import songDisplayReducer from "./songDisplayReducer";

export default combineReducers({
  loginReducer,
  myTunesReducer,
  registerReducer,
  songDisplayReducer,
  profileReducer,
  playlistDisplayReducer,
  likeSongReducer,
  followUserReducer,
  adminReducer,
  homePageReducer
});
