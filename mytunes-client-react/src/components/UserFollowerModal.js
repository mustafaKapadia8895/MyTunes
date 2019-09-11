import React from "react";
import { Link } from "react-router-dom";
import { Icon, List, Modal } from "semantic-ui-react";

const UserFollowerModal = ({
  users,
  modalState,
  toggleModal,
  followType,
  sessionId,
  followingUsers,
  followUser,
  unfollowUser
}) => {
  const followTitle = followType === "follower" ? "Follower" : "Following";
  return (
    <Modal
      size="large"
      open={modalState}
      onClose={toggleModal}
      className="wbdv-modal"
      basic
    >
      <Modal.Header> {followTitle} Users</Modal.Header>
      <Modal.Content>
        <List size="large" verticalAlign="middle" inverted animated selection>
          {users.map((user, index) => (
            <List.Item
              key={user.id}
              className=" d-flex justify-content-between"
            >
              <div className="container-fluid no-gutters">
                <Link
                  to={`/profile/${user.id}`}
                  style={{ textDecoration: "none" }}
                  className="col row"
                >
                  <div className="my-auto">
                    <Icon name="user" className="" />
                  </div>
                  <div className="col">
                    <List.Content>
                      <List.Header>{user.username || "Vishesh"}</List.Header>
                      <List.Description>
                        {user.firstName}&nbsp;{user.lastName}
                      </List.Description>
                    </List.Content>
                  </div>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-xl-2">
                <List.Content>
                  {sessionId && (
                    <Icon
                      name={
                        followingUsers &&
                        followingUsers.some(
                          followedUser => followedUser.id === user.id
                        )
                          ? "hand point up"
                          : "hand point up outline"
                      }
                      onClick={event => {
                        if (
                          followingUsers &&
                          !followingUsers.some(
                            followedUser => followedUser.id === user.id
                          )
                        )
                          followUser(sessionId, user);
                        else unfollowUser(sessionId, user);
                      }}
                      className="ml-5"
                    />
                  )}
                </List.Content>
              </div>
            </List.Item>
          ))}
        </List>
      </Modal.Content>
    </Modal>
  );
};

export default UserFollowerModal;
