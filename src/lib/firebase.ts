import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_S9pBMmNQ5daKMCMNcBX9MXpBDQHXGDM",
  authDomain: "arabasiafamous.firebaseapp.com",
  databaseURL: "https://arabasiafamous-default-rtdb.firebaseio.com",
  projectId: "arabasiafamous",
  storageBucket: "arabasiafamous.firebasestorage.app",
  messagingSenderId: "819547788694",
  appId: "1:819547788694:web:e5900727572c3ee774b9b7",
  measurementId: "G-2CVKLMHD9L",
};

// Initialize Firebase (Singleton pattern for Next.js)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth, ref, push, signInAnonymously };
