import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Inside config copied from firebase while creating a project
const config = {
    apiKey: "AIzaSyCOwXSRtSdyyXLsi4q4dj3A48AEICzs3To",
    authDomain: "crwn-db-32d24.firebaseapp.com",
    projectId: "crwn-db-32d24",
    storageBucket: "crwn-db-32d24.appspot.com",
    messagingSenderId: "1003381240266",
    appId: "1:1003381240266:web:05a194f22791d19322df33",
    measurementId: "G-L3J5SELF1B"
  };

//Store user's data into db
export const createUserProfileDocument = async (userAuth, additionalData)=> {
  //If user is not signed do nothing
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //If snapshot doesn't exist create a user
  if (!snapShot.exists){
    //Display name and email of user obj
    const {displayName, email} = userAuth;
    //Current date of current time this is invoked
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    }
    catch(error) {
      console.log('error creating user', error.message);

    }
  }
  return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt': 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  