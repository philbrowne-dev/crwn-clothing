import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAg4Fp6adYbZVu-IiKpP7rthhDEy2GuFk4",
    authDomain: "crwn-db-ecae6.firebaseapp.com",
    databaseURL: "https://crwn-db-ecae6.firebaseio.com",
    projectId: "crwn-db-ecae6",
    storageBucket: "crwn-db-ecae6.appspot.com",
    messagingSenderId: "150002149504",
    appId: "1:150002149504:web:3ebd98c554fd6f67d41e65",
    measurementId: "G-XBM5WVH0WL"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  
