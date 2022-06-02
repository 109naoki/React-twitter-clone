// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWkrK098HbaVVZZMBO5R0aKOvlz436AO0",
  authDomain: "twitter-clone-3d1ce.firebaseapp.com",
  projectId: "twitter-clone-3d1ce",
  storageBucket: "twitter-clone-3d1ce.appspot.com",
  messagingSenderId: "388730531655",
  appId: "1:388730531655:web:35ca6a3caf3f2f02eaa662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
