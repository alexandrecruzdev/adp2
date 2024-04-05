


// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Certifique-se de que está importando getFirestore
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAbXuQqzctNbR1uqybHg8kwjIL4Gcupcqc",
  authDomain: "adpt2-bd659.firebaseapp.com",
  projectId: "adpt2-bd659",
  storageBucket: "adpt2-bd659.appspot.com",
  messagingSenderId: "456322100766",
  appId: "1:456322100766:web:c54239f95317e71a41480f",
  measurementId: "G-XE2YQ6PHM6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app); // Certifique-se de que está exportando firestore
