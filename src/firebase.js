
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDw-5HmTNN1ZCt9x7VNstHxq3c2uKjwqBM",
  authDomain: "public-website-77f4e.firebaseapp.com",
  projectId: "public-website-77f4e",
  storageBucket: "public-website-77f4e.appspot.com",
  messagingSenderId: "376785012698",
  appId: "1:376785012698:web:472eb48e7220971ccc62e3",
  measurementId: "G-SJBKFYSXPC"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);