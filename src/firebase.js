// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc7LtvyjcvoXaytlAMmW3097kVYl_CYsc",
  authDomain: "agri-app-790ac.firebaseapp.com",
  projectId: "agri-app-790ac",
  storageBucket: "agri-app-790ac.appspot.com",
  messagingSenderId: "146393410750",
  appId: "1:146393410750:web:be15c97b7870062c3e02ef",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
