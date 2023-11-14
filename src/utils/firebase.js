// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHoMljRQmxEwaLOjpkyn13519mjGycqng",
  authDomain: "netflixgpt-b4c56.firebaseapp.com",
  projectId: "netflixgpt-b4c56",
  storageBucket: "netflixgpt-b4c56.appspot.com",
  messagingSenderId: "1045049778227",
  appId: "1:1045049778227:web:0c5844a8ca098c68a20346",
  measurementId: "G-JC4NFPQ7J0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
