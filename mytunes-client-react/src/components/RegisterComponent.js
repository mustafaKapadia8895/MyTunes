import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Header } from "semantic-ui-react";
import RegisterForm from "./RegisterForm";

const RegisterComponent = ({
  sessionId,
  usernameValue,
  passwordValue,
  firstNameValue,
  lastNameValue,
  registerInitiated,
  errorMessage,
  usernameInputChanged,
  passwordInputChanged,
  firstNameInputChanged,
  lastNameInputChanged
}) => {
  if (sessionId) {
    return (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    );
  }

  // const [birthDate, setBirthDate] = useState("12/08/90");
  // const [gender, setGender] = useState();
  return (
    <div className="container-fluid d-flex flex-column justify-content-center text-white align-items-center">
      <div className="row col-lg-6 col-11 border-bottom pb-5  justify-content-center">
        <Link to="/">
          <Header as="h1" className="text-white mt-5">
            MyTunes
          </Header>
        </Link>
      </div>
      <div className="row col-lg-6 col-11 my-5 align-items-center">
        <div className="col-lg-6 col-11 mx-auto align-items-center mb-5">
          <RegisterForm
            usernameValue={usernameValue}
            passwordValue={passwordValue}
            firstNameValue={firstNameValue}
            lastNameValue={lastNameValue}
            onSubmit={registerInitiated}
            errorMessage={errorMessage}
            usernameInputChanged={usernameInputChanged}
            passwordInputChanged={passwordInputChanged}
            firstNameInputChanged={firstNameInputChanged}
            lastNameInputChanged={lastNameInputChanged}
            buttonText="Sign up"
          />

          <Form>
            <Form.Field className="mt-3">
              Already have an account? &nbsp;
              <Link to="Login" className="text-success">
                Log In
              </Link>
            </Form.Field>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
