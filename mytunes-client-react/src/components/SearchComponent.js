import React, { useEffect } from "react";
import { Header, Input } from "semantic-ui-react";
import ResultsGridComponent from "./ResultsGridComponent";
import UsersGridComponent from "./UsersGridComponent";

const SearchComponent = ({
  songs,
  selectedSong,
  songSelected,
  searchInputChanged,
  searchValue,
  likedSongs,
  likeSong,
  sessionId,
  unlikeSong,
  users,
  followingUsers,
  followUser,
  unfollowUser,
  getLikedSongs,
  getPlaylists,
  getFollowerUsers,
  getFollowingUsers,
  playlists,
  addSongToPlaylist
}) => {
  useEffect(() => {
    if (sessionId) {
      getLikedSongs(sessionId);
      getPlaylists(sessionId);
      getFollowerUsers(sessionId);
      getFollowingUsers(sessionId);
      console.log("search page rendered");
    }
  }, [
    getFollowerUsers,
    getFollowingUsers,
    getLikedSongs,
    getPlaylists,
    sessionId
  ]);
  return (
    <>
      <div className="wbdv-search">
        <Input
          fluid
          transparent
          focus
          value={searchValue}
          placeholder="Start Typing..."
          className="wbdv-search-input pl-5"
          onChange={event => searchInputChanged(event.target.value)}
        />
      </div>
      <div className="wbdv-search-content text-white">
        {searchValue.length !== 0 ? (
          <>
            {users.length !== 0 && (
              <div className="row ">
                <Header as="h1" className="mt-3 mx-auto text-white">
                  {" "}
                  Users
                </Header>
              </div>
            )}

            <div className="container text-white mt-3">
              <UsersGridComponent
                users={users}
                followingUsers={followingUsers}
                sessionId={sessionId}
                followUser={followUser}
                unfollowUser={unfollowUser}
              />
            </div>
            {songs.length !== 0 && (
              <div className="row ">
                <Header as="h1" className="mt-3 mx-auto text-white">
                  {" "}
                  Songs
                </Header>
              </div>
            )}
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
          </>
        ) : (
          <div className="text-center">
            <h1>Search MyTunes</h1>
            <p>Find your favorite songs.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchComponent;
