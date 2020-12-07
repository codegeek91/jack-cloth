import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD5gbG5smo138nG46AOQ2OG3wQPMGBNGOI',
  authDomain: 'jack-cloth-db.firebaseapp.com',
  projectId: 'jack-cloth-db',
  storageBucket: 'jack-cloth-db.appspot.com',
  messagingSenderId: '693803862215',
  appId: '1:693803862215:web:5c44239212091d62d056e2',
  measurementId: 'G-E9HT39P07M',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
