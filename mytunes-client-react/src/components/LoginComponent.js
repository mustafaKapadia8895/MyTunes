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
    console.log(sessionId);
    return (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    );
  }

  return (
    <div className="container-fluid d-flex flex-column justify-content-center text-white align-items-center">
      <div className="row col-lg-6 col-11 border-bottom pb-5 justify-content-center">
        <Link to="/">
          <Header as="h1" className="text-white mt-5 ">
            MyTunes
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
                event.target.password.value
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
            <Form.Checkbox label="Remember me" />
            <Button color="blue" type="submit" circular fluid>
              Log In
            </Button>
            {errorMessage && (
              <Message negative>
                {" "}
                <Message.Header>{errorMessage}</Message.Header>
              </Message>
            )}
            {/* TODO password form */}
            <Form.Field className="mt-3">Forgot your password?</Form.Field>
          </Form>
        </div>
      </div>
      <div>
        <Header as="h2" className="text-white">
          Dont have an account?
        </Header>
        <Link to="register">
          <Button color="green" size={"huge"} circular fluid>
            Sign up for MyTunes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginComponent;
