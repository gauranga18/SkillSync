// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhTvKe0cunj1j9Tf1FcQ1BiOWCrbYDJ_4",
  authDomain: "skillsync-a6c37.firebaseapp.com",
  projectId: "skillsync-a6c37",
  storageBucket: "skillsync-a6c37.firebasestorage.app",
  messagingSenderId: "993177465013",
  appId: "1:993177465013:web:fa390568ecef3a0e704efc",
  measurementId: "G-49WSRY9B1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {app, auth};