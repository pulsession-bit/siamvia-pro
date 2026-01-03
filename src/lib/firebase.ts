import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Config Firebase hardcodée car protégée par restriction de domaine (Referrer)
// Cela évite les erreurs de build et d'exécution sur Vercel si les variables d'env ne sont pas propagées.
const firebaseConfig = {
    apiKey: "AIzaSyCnY00dNLAVeFeiRQ8FMu3sN50iMVUOVGw",
    authDomain: "call-center-lead-dc450.firebaseapp.com",
    projectId: "call-center-lead-dc450",
    storageBucket: "call-center-lead-dc450.firebasestorage.app",
    messagingSenderId: "622593516264",
    appId: "1:622593516264:web:0785c626d45529f3595f5d",
    measurementId: "G-SPPNR4KM76"
};

let app: any;
let db: any;
let auth: any;
let analytics: any;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);

    if (typeof window !== 'undefined') {
        analytics = getAnalytics(app);
    }
} catch (error) {
    console.error("Firebase initialization error:", error);
}

export { app, db, auth, analytics };
