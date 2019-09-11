export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const GET_ALL_USERS_FAILED = "GET_ALL_USERS_FAILED";

export const getAllUsers = sessionId => ({
  type: GET_ALL_USERS,
  payload: {
    sessionId
  }
});

export const getAllUsersSuccess = users => ({
  type: GET_ALL_USERS_SUCCESS,
  payload: {
    users
  }
});

export const deleteUser = (sessionId, userId) => ({
  type: DELETE_USER,
  payload: {
    sessionId,
    userId
  }
});

export const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS
});

export const getAllUsersFailed = () => ({
  type: GET_ALL_USERS_FAILED
});
