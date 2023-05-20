// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
// import * as serviceWorker from './serviceWorker';

// import App from './components/App';
// import Firebase from './components/Firebase';

// import FirebaseContext from './components/Firebase/context';



// ReactDOM.render(
//   <FirebaseContext.Provider value = { new Firebase() }>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById('root'),
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase from './components/Firebase';

import FirebaseContext from './components/Firebase/context';

createRoot(document.getElementById('root')).render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
);

serviceWorker.unregister();
