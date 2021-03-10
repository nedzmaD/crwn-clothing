import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOwXSRtSdyyXLsi4q4dj3A48AEICzs3To",
    authDomain: "crwn-db-32d24.firebaseapp.com",
    projectId: "crwn-db-32d24",
    storageBucket: "crwn-db-32d24.appspot.com",
    messagingSenderId: "1003381240266",
    appId: "1:1003381240266:web:05a194f22791d19322df33",
    measurementId: "G-L3J5SELF1B"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt': 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;