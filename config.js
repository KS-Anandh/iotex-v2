// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCmrUGrfHGZB3eNVBxFsphTyLDNEjvZtw8",
  authDomain: "mychoice-5eae5.firebaseapp.com",
  projectId: "mychoice-5eae5",
  storageBucket: "mychoice-5eae5.appspot.com",
  messagingSenderId: "816960927886",
  appId: "1:816960927886:web:6b36d26d51546fbdcab1df",
  measurementId: "G-JSQXDJJCJ5"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider();

export {auth,provider};