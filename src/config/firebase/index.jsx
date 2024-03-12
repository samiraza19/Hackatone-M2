// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6jAG7crJiOf8sW4cOl42sHl6ap0G0MUk",
  authDomain: "hackatone-c5dd9.firebaseapp.com",
  databaseURL: "https://hackatone-c5dd9-default-rtdb.firebaseio.com",
  projectId: "hackatone-c5dd9",
  storageBucket: "hackatone-c5dd9.appspot.com",
  messagingSenderId: "494361031701",
  appId: "1:494361031701:web:89afdd871388e4dd6e0a1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
