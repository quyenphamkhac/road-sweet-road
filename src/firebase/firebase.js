import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

firebase.initializeApp({
    apiKey: "AIzaSyBO0EyD-RV-0yQ7nRaqXZ9IRd7MMrbBa-w",
    authDomain: "sweet-road-6aede.firebaseapp.com",
    databaseURL: "https://sweet-road-6aede.firebaseio.com",
    projectId: "sweet-road-6aede",
    storageBucket: "sweet-road-6aede.appspot.com",
    messagingSenderId: "1070796234332"
});

const databaseRef = firebase.database().ref();

//export db
export const driverRef = databaseRef.child("drivers")
export const userRef = databaseRef.child("users");
