import React, { useEffect, useState } from "react";
import {
  Accordion,
  Dimmer,
  Header,
  Icon,
  Label,
  List,
  Loader
} from "semantic-ui-react";
import PlayListCreateComponent from "./PlayListCreateComponent";
import PlayListGrid from "./PlayListGrid";
import ProfileGrid from "./ProfileGrid";
import RegisterForm from "./RegisterForm.js";
import ResultsGridComponent from "./ResultsGridComponent";
import SidebarComponent from "./SidebarComponent.js";
import UserFollowerModal from "./UserFollowerModal";
const ProfileComponent = ({
  sessionId,
  getProfile,
  profile,
  editMode,
  triggerEditMode,
  usernameInputChanged,
  passwordInputChanged,
  firstNameInputChanged,
  lastNameInputChanged,
  updateProfile,
  passwordValue,
  firstNameValue,
  lastNameValue,
  errorMessage,
  playlistSelected,
  selectedPlaylist,
  selectedSong,
  songSelected,
  likedSongs,
  likeSong,
  unlikeSong,
  playlists,
  playlistInputValue,
  createPlaylist,
  playlistInputChanged,
  followingUsers,
  followerUsers,
  followUser,
  unfollowUser,
  logOutInitiated,
  match,
  getLikedSongs,
  getPlaylists,
  getFollowerUsers,
  getFollowingUsers,
  deletePlaylist,
  removeFromPlaylist,
  addSongToPlaylist
}) => {
  const pid = match.params.pid;

  useEffect(() => {
    if (!sessionId) window.location.replace("/login");
    getProfile(sessionId, pid);
    getLikedSongs(sessionId, pid);
    getPlaylists(sessionId, pid);
    getFollowerUsers(sessionId, pid);
    getFollowingUsers(sessionId, pid);
    console.log("profile page rendered");
  }, [
    getFollowerUsers,
    getFollowingUsers,
    getLikedSongs,
    getPlaylists,
    getProfile,
    pid,
    sessionId
  ]);

  const [modalState, setModalState] = useState(false);
  const [followType, setfollowType] = useState("follower");
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  const toggleModal = () => {
    if (modalState) {
      setModalState(false);
    } else {
      setModalState(true);
    }
  };
  const toggleModalUser = () => {
    if (modalStateUser) {
      setmodalStateUser(false);
    } else {
      setmodalStateUser(true);
    }
  };
  const openUserModal = follower => {
    if (follower === "follower") {
      setmodalUsers(followerUsers);
      setfollowType("follower");
      if (followerUsers.length > 0) toggleModalUser();
    } else {
      setmodalUsers(followingUsers);
      setfollowType("following");
      if (followingUsers.length > 0) toggleModalUser();
    }
  };

  const [modalUsers, setmodalUsers] = useState(followingUsers);
  const [modalStateUser, setmodalStateUser] = useState(false);

  const updateUser = (username, password, firstName, lastName) => {
    profile.username = username;
    profile.password = password;
    profile.firstName = firstName;
    profile.lastName = lastName;
    updateProfile(sessionId, profile);
  };
  return (
    <>
      <SidebarComponent
        sessionId={sessionId}
        logOutInitiated={logOutInitiated}
      />
      <div className="wbdv-content">
        {profile ? (
          <div className="container-fluid d-flex flex-column justify-content-center text-white align-items-center">
            <Header as="h1" className="text-white mt-3 ">
              Account Overview
            </Header>
            <Icon name="user circle" size="massive" />
            <Header as="h2" className="text-white mt-3 ">
              Hi {profile.firstName} {profile.lastName}
            </Header>
            <Label>Username: {profile.username}</Label>

            <List
              horizontal
              relaxed
              className="col-5 d-flex mt-3 justify-content-between wbdv-browse-options "
              size="huge"
            >
              <List.Item>
                <List.Content as={"a"}>
                  <List.Header className="text-white text-center">
                    {profile.playlistCount}
                  </List.Header>
                  <List.Description className="text-white">
                    Playlists
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content
                  as={"a"}
                  onClick={() => openUserModal("follower")}
                >
                  <List.Header className="text-white text-center">
                    {followerUsers.length}
                  </List.Header>
                  <List.Description className="text-white">
                    Followers
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content
                  as={"a"}
                  onClick={() => openUserModal("following")}
                >
                  <List.Header className="text-white text-center">
                    {followingUsers.length}
                  </List.Header>
                  <List.Description className="text-white">
                    Following
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>

            <div className="col-lg-10 row mt-3 justify-content-center align-items-center">
              <Accordion fluid inverted>
                <div className="row">
                  <div className="container-fluid row justify-content-between">
                    <Accordion.Title
                      active={activeIndex === 0}
                      index={0}
                      onClick={handleClick}
                      as={Header}
                      size="large"
                      className="col text-white"
                    >
                      <Icon name="dropdown" />
                      Account
                    </Accordion.Title>

                    {!pid && activeIndex === 0 && (
                      <div className="col-1">
                        <Icon
                          size="large"
                          name="edit outline"
                          onClick={event => triggerEditMode()}
                          className=""
                        />
                      </div>
                    )}
                    <Accordion.Content
                      active={activeIndex === 0}
                      className="col-12 col-md-11 mx-auto"
                    >
                      {!editMode && <ProfileGrid profile={profile} />}

                      {editMode && (
                        <RegisterForm
                          usernameValue={profile.username}
                          passwordValue={passwordValue}
                          firstNameValue={firstNameValue}
                          lastNameValue={lastNameValue}
                          onSubmit={updateUser}
                          errorMessage={errorMessage}
                          usernameInputChanged={usernameInputChanged}
                          passwordInputChanged={passwordInputChanged}
                          firstNameInputChanged={firstNameInputChanged}
                          lastNameInputChanged={lastNameInputChanged}
                          buttonText="Update Profile"
                          disableUsername={true}
                        />
                      )}
                    </Accordion.Content>
                  </div>

                  {likedSongs.length > 0 && (
                    <div className="mt-2 container-fluid row justify-content-between">
                      <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={handleClick}
                        as={Header}
                        size="large"
                        className="col-12 text-white "
                      >
                        <Icon name="dropdown" />
                        Liked Songs
                      </Accordion.Title>
                      <Accordion.Content
                        active={activeIndex === 1}
                        className="col-12"
                      >
                        <ResultsGridComponent
                          songs={likedSongs}
                          likedSongs={likedSongs}
                          sessionId={sessionId}
                          songSelected={songSelected}
                          selectedSong={selectedSong}
                          likeSong={likeSong}
                          unlikeSong={unlikeSong}
                          showOptions={!pid}
                          addSongToPlaylist={addSongToPlaylist}
                        />
                      </Accordion.Content>
                    </div>
                  )}

                  <div className="mt-2 container-fluid row justify-content-between">
                    <Accordion.Title
                      active={activeIndex === 2}
                      index={2}
                      onClick={handleClick}
                      as={Header}
                      size="large"
                      className="col-8 text-white "
                    >
                      <Icon name="dropdown" />
                      Playlists
                    </Accordion.Title>
                    {!pid && activeIndex === 2 && (
                      <div className="col-1">
                        <Icon
                          size="large"
                          name="plus"
                          onClick={toggleModal}
                          className=""
                        />
                      </div>
                    )}

                    <Accordion.Content
                      active={activeIndex === 2}
                      className="col-12"
                    >
                      {playlists.length > 0 ? (
                        <PlayListGrid
                          playlists={playlists}
                          selectedPlaylist={selectedPlaylist}
                          playlistSelected={playlistSelected}
                          selectedSong={selectedSong}
                          songSelected={songSelected}
                          myProfile={!pid}
                          deletePlaylist={deletePlaylist}
                          sessionId={sessionId}
                          showOptions={!pid}
                          removeFromPlaylist={removeFromPlaylist}
                          addSongToPlaylist={addSongToPlaylist}
                        />
                      ) : (
                        <Header as="h3" className="text-white text-center">
                          Please Create a Playlist
                        </Header>
                      )}
                    </Accordion.Content>
                  </div>
                </div>
              </Accordion>
            </div>

            {/* <div className="col-lg-10 row mt-3 justify-content-center align-items-center">
              <div className="mx-auto">
                <Header as="h2" className="text-white ml-1">
                  Playlists
                </Header>
              </div>
              {!pid && (
                <div className="">
                  <Icon name="plus" onClick={toggleModal} />
                </div>
              )}
            </div> */}

            {/* <div className="col-11 col-lg-10 ">
              <PlayListGrid
                playlists={playlists}
                selectedPlaylist={selectedPlaylist}
                playlistSelected={playlistSelected}
                selectedSong={selectedSong}
                songSelected={songSelected}
              />
            </div> */}
            <PlayListCreateComponent
              modalState={modalState}
              toggleModal={toggleModal}
              playlistInputValue={playlistInputValue}
              playlistInputChanged={playlistInputChanged}
              createPlaylist={createPlaylist}
              sessionId={sessionId}
            />
            <UserFollowerModal
              users={modalUsers}
              modalState={modalStateUser}
              toggleModal={toggleModalUser}
              followType={followType}
              sessionId={sessionId}
              followingUsers={followingUsers}
              followUser={followUser}
              unfollowUser={unfollowUser}
            />
          </div>
        ) : (
          <Dimmer active>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        )}
      </div>
    </>
  );
};

export default ProfileComponent;
