// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPmpYC0EMuOjHuFKAO_c_bH5prT4MVUnA",
  authDomain: "emajhon-simple-63e19.firebaseapp.com",
  projectId: "emajhon-simple-63e19",
  storageBucket: "emajhon-simple-63e19.appspot.com",
  messagingSenderId: "537381363732",
  appId: "1:537381363732:web:136d17816e195dc77c0701"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

export default auth;