// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//from firebase auth
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrRTdEI8mY5ci0M8nbxzWZMgaCvMh3Cdg",
  authDomain: "coffee-stor-9871c.firebaseapp.com",
  projectId: "coffee-stor-9871c",
  storageBucket: "coffee-stor-9871c.firebasestorage.app",
  messagingSenderId: "845145400188",
  appId: "1:845145400188:web:0b53b0eaefd1936390baf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);