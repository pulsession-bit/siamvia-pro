import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Config Firebase hardcodée car protégée par restriction de domaine (Referrer)
// Cela évite les erreurs de build et d'exécution sur Vercel si les variables d'env ne sont pas propagées.
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

let app: any;
let db: any;
let auth: any;
let analytics: any;

try {
    // Évite la double initialisation (HMR en dev)
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);

    if (typeof window !== 'undefined') {
        analytics = getAnalytics(app);

        // Initialize App Check
        // Ensure you have NEXT_PUBLIC_RECAPTCHA_SITE_KEY in your .env.local
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
        if (siteKey) {
            import("firebase/app-check").then(({ initializeAppCheck, ReCaptchaV3Provider }) => {
                initializeAppCheck(app, {
                    provider: new ReCaptchaV3Provider(siteKey),
                    isTokenAutoRefreshEnabled: true
                });
                console.log("Firebase App Check initialized.");
            }).catch(err => console.error("Failed to load App Check:", err));
        } else {
            console.warn("App Check not initialized: NEXT_PUBLIC_RECAPTCHA_SITE_KEY is missing.");
        }
    }
} catch (error) {
    console.error("Firebase initialization error:", error);
}

export { app, db, auth, analytics };
