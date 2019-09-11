import React from "react";
import { Icon, List } from "semantic-ui-react";

const PlayListRow = ({
  playlist,
  playlistSelected,
  myProfile,
  sessionId,
  deletePlaylist
}) => {
  // const [likedplaylist, setLikedplaylist] = useState("heart outline");
  // const toggleLiked = () => {
  //   if (likedplaylist === "heart") {
  //     setLikedplaylist("heart outline");
  //   } else {
  //     setLikedplaylist("heart");
  //   }
  // };
  console.log(myProfile);
  return (
    <List.Item className="p-3 d-flex justify-content-between">
      <div className="row col">
        <div className="my-auto">
          <Icon name="play" className="" />
        </div>
        <div className="col">
          <List.Content
            onClick={event => {
              if (playlist.songCount > 0) playlistSelected(playlist);
            }}
          >
            <List.Header>{playlist.name || "My PlayList"}</List.Header>
            <List.Description>{playlist.songCount} Songs</List.Description>
          </List.Content>
        </div>
        <div className="ml-auto col-1 col-md-3 col-xl-2 ">
          {myProfile && (
            <List.Content>
              <Icon
                onClick={event => deletePlaylist(sessionId, playlist.id)}
                name="trash alternate"
              />
            </List.Content>
          )}
        </div>
      </div>
    </List.Item>
  );
};

export default PlayListRow;
