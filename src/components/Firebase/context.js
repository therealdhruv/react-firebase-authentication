import React from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase = {firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;


// This is the Firebase Context API. It provides a Firebase instance to your entire application via the React context API.