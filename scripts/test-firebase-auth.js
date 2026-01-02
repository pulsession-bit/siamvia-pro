/**
 * Script de test Firebase Auth
 * 
 * Usage: node scripts/test-firebase-auth.js
 */

const { initializeApp } = require('firebase/app');
const { getAuth, signInAnonymously } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyCnY00dNLAVeFeiRQ8FMu3sN50iMVUOVGw",
    authDomain: "call-center-lead-dc450.firebaseapp.com",
    projectId: "call-center-lead-dc450",
    storageBucket: "call-center-lead-dc450.firebasestorage.app",
    messagingSenderId: "622593516264",
    appId: "1:622593516264:web:0785c626d45529f3595f5d",
    measurementId: "G-SPPNR4KM76"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function testAuth() {
    console.log('🔐 Test de Firebase Auth...\n');

    try {
        const userCredential = await signInAnonymously(auth);
        console.log('✅ Authentification anonyme réussie !');
        console.log('📝 User ID:', userCredential.user.uid);
        console.log('🎫 Token disponible:', !!userCredential.user.getIdToken);
        console.log('\n✨ Firebase Auth est correctement configuré !');
        process.exit(0);
    } catch (error) {
        console.error('❌ Erreur d\'authentification:', error.code);
        console.error('💡 Message:', error.message);

        if (error.code === 'auth/operation-not-allowed') {
            console.log('\n⚠️  ACTION REQUISE:');
            console.log('1. Allez sur https://console.firebase.google.com');
            console.log('2. Sélectionnez le projet "call-center-lead-dc450"');
            console.log('3. Authentication > Sign-in method');
            console.log('4. Activez "Anonymous" (Anonyme)');
        }

        process.exit(1);
    }
}

testAuth();
