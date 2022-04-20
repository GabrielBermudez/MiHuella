// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqbyxEQyzLc-O8_qr3fTvF7LKTpAq6ec8",
  authDomain: "mihuella-21543.firebaseapp.com",
  projectId: "mihuella-21543",
  storageBucket: "mihuella-21543.appspot.com",
  messagingSenderId: "866319094043",
  appId: "1:866319094043:web:2424f789ad09b2a51483be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;