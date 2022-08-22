// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDEP1_aDbsfeo86lMkdcNDdHYhzBJdH_0",
  authDomain: "chat-app-zavrsni.firebaseapp.com",
  projectId: "chat-app-zavrsni",
  storageBucket: "chat-app-zavrsni.appspot.com",
  messagingSenderId: "12668284872",
  appId: "1:12668284872:web:483da77036eb854f935afd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)