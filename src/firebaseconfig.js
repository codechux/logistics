// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabse } from "firebase/datanase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPEAB7qvqvLfhjx4wo_zzjiKesMwq7Mws",
  authDomain: "gatewaylogistics-97912.firebaseapp.com",
  projectId: "gatewaylogistics-97912",
  storageBucket: "gatewaylogistics-97912.appspot.com",
  messagingSenderId: "1041228239197",
  appId: "1:1041228239197:web:81abbca9f51c83a772d8b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabse(app);
export default db;
