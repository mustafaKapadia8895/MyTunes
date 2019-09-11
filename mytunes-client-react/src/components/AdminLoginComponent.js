import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Header, Message } from "semantic-ui-react";

const LoginComponent = ({
  usernameValue,
  passwordValue,
  loginInitiated,
  sessionId,
  usernameInputChanged,
  passwordInputChanged,
  errorMessage
}) => {
  if (sessionId) {
    return (
      <Redirect
        to={{
          pathname: "/adminConsole"
        }}
      />
    );
  }

  return (
    <div className="container-fluid d-flex flex-column justify-content-center text-white align-items-center">
      <div className="row col-lg-6 col-11 border-bottom pb-5 justify-content-center">
        <Link to="/">
          <Header as="h1" className="text-white mt-5 ">
            MyTunes Admin Login
          </Header>
        </Link>
      </div>
      <div className="row col-lg-6 col-11 my-5 border-bottom align-items-center">
        <div className="col-lg-5 col-11 mx-auto align-items-center mb-5">
          <Form
            inverted
            onSubmit={event =>
              loginInitiated(
                event.target.username.value,
                event.target.password.value,
                true
              )
            }
          >
            <Form.Input
              size="large"
              fluid
              placeholder="Username"
              className="bg-secondary"
              type="text"
              id="username"
              value={usernameValue}
              onChange={event => usernameInputChanged(event.target.value)}
            />
            <Form.Input
              size="large"
              fluid
              placeholder="Password"
              className="bg-secondary"
              type="password"
              id="password"
              value={passwordValue}
              onChange={event => passwordInputChanged(event.target.value)}
            />
            <Button color="blue" type="submit" circular fluid>
              Log In
            </Button>
            {errorMessage && (
              <Message negative>
                {" "}
                <Message.Header>{errorMessage}</Message.Header>
              </Message>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
