import React from "react";
import { connect } from "react-redux";
import {
  followUser,
  getFollowerUsers,
  getFollowingUsers,
  unfollowUser
} from "../actions/FollowActions";
import { getLikedSongs, likeSong, unlikeSong } from "../actions/LikesActions";
import {
  addSongToPlaylist,
  getPlaylists
} from "../actions/PlayListDisplayActions";
import {
  searchInputChanged,
  songSelected
} from "../actions/SongDisplayActions";
import SearchComponent from "../components/SearchComponent";

const SearchPageContainer = ({ match }) => {
  const stateToPropertyMapper = state => ({
    selectedSong: state.songDisplayReducer.selectedSong,
    songs: state.songDisplayReducer.songs,
    users: state.songDisplayReducer.users,
    searchValue: state.songDisplayReducer.searchValue,
    sessionId: state.myTunesReducer.sessionId,
    likedSongs: state.likeSongReducer.likedSongs,
    followingUsers: state.followUserReducer.followingUsers,
    match: match,
    playlists: state.playlistDisplayReducer.playlists
  });

  const dispatcherToPropertyMapper = {
    songSelected,
    searchInputChanged,
    likeSong,
    unlikeSong,
    followUser,
    unfollowUser,
    getLikedSongs,
    getPlaylists,
    getFollowerUsers,
    getFollowingUsers,
    addSongToPlaylist
  };

  const MyTunesContainerRedux = connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
  )(SearchComponent);

  return <MyTunesContainerRedux />;
};

export default SearchPageContainer;
