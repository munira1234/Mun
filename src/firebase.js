import firebase from './firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0_FMD_IKNbzaOTX4XNJ3R8pbQ2PACreQ",
    authDomain: "todo-appp78.firebaseapp.com",
    projectId: "todo-appp78",
    storageBucket: "todo-appp78.appspot.com",
    messagingSenderId: "106346740619",
    appId: "1:106346740619:web:448a598cc826a579320d8e",
    measurementId: "G-F247VKYXGV"
});


const db = firebaseApp.firestore();
export default db;



  