import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Image, Menu, Sidebar } from "semantic-ui-react";

const SidebarComponent = ({ sessionId, logOutInitiated }) => {
  return (
    <Sidebar
      as={Menu}
      icon="labeled"
      inverted
      vertical
      visible
      className="justify-content-between"
    >
      <div className="justify-content-between d-flex flex-column h-100">
        <div>
          <Menu.Item as={Link} to="/" className="mt-2 mb-3">
            <Image
              inline
              className=""
              circular
              size="mini"
              src="https://cdn.imgbin.com/5/13/15/imgbin-computer-icons-spotify-icon-design-music-others-jp7LZ6xwH6SnpyENh98DNWWz3.jpg"
            />
            <div className="d-none d-md-block">
              <h3>
                <b>MyTunes</b>
              </h3>
            </div>
          </Menu.Item>
          <Menu.Item as={Link} to="/">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/search">
            <Icon name="search" />
            Search
          </Menu.Item>
        </div>
        <div className="mb-5">
          {sessionId && (
            <Menu.Item as={Link} className="mb-2" to="/profile">
              <Icon name="user circle" />
              Profile
            </Menu.Item>
          )}
          {sessionId && (
            <div className="justify-content-center pb-2">
              <Link to="/">
                <Button className="w-75 rounded-pill" onClick={logOutInitiated}>
                  LOG OUT
                </Button>
              </Link>
            </div>
          )}

          {!sessionId && (
            <div className="justify-content-center pb-2">
              <Link to="register">
                <Button className="w-75 rounded-pill">SIGN UP</Button>
              </Link>
            </div>
          )}
          {!sessionId && (
            <div className="justify-content-center">
              <Link to="login">
                <Button className="w-75 text-white bg-transparent border border-white rounded-pill ">
                  LOG IN
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Sidebar>
  );
};

export default SidebarComponent;
