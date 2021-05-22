import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBbLrpv7eMupng8dJd-tQ61xOwSgSeojQw',
  authDomain: 'crwn-db-dde9f.firebaseapp.com',
  projectId: 'crwn-db-dde9f',
  storageBucket: 'crwn-db-dde9f.appspot.com',
  messagingSenderId: '422013177963',
  appId: '1:422013177963:web:8b3eb13bf704dd01d4e12e',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
