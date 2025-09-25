import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyA2MYxassLV3TMK8MZzFoCiY5j9RfKsY4A",
  authDomain: "angelaandshiva.firebaseapp.com",
  projectId: "angelaandshiva",
  storageBucket: "angelaandshiva.firebasestorage.app",
  messagingSenderId: "907232291037",
  appId: "1:907232291037:web:764aa695021d8901b1d334",
  measurementId: "G-ZNCN848NPM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, GoogleAuthProvider };