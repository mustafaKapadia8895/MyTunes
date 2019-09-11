const initialState = {
  usernameValue: "",
  passwordValue: "",
  errorMessage: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USERNAME_INPUT_CHANGED":
      return {
        ...state,
        usernameValue: payload.newValue,
        errorMessage: ""
      };

    case "PASSWORD_INPUT_CHANGED":
      return {
        ...state,
        passwordValue: payload.newValue,
        errorMessage: ""
      };

    case "LOGIN_SUCCESSFUL":
      return {
        ...state,
        errorMessage: ""
      };

    case "LOGIN_FAILED":
      return {
        ...state,
        errorMessage: "Login credentials are invalid"
      };

    default:
      return state;
  }
};
