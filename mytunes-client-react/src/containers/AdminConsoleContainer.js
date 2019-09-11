import React from "react";
import { connect } from "react-redux";
import {
  deleteUser,
  getAllUsers,
  getAllUsersSuccess
} from "../actions/AdminActions";
import AdminConsoleComponent from "../components/AdminConsoleComponent";

const AdminConsoleContainer = () => {
  const stateToPropertyMapper = state => ({
    sessionId: state.myTunesReducer.sessionId,
    users: state.adminReducer.users,
    errorMessage: state.adminReducer.errorMessage
  });

  const dispatcherToPropertyMapper = {
    getAllUsers,
    getAllUsersSuccess,
    deleteUser
  };

  const AdminConsoleContainerRedux = connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
  )(AdminConsoleComponent);

  return <AdminConsoleContainerRedux />;
};

export default AdminConsoleContainer;
