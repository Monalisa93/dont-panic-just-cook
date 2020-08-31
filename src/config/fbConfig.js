import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyAbeBVuQ0A7f5J2L3lextY82Weqn_SQlzs",
    authDomain: "dont-panic-just-cook.firebaseapp.com",
    databaseURL: "https://dont-panic-just-cook.firebaseio.com",
    projectId: "dont-panic-just-cook",
    storageBucket: "dont-panic-just-cook.appspot.com",
    messagingSenderId: "63200778137",
    appId: "1:63200778137:web:08b860b2e4138c1f626508",
    measurementId: "G-31QBSH6B0K"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;