import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBd-BVpbU1xXGcoTrDNhK-BT53lxlwTnsg",
  authDomain: "clone-2a6f2.firebaseapp.com",
  databaseURL: "https://clone-2a6f2.firebaseio.com",
  projectId: "clone-2a6f2",
  storageBucket: "clone-2a6f2.appspot.com",
  messagingSenderId: "1064172093253",
  appId: "1:1064172093253:web:bbf07a8927a0f27225c82c",
  measurementId: "G-BTDW1KKRFK",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
