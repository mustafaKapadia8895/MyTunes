import React from "react";
import { connect } from "react-redux";
import {
  loginFailed,
  loginInitiated,
  loginSuccessful,
  passwordInputChanged,
  usernameInputChanged
} from "../actions/LoginActions";
import { sessionIdChanged } from "../actions/MyTunesActions";
import LoginComponent from "../components/LoginComponent";

const LoginContainer = () => {
  const stateToPropertyMapper = state => ({
    usernameValue: state.loginReducer.usernameValue,
    passwordValue: state.loginReducer.passwordValue,
    errorMessage: state.loginReducer.errorMessage,
    sessionId: state.myTunesReducer.sessionId
  });

  const dispatcherToPropertyMapper = {
    loginFailed,
    loginInitiated,
    loginSuccessful,
    usernameInputChanged,
    passwordInputChanged,
    sessionIdChanged
  };

  const LoginContainerRedux = connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
  )(LoginComponent);

  return <LoginContainerRedux />;
};

export default LoginContainer;
