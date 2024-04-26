// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhW_-S7JmvB0jLkqh0MIM9Ya49PPNYiww",
  authDomain: "travelmentor-3617a.firebaseapp.com",
  projectId: "travelmentor-3617a",
  storageBucket: "travelmentor-3617a.appspot.com",
  messagingSenderId: "247742457180",
  appId: "1:247742457180:web:2470ef169c1479a20d8d99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;