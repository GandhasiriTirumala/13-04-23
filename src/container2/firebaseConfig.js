// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN7DkmklM102k3_rWWUrkyToBHzXHTs1c",
  authDomain: "react-firebase-auth-71f60.firebaseapp.com",
  projectId: "react-firebase-auth-71f60",
  storageBucket: "react-firebase-auth-71f60.appspot.com",
  messagingSenderId: "344555009000",
  appId: "1:344555009000:web:b886debdab5a85f8012a5d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db =app.firestore()


export default app