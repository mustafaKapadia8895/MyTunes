import React from "react";
import { Icon, List, Modal } from "semantic-ui-react";

const PlaylistSelectModal = ({
  sessionId,
  song,
  playlists,
  addSongToPlaylist,
  playlistModalState,
  togglePlaylistModal
}) => {
  return (
    <Modal
      size="large"
      open={playlistModalState}
      onClose={togglePlaylistModal}
      className="wbdv-modal"
      basic
    >
      <Modal.Header>Select Playlist</Modal.Header>
      <Modal.Content>
        {playlists && playlists.length > 0 ? (
          <List size="large" verticalAlign="middle" inverted animated selection>
            {playlists.map((playlist, index) => (
              <List.Item
                key={playlist.id}
                className=" d-flex justify-content-between"
                onClick={() => {
                  addSongToPlaylist(sessionId, playlist.id, song);
                  togglePlaylistModal();
                }}
              >
                <div className="container-fluid no-gutters">
                  <div style={{ textDecoration: "none" }} className="col row">
                    <div className="col-1 my-auto">
                      <Icon name="list alternate outline" className="" />
                    </div>
                    <div className="col">
                      <List.Content>
                        <List.Header>{playlist.name || "Playlist"}</List.Header>
                        <List.Description>
                          {playlist.songCount}
                        </List.Description>
                      </List.Content>
                    </div>
                  </div>
                </div>
              </List.Item>
            ))}
          </List>
        ) : (
          <div>Please create a playlist</div>
        )}
      </Modal.Content>
    </Modal>
  );
};

export default PlaylistSelectModal;
