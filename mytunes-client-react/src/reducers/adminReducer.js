import {
  DELETE_USER,
  GET_ALL_USERS_FAILED,
  GET_ALL_USERS_SUCCESS
} from "../actions/AdminActions";

const initialState = {
  users: [],
  errorMessage: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: payload.users
      };

    case DELETE_USER:
      console.log(payload.userId);
      return {
        ...state,
        users: state.users.filter(user => user.id !== payload.userId)
      };

    case GET_ALL_USERS_FAILED:
      return {
        ...state,
        errorMessage: "This page is only accessible to admins"
      };

    default:
      return state;
  }
};
