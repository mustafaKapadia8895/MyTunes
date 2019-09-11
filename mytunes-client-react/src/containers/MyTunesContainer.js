import React from "react";
import { connect, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { logOutInitiated, sessionIdChanged } from "../actions/MyTunesActions";
import MyTunesComponent from "../components/MyTunesComponent";
import { persistor, store } from "../configureStore";
const MyTunesContainer = () => {
  const stateToPropertyMapper = ({ myTunesReducer }) => ({
    sessionId: myTunesReducer.sessionId
  });

  const dispatcherToPropertyMapper = {
    sessionIdChanged,
    logOutInitiated
  };

  const MyTunesContainerRedux = connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
  )(MyTunesComponent);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyTunesContainerRedux />
      </PersistGate>
    </Provider>
  );
};

export default MyTunesContainer;
