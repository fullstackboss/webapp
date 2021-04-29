import firebase from 'firebase/app';
import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAs5filD2a4WkpGCWo19rZ8CT9_xQ63F7Q",
    authDomain: "websvelte-c089f.firebaseapp.com",
    projectId: "websvelte-c089f",
    storageBucket: "websvelte-c089f.appspot.com",
    messagingSenderId: "110126943481",
    appId: "1:110126943481:web:19a56a2595ccc17bec6628"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const db=firebase.firestore();