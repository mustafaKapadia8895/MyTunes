export const FOLLOW_USER = "FOLLOW_USER";
export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
export const GET_FOLLOWER_USERS = "GET_FOLLOWER_USERS";
export const GET_FOLLOWER_USERS_SUCCESS = "GET_FOLLOWER_USERS_SUCCESS";
export const GET_FOLLOWING_USERS = "GET_FOLLOWING_USERS";
export const GET_FOLLOWING_USERS_SUCCESS = "GET_FOLLOWING_USERS_SUCCESS";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const followUser = (sessionId, user) => ({
  type: FOLLOW_USER,
  payload: {
    sessionId,
    user
  }
});

export const unfollowUser = (sessionId, user) => ({
  type: UNFOLLOW_USER,
  payload: {
    sessionId,
    user
  }
});

export const getFollowingUsers = (sessionId, userId = undefined) => ({
  type: GET_FOLLOWING_USERS,
  payload: {
    sessionId,
    userId
  }
});

export const getFollowerUsers = (sessionId, userId = undefined) => ({
  type: GET_FOLLOWER_USERS,
  payload: {
    sessionId,
    userId
  }
});

export const followUserSuccess = () => ({
  type: FOLLOW_USER_SUCCESS
});

export const getFollowingUsersSuccess = users => ({
  type: GET_FOLLOWING_USERS_SUCCESS,
  payload: {
    followingUsers: users
  }
});
export const getFollowerUsersSuccess = users => ({
  type: GET_FOLLOWER_USERS_SUCCESS,
  payload: {
    followerUsers: users
  }
});
