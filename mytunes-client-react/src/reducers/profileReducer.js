import {
  SET_PROFILE,
  TRIGGER_EDIT_MODE,
  UPDATE_FAILED,
  UPDATE_SUCCESSFUL
} from "../actions/ProfileActions";

const initialState = {
  profile: null,
  editMode: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: payload.profile,
        usernameValue: payload.profile.username,
        passwordValue: payload.profile.password,
        firstNameValue: payload.profile.firstName,
        lastNameValue: payload.profile.lastName
      };

    case TRIGGER_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode
      };

    case UPDATE_SUCCESSFUL:
      return {
        ...state,
        profile: payload.updatedUser,
        editMode: false
      };

    case UPDATE_FAILED:
      return {
        ...state,
        errorMessage: "Update Failed"
      };

    case "USERNAME_INPUT_CHANGED":
      return {
        ...state,
        usernameValue: payload.newValue,
        errorMessage: ""
      };

    case "PASSWORD_INPUT_CHANGED":
      return {
        ...state,
        passwordValue: payload.newValue
      };

    case "FIRST_NAME_INPUT_CHANGED":
      return {
        ...state,
        firstNameValue: payload.newValue
      };

    case "LAST_NAME_INPUT_CHANGED":
      return {
        ...state,
        lastNameValue: payload.newValue
      };

    default:
      return state;
  }
};
