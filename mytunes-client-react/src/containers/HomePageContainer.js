import React from "react";
import { connect } from "react-redux";
import { buttonTriggered, songSelected, songsReceived } from "../actions/HomePageActions";
import { likeSong, unlikeSong } from "../actions/LikesActions";
import { addSongToPlaylist, getPlaylists } from "../actions/PlayListDisplayActions";
import HomePageComponent from "../components/HomePageComponent";

const HomePageContainer = () => {
  const stateToPropertyMapper = state => ({
    selectedSong: state.homePageReducer.selectedSong,
    songs: state.homePageReducer.songs,
    sessionId: state.myTunesReducer.sessionId,
    likedSongs: state.likeSongReducer.likedSongs,
    selectedButton: state.homePageReducer.selectedButton,
    playlists: state.playlistDisplayReducer.playlists
  });

  const dispatcherToPropertyMapper = {
    songSelected,
    buttonTriggered,
    likeSong,
    unlikeSong,
    songsReceived,
    getPlaylists,
    addSongToPlaylist
  };

  const HomePageContainerRedux = connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
  )(HomePageComponent);

  return <HomePageContainerRedux />;
};

export default HomePageContainer;
