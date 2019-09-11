export const GET_PROFILE = "GET_PROFILE";
export const SET_PROFILE = "SET_PROFILE";
export const TRIGGER_EDIT_MODE = "TRIGGER_EDIT_MODE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL";
export const UPDATE_FAILED = "UPDATE_FAILED";

export const getProfile = (sessionId, userId = undefined) => ({
  type: GET_PROFILE,
  payload: {
    sessionId,
    userId
  }
});

export const setProfile = profile => ({
  type: SET_PROFILE,
  payload: {
    profile
  }
});

export const updateProfile = (sessionId, newProfile) => ({
  type: UPDATE_PROFILE,
  payload: {
    sessionId,
    newProfile
  }
});

export const updateSuccessful = updatedUser => ({
  type: UPDATE_SUCCESSFUL,
  payload: {
    updatedUser
  }
});

export const updateFailed = () => ({
  type: UPDATE_FAILED
});

export const triggerEditMode = profile => ({
  type: TRIGGER_EDIT_MODE
});

export const usernameInputChanged = newValue => ({
  type: "USERNAME_INPUT_CHANGED",
  payload: {
    newValue
  }
});

export const passwordInputChanged = newValue => ({
  type: "PASSWORD_INPUT_CHANGED",
  payload: {
    newValue
  }
});

export const firstNameInputChanged = newValue => ({
  type: "FIRST_NAME_INPUT_CHANGED",
  payload: {
    newValue
  }
});

export const lastNameInputChanged = newValue => ({
  type: "LAST_NAME_INPUT_CHANGED",
  payload: {
    newValue
  }
});
