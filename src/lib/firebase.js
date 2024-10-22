import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b44da.firebaseapp.com",
  projectId: "reactchat-b44da",
  storageBucket: "reactchat-b44da.appspot.com",
  messagingSenderId: "319882206284",
  appId: "1:319882206284:web:aa75ba5de568145bf8e8e9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()