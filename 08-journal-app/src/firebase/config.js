// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzEuJgn6wraOLzw5bEzmNywIfelnkQO7M",
  authDomain: "react-cursos-448f4.firebaseapp.com",
  projectId: "react-cursos-448f4",
  storageBucket: "react-cursos-448f4.appspot.com",
  messagingSenderId: "811924385972",
  appId: "1:811924385972:web:c8e07f35bcaf9b38e427e1",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const CloudFirestore = getFirestore(FirebaseApp);
