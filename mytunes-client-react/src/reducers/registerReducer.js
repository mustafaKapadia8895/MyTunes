const initialState = {
  usernameValue: "",
  passwordValue: "",
  firstNameValue: "",
  lastNameValue: "",
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
      var errorMessage;
      if (state.passwordValue.length < 6)
        errorMessage = "Password length must be atleast 6 characters";
      else errorMessage = "";
      return {
        ...state,
        passwordValue: payload.newValue,
        errorMessage: errorMessage
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

    case "REGISTER_SUCCESSFUL":
      localStorage.setItem("sessionId", payload.sessionId);
      return {
        ...state,
        sessionId: payload.sessionId,
        errorMessage: ""
      };

    case "REGISTER_FAILED":
      return {
        ...state,
        errorMessage: "Username already exists"
      };

    default:
      return state;
  }
};
