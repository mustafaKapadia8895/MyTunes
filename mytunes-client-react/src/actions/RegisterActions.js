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

export const registerInitiated = (username, password, firstName, lastName) => ({
  type: "REGISTER_INITIATED",
  payload: {
    username,
    password,
    firstName,
    lastName
  }
});

export const registerSuccessful = sessionId => ({
  type: "REGISTER_SUCCESSFUL",
  payload: {
    sessionId
  }
});

export const registerFailed = () => ({
  type: "REGISTER_FAILED"
});
