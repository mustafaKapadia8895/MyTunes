export const sessionIdChanged = newValue => ({
  type: "SESSION_ID_CHANGED",
  payload: {
    newValue
  }
});
export const logOutInitiated = () => ({
  type: "LOG_OUT_INITIATED",
  payload: {}
});
