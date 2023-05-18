// The authentication interface for our React components that will connect to the Firebase API.


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import app from 'firebase/app';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4pA2XPin4Ru-THweNyNe_eRKl3yDAGoA",
  authDomain: "project-auth-e94fe.firebaseapp.com",
  projectId: "project-auth-e94fe",
  storageBucket: "project-auth-e94fe.appspot.com",
  messagingSenderId: "1028321031897",
  appId: "1:1028321031897:web:874680fada0e851a9130c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


class Firebase {

  constructor() {
    this.auth = auth;
  }

  // *** Auth API ***

    // sign up
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
  
    // sign in
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    // error handling
    doSignOut = () => this.auth.signOut();

    // password reset
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    // password reset/change
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;