/**
 * Script pour analyser la structure de la base Firebase
 * 
 * Usage: node scripts/analyze-firebase.js
 */

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, limit, query } = require('firebase/firestore');

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
const db = getFirestore(app);

async function analyzeFirestore() {
    console.log('🔍 Analyse de la base Firestore...\n');

    // Liste des collections à vérifier
    const collectionsToCheck = ['appointments', 'leads', 'users', 'contacts', 'rdv'];

    for (const collectionName of collectionsToCheck) {
        try {
            const q = query(collection(db, collectionName), limit(1));
            const snapshot = await getDocs(q);

            if (!snapshot.empty) {
                console.log(`✅ Collection "${collectionName}" existe`);
                console.log(`   📊 Nombre de documents: ${snapshot.size}`);

                const firstDoc = snapshot.docs[0];
                console.log(`   📝 Structure d'exemple:`);
                console.log(JSON.stringify(firstDoc.data(), null, 2));
                console.log('');
            } else {
                console.log(`⚠️  Collection "${collectionName}" existe mais est vide`);
            }
        } catch (error) {
            console.log(`❌ Collection "${collectionName}" n'existe pas ou erreur:`, error.message);
        }
    }

    console.log('\n✨ Analyse terminée');
    process.exit(0);
}

analyzeFirestore().catch(console.error);
