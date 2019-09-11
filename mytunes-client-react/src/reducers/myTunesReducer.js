const initialState = { sessionId: "" };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SESSION_ID_CHANGED":
      return {
        ...state,
        sessionId: payload.newValue
      };
    case "LOG_OUT_INITIATED":
      return {
        ...state,
        sessionId: ""
      };
    default:
      return state;
  }
};
