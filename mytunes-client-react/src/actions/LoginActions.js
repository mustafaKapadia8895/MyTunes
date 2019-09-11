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

export const loginInitiated = (username, password, admin = false) => ({
  type: "LOGIN_INITIATED",
  payload: {
    username,
    password,
    admin
  }
});

export const loginSuccessful = sessionId => ({
  type: "LOGIN_SUCCESSFUL",
  payload: {
    sessionId
  }
});

export const loginFailed = () => ({
  type: "LOGIN_FAILED"
});
