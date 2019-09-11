import React from "react";
import { Button, Form, Message } from "semantic-ui-react";

const RegisterForm = ({
  usernameValue,
  passwordValue,
  firstNameValue,
  lastNameValue,
  onSubmit,
  errorMessage,
  usernameInputChanged,
  passwordInputChanged,
  firstNameInputChanged,
  lastNameInputChanged,
  buttonText,
  disableUsername = false
}) => {
  return (
    <Form
      inverted
      onSubmit={event =>
        onSubmit(
          event.target.username.value,
          event.target.password.value,
          event.target.firstName.value,
          event.target.lastName.value
        )
      }
    >
      Username:{" "}
      <Form.Input
        disabled={disableUsername}
        size="large"
        fluid
        placeholder="Username"
        value={usernameValue}
        className="bg-secondary"
        id="username"
        onChange={event => usernameInputChanged(event.target.value)}
      />
      Password:{" "}
      <Form.Input
        size="large"
        fluid
        placeholder="Password"
        value={passwordValue}
        className="bg-secondary"
        type="password"
        onChange={event => passwordInputChanged(event.target.value)}
        id="password"
      />
      First Name:{" "}
      <Form.Input
        size="large"
        fluid
        placeholder="First Name"
        value={firstNameValue}
        className="bg-secondary"
        onChange={event => firstNameInputChanged(event.target.value)}
        id="firstName"
      />
      Last Name:{" "}
      <Form.Input
        size="large"
        fluid
        placeholder="Last Name"
        value={lastNameValue}
        className="bg-secondary"
        onChange={event => lastNameInputChanged(event.target.value)}
        id="lastName"
      />
      <Button
        color="green"
        type="submit"
        circular
        fluid
        disabled={errorMessage}
      >
        {buttonText}
      </Button>
      {errorMessage && (
        <Message negative>
          {" "}
          <Message.Header>{errorMessage}</Message.Header>
        </Message>
      )}
    </Form>
  );
};

export default RegisterForm;
