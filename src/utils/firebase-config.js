// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUrZH7z5fNWMwfdEU1B0cBmp_i4dgfhzM",
  authDomain: "react-netflix-2147c.firebaseapp.com",
  projectId: "react-netflix-2147c",
  storageBucket: "react-netflix-2147c.appspot.com",
  messagingSenderId: "354451967617",
  appId: "1:354451967617:web:d2abe4e995a347b9c44780",
  measurementId: "G-4QR59P9VW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);