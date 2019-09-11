import React, { useEffect } from "react";
import BrowseOptions from "./BrowseOptions";
import ResultsGridComponent from "./ResultsGridComponent";

const HomePageComponent = ({
  selectedSong,
  songs,
  sessionId,
  likedSongs,
  songSelected,
  likeSong,
  unlikeSong,
  buttonTriggered,
  selectedButton,
  playlists,
  getPlaylists,
  addSongToPlaylist
}) => {
  useEffect(() => {
    buttonTriggered("Featured");
    getPlaylists(sessionId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  return (
    <div>
      <BrowseOptions
        buttonTriggered={buttonTriggered}
        selectedButton={selectedButton}
      />

      <div className="container text-white mt-3">
        <ResultsGridComponent
          songs={songs}
          selectedSong={selectedSong}
          songSelected={songSelected}
          likedSongs={likedSongs}
          likeSong={likeSong}
          sessionId={sessionId}
          unlikeSong={unlikeSong}
          playlists={playlists}
          addSongToPlaylist={addSongToPlaylist}
        />
      </div>
    </div>
  );
};

export default HomePageComponent;
