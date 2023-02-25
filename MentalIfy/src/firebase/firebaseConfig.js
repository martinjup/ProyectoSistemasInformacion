//Configuración para la conexión con Firebase y Firestore

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getStorage } from "firebase/storage";
//import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJAj5SN9_9seeWZ0c4hUif8RshmZSAzGc",
  authDomain: "mentalify.firebaseapp.com",
  projectId: "mentalify",
  storageBucket: "mentalify.appspot.com",
  messagingSenderId: "585714318411",
  appId: "1:585714318411:web:61224db0cc954248dba1ce",
  measurementId: "G-PR3GZ3R6JV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const db = getFirestore(app);
//export const storage = getStorage(app);