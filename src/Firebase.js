// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseApp =firebase.initializeApp ({
    apiKey: "AIzaSyDRGHbCilyMhq7NmGABtMbmY8Cl9IAw8Vs",
    authDomain: "clone-b7f97.firebaseapp.com",
    projectId: "clone-b7f97",
    storageBucket: "clone-b7f97.appspot.com",
    messagingSenderId: "227098006064",
    appId: "1:227098006064:web:cd1a057eb3a9123bd813f5",
    measurementId: "G-DZ1PZVT9DF"
  });

  const db = firebase.firestore();
  export {db}
