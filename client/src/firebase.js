// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBmSVQusJgzjJpPm_foXUgFLi9xNC8bEuc",
  authDomain: "coversalink.firebaseapp.com",
  projectId: "coversalink",
  storageBucket: "coversalink.appspot.com",
  messagingSenderId: "780461091539",
  appId: "1:780461091539:web:7bf96fb87841da63448226",
  measurementId: "G-JWP3RBNCYS"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
 export const storage = getStorage();
 export const db = getFirestore();