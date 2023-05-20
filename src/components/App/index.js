// The App component is the perfect place to render the Navigation component because it always renders the Navigation component but replaces other components (pages) based on the routes. Basically, the App component is the container into which all our fixed components (e.g. navigation bar, sidebar, footer), as well as the components that are displayed depending on the route in the URL (e.g. account page, login page, password forget page), will go.


// As the component handles the local state now, we have to refactor it to a class component, which basically manages the local state of an authUser object and then passes it to the Navigation component. The Navigation component then passes it to all the other components that need it. This is called prop drilling. We will refactor this later on with React's Context API.



import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { withFirebase } from '../Firebase';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';


class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }

  // Firebase offers a listener function in order to get the authenticated user from Firebase.
  componentDidMount() {
    this.listner = this.props.firebase.auth.onAuthStateChanged (
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      }
    );
  }

  componentWillUnmount() {
    this.listner();
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <hr />
          <Routes>
            <Route exact path = {ROUTES.LANDING} component = {LandingPage} />
            <Route path = {ROUTES.SIGN_UP} component = {SignUpPage} />
            <Route path = {ROUTES.SIGN_IN} component = {SignInPage} />
            <Route path = {ROUTES.PASSWORD_FORGET} component = {PasswordForgetPage} />
            <Route path = {ROUTES.HOME} component = {HomePage} />
            <Route path = {ROUTES.ACCOUNT} component = {AccountPage} />
            <Route path = {ROUTES.ADMIN} component = {AdminPage} />
          </Routes>
        </div>
      </Router>
    );
  }

}

export default withFirebase(App);