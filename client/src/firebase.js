// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-75af2.firebaseapp.com",
  projectId: "mern-estate-75af2",
  storageBucket: "mern-estate-75af2.appspot.com",
  messagingSenderId: "656852685095",
  appId: "1:656852685095:web:f377fd2b2a595ada0f1902",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
