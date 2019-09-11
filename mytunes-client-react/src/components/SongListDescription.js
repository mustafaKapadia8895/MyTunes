import React from "react";
import Moment from "react-moment";
import { Image, List, Rating } from "semantic-ui-react";

const SongListDescription = ({ song }) => {
  const Explicit = () => (
    <span className="bg-secondary mr-2 mt-2 pt-0 rounded">EXPLICIT</span>
  );

  console.log(song.preview_url);

  return (
    <List.Item className="p-3 d-flex justify-content-between">
      <div className="row col">
        <div className="my-auto">
          <Image
            src={song.album.images[0].url}
            size="small"
            floated="left"
            onClick={() => {
              if (song.preview_url) window.open(song.preview_url, "_blank");
            }}
          />
        </div>

        <div className="col">
          <List.Header>{song.name}</List.Header>
          <List.Description className="mt-2">
            {song.explicit ? <Explicit /> : ""}
            {song.artists[0].name} &middot; {song.album.name}
          </List.Description>
          <List.Description className="mt-5">
            Popularity:{" "}
            <Rating
              className="wbdv-white-star"
              defaultRating={song.popularity / 20}
              maxRating={5}
              disabled
            />
          </List.Description>
          <List.Description>
            Released:{" "}
            <Moment format="D MMM, YYYY">{song.album.release_date}</Moment>
          </List.Description>
        </div>
      </div>
      <div className="col-4 col-md-3 col-xl-2">
        <List.Content>
          &nbsp;&middot;&nbsp;
          {new Date(song.duration_ms).getMinutes() || "4"}:
          {new Date(song.duration_ms).getSeconds() || "20"}
          &nbsp;&middot;&nbsp;
          {/* icon should be present only for logged in users */}
        </List.Content>
      </div>
    </List.Item>
  );
};

export default SongListDescription;
