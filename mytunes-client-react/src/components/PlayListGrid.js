import React from "react";
import { List } from "semantic-ui-react";
import PlayListRow from "./PlayListRow";
import ResultsGridComponent from "./ResultsGridComponent";

const PlayListGrid = ({
  playlists,
  selectedSong,
  songSelected,
  selectedPlaylist,
  playlistSelected,
  addSongToPlaylist,
  sessionId,
  deletePlaylist,
  showOptions,
  removeFromPlaylist,
  myProfile
}) => {
  return (
    <List
      size="large"
      verticalAlign="middle"
      inverted
      animated
      selection
      className="wbdv-profile-list"
    >
      {playlists.map((playlist, index) =>
        selectedPlaylist && playlist.id === selectedPlaylist.id ? (
          <ResultsGridComponent
            key={playlist.id}
            songs={playlist.spotifySongs}
            selectedSong={selectedSong}
            songSelected={songSelected}
            playlist={playlist}
            sessionId={sessionId}
            showOptions={showOptions}
            removeFromPlaylist={removeFromPlaylist}
          />
        ) : (
          <PlayListRow
            key={playlist.id}
            playlist={playlist}
            playlistSelected={playlistSelected}
            myProfile={myProfile}
            sessionId={sessionId}
            deletePlaylist={deletePlaylist}
            showOptions={showOptions}
            addSongToPlaylist={addSongToPlaylist}
          />
        )
      )}
    </List>
  );
};

export default PlayListGrid;
