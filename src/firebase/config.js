 import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBY2l1GB5G_o4I58rvxfs4ZHOpCtzpZkVw",
    authDomain: "firegram-72f3c.firebaseapp.com",
    projectId: "firegram-72f3c",
    storageBucket: "firegram-72f3c.appspot.com",
    messagingSenderId: "101815576911",
    appId: "1:101815576911:web:93ebeb44f2a2d8779efd3a"
  };
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
 const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore,timestamp};