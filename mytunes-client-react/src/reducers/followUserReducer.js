import {
  FOLLOW_USER,
  GET_FOLLOWER_USERS_SUCCESS,
  GET_FOLLOWING_USERS_SUCCESS,
  UNFOLLOW_USER
} from "../actions/FollowActions";

const initialState = {
  followingUsers: [],
  followerUsers: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FOLLOW_USER:
      return {
        ...state,
        followingUsers: [...state.followingUsers, payload.user]
      };

    case UNFOLLOW_USER:
      console.log("unfollowing user");
      return {
        ...state,
        followingUsers: state.followingUsers.filter(
          user => user.id !== payload.user.id
        )
      };

    case GET_FOLLOWING_USERS_SUCCESS:
      return {
        ...state,
        followingUsers: payload.followingUsers
      };

    case GET_FOLLOWER_USERS_SUCCESS:
      return {
        ...state,
        followerUsers: payload.followerUsers
      };

    default:
      return state;
  }
};
