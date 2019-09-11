import React, { useState } from "react";
import { List } from "semantic-ui-react";
import PlaylistSelectModal from "./PlaylistSelectModal";
import SongListDescription from "./SongListDescription";
import SongListRow from "./SongListRow";

const ResultsGridComponent = ({
  songs,
  selectedSong,
  songSelected,
  likedSongs = [],
  likeSong,
  sessionId,
  unlikeSong,
  showOptions = true,
  playlist = false,
  removeFromPlaylist,
  playlists,
  addSongToPlaylist
}) => {
  const [playlistModalState, setPlaylistModalState] = useState(false);
  const [songForModal, setSongForModal] = useState(null);
  const togglePlaylistModal = (song = null) => {
    playlistModalState
      ? setPlaylistModalState(false)
      : setPlaylistModalState(true);
    setSongForModal(song);
  };
  return (
    <>
      <List size="large" verticalAlign="middle" inverted animated selection>
        {songs &&
          songs.map((song, index) =>
            selectedSong && song.id === selectedSong.id ? (
              <SongListDescription song={song} key={song.id} />
            ) : (
              <SongListRow
                key={song.id}
                song={song}
                songSelected={songSelected}
                liked={likedSongs.some(likedSong => likedSong.id === song.id)}
                likeSong={likeSong}
                sessionId={sessionId}
                unlikeSong={unlikeSong}
                showOptions={showOptions}
                togglePlaylistModal={togglePlaylistModal}
                playlist={playlist}
                removeFromPlaylist={removeFromPlaylist}
              />
            )
          )}
      </List>
      <PlaylistSelectModal
        sessionId={sessionId}
        playlists={playlists}
        playlistModalState={playlistModalState}
        togglePlaylistModal={togglePlaylistModal}
        song={songForModal}
        addSongToPlaylist={addSongToPlaylist}
      />
    </>
  );
};

export default ResultsGridComponent;
