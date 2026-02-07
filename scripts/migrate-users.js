/**
 * Script de Migration - Création du Point Canonique Users
 * 
 * Ce script lit les collections `visa_applications` et `appointments`
 * pour créer/mettre à jour la collection `users` (Point Canonique).
 * 
 * Usage: node scripts/migrate-users.js
 */

const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    getDocs,
    doc,
    setDoc,
    updateDoc,
    arrayUnion,
    serverTimestamp,
    getDoc
} = require('firebase/firestore');

// --- Configuration ---
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

// --- Helpers ---
function lcEmail(email) {
    return email ? email.trim().toLowerCase() : null;
}

function splitName(fullName) {
    if (!fullName) return { firstName: '', lastName: '' };
    const parts = fullName.trim().split(' ');
    return {
        firstName: parts[0] || '',
        lastName: parts.slice(1).join(' ') || ''
    };
}

function makeUserId(email) {
    // Use email as doc ID (URL-safe)
    return email.replace(/[.@]/g, '_');
}

// --- Migration Logic ---
async function migrateVisaApplications() {
    console.log('\n📋 Migration des visa_applications...');

    let snapshot;
    try {
        snapshot = await getDocs(collection(db, 'visa_applications'));
    } catch (err) {
        console.log('   ⚠️ Collection visa_applications inaccessible:', err.message);
        return;
    }

    console.log(`   Trouvé ${snapshot.size} applications`);

    let created = 0, skipped = 0;

    for (const docSnap of snapshot.docs) {
        const data = docSnap.data();
        const email = lcEmail(data.email);

        if (!email) {
            console.log(`   ⚠️ Skip ${docSnap.id}: pas d'email`);
            skipped++;
            continue;
        }

        const userId = makeUserId(email);
        const userRef = doc(db, 'users', userId);

        const userPatch = {
            email: email,
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            displayName: `${data.firstName || ''} ${data.lastName || ''}`.trim(),
            phone: data.phone || null,
            nationality: data.nationality || null,
            language: data.language || 'fr',
            role: 'user',
            status: 'prospect',
            source: 'website_application',
            updatedAt: serverTimestamp(),
        };

        try {
            // Check if user exists
            const existingUser = await getDoc(userRef);

            if (existingUser.exists()) {
                // Update existing user, add application ID
                await updateDoc(userRef, {
                    ...userPatch,
                    applicationIds: arrayUnion(docSnap.id)
                });
            } else {
                // Create new user
                await setDoc(userRef, {
                    ...userPatch,
                    createdAt: serverTimestamp(),
                    applicationIds: [docSnap.id],
                    appointmentIds: [],
                });
            }

            created++;
            console.log(`   ✓ ${email} <- application ${docSnap.id}`);
        } catch (err) {
            console.error(`   ❌ Erreur ${docSnap.id}:`, err.message);
        }
    }

    console.log(`   ✅ Traités: ${created}, Skipped: ${skipped}`);
}

async function migrateAppointments() {
    console.log('\n📅 Migration des appointments...');

    let snapshot;
    try {
        snapshot = await getDocs(collection(db, 'appointments'));
    } catch (err) {
        console.log('   ⚠️ Collection appointments inaccessible:', err.message);
        return;
    }

    console.log(`   Trouvé ${snapshot.size} rendez-vous`);

    let updated = 0, skipped = 0;

    for (const docSnap of snapshot.docs) {
        const data = docSnap.data();
        const email = lcEmail(data.email);

        if (!email) {
            console.log(`   ⚠️ Skip ${docSnap.id}: pas d'email`);
            skipped++;
            continue;
        }

        const userId = makeUserId(email);
        const userRef = doc(db, 'users', userId);
        const { firstName, lastName } = splitName(data.fullName);

        // Determine phone from contactValue
        const phone = (data.contactMethod === 'phone' || data.contactMethod === 'whatsapp')
            ? data.contactValue
            : null;

        const userPatch = {
            email: email,
            language: data.language || 'fr',
            updatedAt: serverTimestamp(),
        };

        // Add optional fields if present
        if (data.fullName) userPatch.displayName = data.fullName;
        if (firstName) userPatch.firstName = firstName;
        if (lastName) userPatch.lastName = lastName;
        if (phone) userPatch.phone = phone;

        try {
            // Check if user exists
            const existingUser = await getDoc(userRef);

            if (existingUser.exists()) {
                // Update existing user, add appointment ID
                await updateDoc(userRef, {
                    ...userPatch,
                    appointmentIds: arrayUnion(docSnap.id)
                });
            } else {
                // Create new user
                await setDoc(userRef, {
                    ...userPatch,
                    role: 'user',
                    status: 'lead',
                    source: 'appointment_booking',
                    createdAt: serverTimestamp(),
                    applicationIds: [],
                    appointmentIds: [docSnap.id],
                });
            }

            updated++;
            console.log(`   ✓ ${email} <- appointment ${docSnap.id}`);
        } catch (err) {
            console.error(`   ❌ Erreur ${docSnap.id}:`, err.message);
        }
    }

    console.log(`   ✅ Traités: ${updated}, Skipped: ${skipped}`);
}

// --- Main ---
async function main() {
    console.log('🚀 Démarrage de la migration vers le Point Canonique Users...');
    console.log('   Project:', firebaseConfig.projectId);

    await migrateVisaApplications();
    await migrateAppointments();

    console.log('\n✨ Migration terminée!');
    console.log('   → Collection "users" mise à jour');
    console.log('   → Chaque user a ses applicationIds et appointmentIds agrégés');

    process.exit(0);
}

main().catch(err => {
    console.error('💥 Erreur fatale:', err);
    process.exit(1);
});
