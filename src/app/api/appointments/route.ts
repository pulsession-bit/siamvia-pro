import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase Admin (only once)
if (!getApps().length) {
    initializeApp({
        credential: cert({
            projectId: "call-center-lead-dc450",
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
    });
}

const db = getFirestore();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validation basique
        if (!body.date || !body.slot1 || !body.contactValue) {
            return NextResponse.json(
                { error: 'Champs requis manquants' },
                { status: 400 }
            );
        }

        // Sauvegarde dans Firestore
        const docRef = await db.collection('appointments').add({
            date: body.date,
            slot1: body.slot1,
            slot2: body.slot2,
            contactMethod: body.contactMethod,
            contactValue: body.contactValue,
            language: body.language || 'fr',
            status: 'pending',
            createdAt: new Date(),
            source: 'website',
            userAgent: request.headers.get('user-agent'),
            ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
        });

        return NextResponse.json({
            success: true,
            id: docRef.id,
            message: 'Rendez-vous enregistré avec succès'
        });

    } catch (error: any) {
        console.error('Error saving appointment:', error);
        return NextResponse.json(
            { error: error.message || 'Erreur serveur' },
            { status: 500 }
        );
    }
}
