import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA8CR4wAjlcG4QBqomQ6M9njay4r8FeTiE",
    authDomain: "netflix-clone-96c14.firebaseapp.com",
    projectId: "netflix-clone-96c14",
    storageBucket: "netflix-clone-96c14.appspot.com",
    messagingSenderId: "208358949050",
    appId: "1:208358949050:web:1d60589c21dba2c60e8283"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider} ;