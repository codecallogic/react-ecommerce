import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDvtRqObvKdP4a4zXgapgKaaGr_f_aVeZE",
  authDomain: "ecommerce-3c05f.firebaseapp.com",
  projectId: "ecommerce-3c05f",
  storageBucket: "ecommerce-3c05f.appspot.com",
  messagingSenderId: "494860152561",
  appId: "1:494860152561:web:b9080b0542287313e30350"
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// EXPORTS
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()