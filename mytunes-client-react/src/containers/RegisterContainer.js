import React from "react";
import { connect } from "react-redux";
import {
  firstNameInputChanged,
  lastNameInputChanged,
  passwordInputChanged,
  registerFailed,
  registerInitiated,
  registerSuccessful,
  usernameInputChanged
} from "../actions/RegisterActions";
import RegisterComponent from "../components/RegisterComponent";

const RegisterContainer = () => {
  const stateToPropertyMapper = state => ({
    usernameValue: state.registerReducer.usernameValue,
    passwordValue: state.registerReducer.passwordValue,
    firstNameValue: state.registerReducer.firstNameValue,
    lastNameValue: state.registerReducer.lastNameValue,
    errorMessage: state.registerReducer.errorMessage,
    sessionId: state.myTunesReducer.sessionId
  });

  const dispatcherToPropertyMapper = {
    registerFailed,
    usernameInputChanged,
    passwordInputChanged,
    firstNameInputChanged,
    lastNameInputChanged,
    registerInitiated,
    registerSuccessful
  };

  const RegisterContainerRedux = connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
  )(RegisterComponent);

  return <RegisterContainerRedux />;
};

export default RegisterContainer;
