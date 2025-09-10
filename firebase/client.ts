// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCrkAxLsk5wRD5HKcL8tddzCygPpVdlyHw",
  authDomain: "prepwise-7a750.firebaseapp.com",
  projectId: "prepwise-7a750",
  storageBucket: "prepwise-7a750.firebasestorage.app",
  messagingSenderId: "737480765164",
  appId: "1:737480765164:web:e51a3dd03934981257ffc9",
  measurementId: "G-R07WWB5JS0"
};

// Initialize Firebase
const app = !getApps.length?  initializeApp(firebaseConfig):getApp();
export const auth =getAuth(app);
export const db= getFirestore(app);