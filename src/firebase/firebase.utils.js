import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBaOpzZOuLB3MiEeQRmEAHv-sS0BrZ5f7c",
    authDomain: "crwn-db-93a72.firebaseapp.com",
    databaseURL: "https://crwn-db-93a72.firebaseio.com",
    projectId: "crwn-db-93a72",
    storageBucket: "crwn-db-93a72.appspot.com",
    messagingSenderId: "336237869680",
    appId: "1:336237869680:web:5d47a6e83ec63229a812b5",
    measurementId: "G-C0WSD74QD6"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const fiestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;