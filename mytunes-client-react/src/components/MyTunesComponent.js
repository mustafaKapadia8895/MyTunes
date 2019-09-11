import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminConsoleContainer from "../containers/AdminConsoleContainer";
import AdminLoginContainer from "../containers/AdminLoginContainer";
import HomePageContainer from "../containers/HomePageContainer";
import LoginContainer from "../containers/LoginContainer";
import ProfileContainer from "../containers/ProfileContainer";
import RegisterContainer from "../containers/RegisterContainer";
import SearchPageContainer from "../containers/SearchPageContainer";
import "../styles/MyTunesStyle.scss";
import SidebarComponent from "./SidebarComponent";

const MyTunesComponent = ({ sessionId, logOutInitiated }) => {
  return (
    <Router>
      <div className="wbdv-background">
        <Route
          exact
          path="/"
          render={() => (
            <>
              <SidebarComponent
                sessionId={sessionId}
                logOutInitiated={logOutInitiated}
              />
              <div className="wbdv-content">
                <HomePageContainer />
              </div>
            </>
          )}
        />
        <Route
          exact
          path="/search"
          render={({ match }) => (
            <>
              <SidebarComponent
                sessionId={sessionId}
                logOutInitiated={logOutInitiated}
              />
              <div className="wbdv-content">
                <SearchPageContainer match={match} />
              </div>
            </>
          )}
        />
        <Switch>
          <Route path="/profile/:pid" component={ProfileContainer} />
          <Route path="/profile" component={ProfileContainer} />
        </Switch>

        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/adminLogin" component={AdminLoginContainer} />
        <Route path="/adminConsole" component={AdminConsoleContainer} />
      </div>
    </Router>
  );
};

export default MyTunesComponent;
