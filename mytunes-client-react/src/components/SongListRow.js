import React from "react";
import { Icon, List } from "semantic-ui-react";

const SongListRow = ({
  song,
  songSelected,
  liked,
  sessionId,
  likeSong,
  unlikeSong,
  showOptions,
  playlist,
  removeFromPlaylist,
  togglePlaylistModal
}) => {
  return (
    <List.Item className="p-3 d-flex justify-content-between">
      <div className="row col-11 col-md-9 col-xl-10">
        <div className="my-auto d-none d-md-block">
          <Icon name="music" className="" />
        </div>
        <div className="col">
          <List.Content
            onClick={event => {
              songSelected(song);
            }}
          >
            <List.Header className="text-truncate">
              {song.name || "Yellow"}
            </List.Header>
            <List.Description className="text-truncate">
              {(song.artists && song.artists[0].name) || "Coldplay"} &middot;{" "}
              {(song.album && song.album.name) || "Coldplay"}
            </List.Description>
          </List.Content>
        </div>
      </div>
      <div className="ml-auto col-1 col-md-3 col-xl-2 ">
        <List.Content>
          {sessionId && showOptions && (
            <Icon
              name="ellipsis horizontal"
              onClick={() => togglePlaylistModal(song)}
            />
          )}
          <span className="d-none d-md-inline-block">
            &nbsp;&middot;&nbsp;
            {new Date(song.duration_ms).getMinutes() || "4"}:
            {new Date(song.duration_ms).getSeconds() || "20"}
            &nbsp;&middot;&nbsp;
          </span>

          {/* icon should be present only for logged in users */}
          <span>
            {sessionId && showOptions && !playlist && (
              <Icon
                name={liked ? "heart" : "heart outline"}
                onClick={event => {
                  console.log(sessionId);
                  console.log(song.id);
                  if (!liked) likeSong(sessionId, song);
                  else unlikeSong(sessionId, song);
                }}
              />
            )}
          </span>

          <span>
            {sessionId && showOptions && playlist && (
              <Icon
                name="trash alternate"
                onClick={event =>
                  removeFromPlaylist(sessionId, playlist.id, song.id)
                }
              />
            )}
          </span>
        </List.Content>
      </div>
    </List.Item>
  );
};

export default SongListRow;
