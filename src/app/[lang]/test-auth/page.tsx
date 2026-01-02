'use client';

import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function TestAuthPage() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,
            (currentUser) => {
                setUser(currentUser);
                setLoading(false);
            },
            (err) => {
                setError(err.message);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
                    <p className="text-slate-600">Initialisation Firebase Auth...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-20">
            <div className="max-w-2xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                    <h1 className="text-3xl font-black text-slate-900 mb-6">
                        🔐 Test Firebase Auth
                    </h1>

                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                            <p className="text-red-700 font-bold">❌ Erreur</p>
                            <p className="text-red-600 text-sm mt-1">{error}</p>
                        </div>
                    )}

                    {user ? (
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                            <p className="text-green-700 font-bold text-lg mb-4">
                                ✅ Authentification réussie !
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-600 font-medium">User ID:</span>
                                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">
                                        {user.uid}
                                    </code>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600 font-medium">Type:</span>
                                    <span className="text-green-600 font-bold">
                                        {user.isAnonymous ? 'Anonyme' : 'Authentifié'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600 font-medium">Créé le:</span>
                                    <span className="text-slate-700">
                                        {new Date(user.metadata.creationTime).toLocaleString('fr-FR')}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-green-200">
                                <p className="text-green-700 font-bold mb-2">
                                    🎉 Le formulaire de RDV est maintenant fonctionnel !
                                </p>
                                <p className="text-slate-600 text-sm">
                                    Les visiteurs peuvent maintenant soumettre des demandes de rendez-vous
                                    qui seront sauvegardées dans Firestore.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                            <p className="text-amber-700 font-bold">⚠️ Pas d'utilisateur connecté</p>
                            <p className="text-amber-600 text-sm mt-2">
                                L'authentification anonyme devrait se déclencher automatiquement...
                            </p>
                        </div>
                    )}

                    <div className="mt-8 pt-8 border-t border-slate-200">
                        <h2 className="font-bold text-slate-900 mb-4">Pages à tester :</h2>
                        <div className="space-y-2">
                            <a
                                href="/fr"
                                className="block bg-slate-100 hover:bg-slate-200 px-4 py-3 rounded-lg transition font-medium text-slate-700"
                            >
                                → Page d'accueil (formulaire RDV)
                            </a>
                            <a
                                href="/fr/visa-ltr-thailande"
                                className="block bg-slate-100 hover:bg-slate-200 px-4 py-3 rounded-lg transition font-medium text-slate-700"
                            >
                                → Visa LTR (formulaire RDV)
                            </a>
                            <a
                                href="/fr/visa-elite-thailande"
                                className="block bg-slate-100 hover:bg-slate-200 px-4 py-3 rounded-lg transition font-medium text-slate-700"
                            >
                                → Visa Elite (formulaire RDV)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
