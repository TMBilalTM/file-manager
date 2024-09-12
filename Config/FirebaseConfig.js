// firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Firestore için eklenen import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "file-ea538.firebaseapp.com",
  projectId: "file-ea538",
  storageBucket: "file-ea538.appspot.com",
  messagingSenderId: "785159388085",
  appId: "1:785159388085:web:02c127bc260876eb5677fc",
  measurementId: "G-BYD05YYRSX"
};

// Initialize Firebase if no apps have been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
const firestore = getFirestore(app);

export { app, firestore };
