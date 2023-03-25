import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwdCG9jpLPeeeiY-y4NAuCo17nliv-7Dc",
  authDomain: "lifejournal-15b5c.firebaseapp.com",
  projectId: "lifejournal-15b5c",
  storageBucket: "lifejournal-15b5c.appspot.com",
  messagingSenderId: "292631409760",
  appId: "1:292631409760:web:2ddb06dbafca4119b7bf05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider()

