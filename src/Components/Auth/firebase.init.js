// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT8Ax_nUHlUtSFp-RP2T4Zx_af60a2Jo0",
  authDomain: "brain-wave-1a4d7.firebaseapp.com",
  projectId: "brain-wave-1a4d7",
  storageBucket: "brain-wave-1a4d7.appspot.com",
  messagingSenderId: "68245403090",
  appId: "1:68245403090:web:a2b2895062e7f17ac7040b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;