// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtBR0aUQ4m-B0-Zo5kI1rW7Vn8zOtfU4A",
    authDomain: "twitter-clone-app-80.firebaseapp.com",
    projectId: "twitter-clone-app-80",
    storageBucket: "twitter-clone-app-80.appspot.com",
    messagingSenderId: "514011465822",
    appId: "1:514011465822:web:6b2419f6b491f723170ccf",
    measurementId: "G-VMSKC2BMET"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;