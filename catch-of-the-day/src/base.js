import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEFIKNWNPWXSXyzYOwTkNeZYEmfxQr6KA",
  authDomain: "catch-of-the-day-annied.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-annied-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-annied",
  storageBucket: "catch-of-the-day-annied.appspot.com",
  messagingSenderId: "1082032856733",
  appId: "1:1082032856733:web:65377a8b28c534e1fffe74",
  measurementId: "G-N1B51G8WKH"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

//this is a default export
export default base;
