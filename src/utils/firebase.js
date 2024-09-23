// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXo2w_WIDW3r1PFTnwIhjsAocpkIhccXo",
  authDomain: "smartnetflix-82e1b.firebaseapp.com",
  projectId: "smartnetflix-82e1b",
  storageBucket: "smartnetflix-82e1b.appspot.com",
  messagingSenderId: "366011929101",
  appId: "1:366011929101:web:8b2f38bd22350e02a1fb44",
  measurementId: "G-V1E7WX2Q5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();