// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7ngDeakYBDunDwJlIY2pfGQ2AOAwLU-I",
  authDomain: "task-management-f5295.firebaseapp.com",
  projectId: "task-management-f5295",
  storageBucket: "task-management-f5295.appspot.com",
  messagingSenderId: "559951876210",
  appId: "1:559951876210:web:438c3674e49464eb1df2eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth