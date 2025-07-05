// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF_OERyt6LZOCJAnzvW5sdpmQcNgzIvGc",
  authDomain: "netflix-gpt-f45f7.firebaseapp.com",
  projectId: "netflix-gpt-f45f7",
  storageBucket: "netflix-gpt-f45f7.firebasestorage.app",
  messagingSenderId: "7548815607",
  appId: "1:7548815607:web:0078a45a2cbb800880abf2",
  measurementId: "G-K4HX71HBPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);