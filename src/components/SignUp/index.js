import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

import { FirebaseContext } from '../Firebase'; // utilizing the firebase context
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1> SignUp </h1>
    <FirebaseContext.Consumer>
      {(firebase) => <SignUpForm firebase = {firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        const navigate = useNavigate();
        navigate(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name = "username"
          value = {username}
          onChange = {this.onChange}
          type = "text"
          placeholder = "Full Name"
        />
        <input
          name = "email"
          value = {email}
          onChange = {this.onChange}
          type = "text"
          placeholder = "Email Address"
        />
        <input
          name = "passwordOne"
          value = {passwordOne}
          onChange = {this.onChange}
          type = "password"
          placeholder = "Password"
        />
        <input
          name = "passwordTwo"
          value = {passwordTwo}
          onChange = {this.onChange}
          type = "password"
          placeholder = "Confirm Password"
        />
        <button type = "submit" disabled = {isInvalid}>
          Sign Up
        </button>

        {error && <p> {error.message} </p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to = {ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(withFirebase)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };