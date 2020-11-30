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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    //console.log("userAuth before create = ", userAuth)  
    if(!userAuth) return;  // exit if userAuth = null, doesn't exist

    //const userRef = firestore.doc('users/qBy8AQzIBAdfgq1Sqa3f');
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log('createUserProfileDocument snapShot = ', snapShot);
    //console.log(firestore.doc('users/12312312'))

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })    
        } catch (error) {
            console.log('error creating user: ', error.message)
        }
    }
    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;