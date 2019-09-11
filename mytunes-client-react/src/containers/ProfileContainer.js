import React from "react";
import { connect } from "react-redux";
import {
  followUser,
  getFollowerUsers,
  getFollowingUsers,
  unfollowUser
} from "../actions/FollowActions";
import { getLikedSongs, likeSong, unlikeSong } from "../actions/LikesActions";
import { logOutInitiated } from "../actions/MyTunesActions";
import {
  addSongToPlaylist,
  createPlaylist,
  deletePlaylist,
  getPlaylists,
  playlistInputChanged,
  playlistSelected,
  removeFromPlaylist
} from "../actions/PlayListDisplayActions";
import {
  firstNameInputChanged,
  getProfile,
  lastNameInputChanged,
  passwordInputChanged,
  setProfile,
  triggerEditMode,
  updateFailed,
  updateProfile,
  updateSuccessful,
  usernameInputChanged
} from "../actions/ProfileActions";
import { songSelected } from "../actions/SongDisplayActions";
import ProfileComponent from "../components/ProfileComponent";
const ProfileContainer = ({ match }) => {
  const stateToPropertyMapper = state => ({
    sessionId: state.myTunesReducer.sessionId,
    profile: state.profileReducer.profile,
    editMode: state.profileReducer.editMode,
    selectedPlaylist: state.playlistDisplayReducer.selectedPlaylist,
    selectedSong: state.songDisplayReducer.selectedSong,
    usernameValue: state.profileReducer.usernameValue,
    passwordValue: state.profileReducer.passwordValue,
    firstNameValue: state.profileReducer.firstNameValue,
    lastNameValue: state.profileReducer.lastNameValue,
    errorMessage: state.profileReducer.errorMessage,
    likedSongs: state.likeSongReducer.likedSongs,
    playlistInputValue: state.playlistDisplayReducer.playlistInputValue,
    playlists: state.playlistDisplayReducer.playlists,
    followingUsers: state.followUserReducer.followingUsers,
    followerUsers: state.followUserReducer.followerUsers,
    match: match
  });

  const dispatcherToPropertyMapper = {
    getProfile,
    setProfile,
    triggerEditMode,
    playlistSelected,
    songSelected,
    usernameInputChanged,
    passwordInputChanged,
    firstNameInputChanged,
    lastNameInputChanged,
    updateProfile,
    updateFailed,
    updateSuccessful,
    likeSong,
    unlikeSong,
    createPlaylist,
    playlistInputChanged,
    followUser,
    unfollowUser,
    logOutInitiated,
    getLikedSongs,
    getPlaylists,
    getFollowerUsers,
    getFollowingUsers,
    addSongToPlaylist,
    deletePlaylist,
    removeFromPlaylist
  };

  const ProfileContainerRedux = connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
  )(ProfileComponent);

  return <ProfileContainerRedux />;
};

export default ProfileContainer;
