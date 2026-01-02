import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCnY00dNLAVeFeiRQ8FMu3sN50iMVUOVGw",
    authDomain: "call-center-lead-dc450.firebaseapp.com",
    projectId: "call-center-lead-dc450",
    storageBucket: "call-center-lead-dc450.firebasestorage.app",
    messagingSenderId: "622593516264",
    appId: "1:622593516264:web:0785c626d45529f3595f5d",
    measurementId: "G-SPPNR4KM76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Analytics (only in browser)
let analytics;
if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}

export { app, db, auth, analytics };
