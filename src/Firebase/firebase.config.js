import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA3x0mkUqDUWcTc2-6VRf0s3j18sregOu0',
  authDomain: 'pandemic-a8ec4.firebaseapp.com',
  projectId: 'pandemic-a8ec4',
  storageBucket: 'pandemic-a8ec4.appspot.com',
  messagingSenderId: '252658681237',
  appId: '1:252658681237:web:4247402c9257978ddca29c'
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
googleProvider.setCustomParameters({prompt: 'select_account'})
