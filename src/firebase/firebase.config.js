// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNwSBPGFAPQV4qekKUvRfOZZ0Qgio5Nd8",
  authDomain: "dragon-news-bootstrap.firebaseapp.com",
  projectId: "dragon-news-bootstrap",
  storageBucket: "dragon-news-bootstrap.appspot.com",
  messagingSenderId: "379301384157",
  appId: "1:379301384157:web:bc0d5d2ecd0c9d08037034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;