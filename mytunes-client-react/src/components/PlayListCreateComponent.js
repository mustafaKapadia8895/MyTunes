import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";

const PlayListCreateComponent = ({
  modalState,
  toggleModal,
  playlistInputValue,
  createPlaylist,
  playlistInputChanged,
  sessionId
}) => {
  return (
    <Modal
      size="tiny"
      open={modalState}
      onClose={toggleModal}
      className="wbdv-modal"
    >
      <Modal.Header>Create A Playlist</Modal.Header>
      <Modal.Content>
        <Form.Input
          // size="large"
          fluid
          placeholder="Playlist Name"
          className="bg-secondary"
          type="text"
          id="playlistname"
          value={playlistInputValue}
          onChange={event => playlistInputChanged(event.target.value)}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={toggleModal}>Back</Button>
        <Button
          positive
          onClick={() => { createPlaylist(sessionId, playlistInputValue); toggleModal() }}
        >
          Create{" "}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default PlayListCreateComponent;
