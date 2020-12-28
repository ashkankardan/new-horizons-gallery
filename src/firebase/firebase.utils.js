import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB1mlVq5JcypvLtQLTDnQXW-_-lcT-pKaw",
  authDomain: "nhg-db.firebaseapp.com",
  projectId: "nhg-db",
  storageBucket: "nhg-db.appspot.com",
  messagingSenderId: "63741427715",
  appId: "1:63741427715:web:06df6e7e88b10a536c4e36",
  measurementId: "G-C272YZ2TTB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
