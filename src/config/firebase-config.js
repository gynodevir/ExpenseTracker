// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//this library will hepls to sign in with our google account
import {getAuth,GithubAuthProvider, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXKrwG68DEWjnK2F6SVUsasP3HFZpIKXI",
  authDomain: "expensetracker-f93c9.firebaseapp.com",
  projectId: "expensetracker-f93c9",
  storageBucket: "expensetracker-f93c9.appspot.com",
  messagingSenderId: "159474011411",
  appId: "1:159474011411:web:0d4180eaa2b4b2a652dee6"
};
//firebase login
//firebase init

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };