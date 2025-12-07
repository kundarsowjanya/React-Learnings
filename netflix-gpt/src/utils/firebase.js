// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6lRAGu3rpywpCtsUrKy2WbUgdJAnRk0I",
  authDomain: "netflixgpt-5766c.firebaseapp.com",
  projectId: "netflixgpt-5766c",
  storageBucket: "netflixgpt-5766c.firebasestorage.app",
  messagingSenderId: "668078897710",
  appId: "1:668078897710:web:6c4d34c0b08792dc37bdbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);