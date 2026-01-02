/**
 * Script de test automatique - Soumission formulaire RDV
 * 
 * Usage: node scripts/test-appointment-submission.js
 */

const { initializeApp } = require('firebase/app');
const { getAuth, signInAnonymously } = require('firebase/auth');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');

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
const db = getFirestore(app);

async function testAppointmentSubmission() {
    console.log('🧪 Test de soumission de rendez-vous\n');

    try {
        // Étape 1: Authentification anonyme
        console.log('1️⃣ Authentification anonyme...');
        const userCredential = await signInAnonymously(auth);
        console.log('   ✅ Connecté avec User ID:', userCredential.user.uid);

        // Étape 2: Préparation des données de test
        const testData = {
            date: '2026-01-15',
            slot1: '09:30',
            slot2: '14:00',
            contactMethod: 'whatsapp',
            contactValue: '+33612345678',
            language: 'fr',
            status: 'pending',
            createdAt: serverTimestamp(),
            source: 'test-script',
            userId: userCredential.user.uid
        };

        console.log('\n2️⃣ Données de test:');
        console.log(JSON.stringify(testData, null, 2));

        // Étape 3: Sauvegarde dans Firestore
        console.log('\n3️⃣ Envoi vers Firestore...');
        const docRef = await addDoc(collection(db, 'appointments'), testData);

        console.log('   ✅ Document créé avec ID:', docRef.id);

        console.log('\n🎉 TEST RÉUSSI !');
        console.log('\n📊 Vérifiez dans Firebase Console:');
        console.log('   https://console.firebase.google.com/project/call-center-lead-dc450/firestore/data/appointments/' + docRef.id);

        process.exit(0);

    } catch (error) {
        console.error('\n❌ ERREUR:', error.code);
        console.error('💡 Message:', error.message);

        if (error.code === 'permission-denied') {
            console.log('\n⚠️  Vérifiez les règles Firestore:');
            console.log('   allow create: if request.auth != null;');
        }

        process.exit(1);
    }
}

testAppointmentSubmission();
