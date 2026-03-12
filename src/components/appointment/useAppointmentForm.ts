import { useState, useEffect } from "react";
import { db, auth } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { signInAnonymously, onAuthStateChanged, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLanguage } from "@/contexts/LanguageContext";

export type ContactMethod = "phone" | "whatsapp" | "email" | "video";

export const useAppointmentForm = (visaContext?: string, onSuccess?: () => void) => {
    const { language, t } = useLanguage();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [slot, setSlot] = useState("");
    const [contactMethod, setContactMethod] = useState<ContactMethod>("whatsapp");
    const [contactValue, setContactValue] = useState("");

    // Account Creation State
    const [createAccount, setCreateAccount] = useState(false);
    const [password, setPassword] = useState("");
    const [isGoogleLinked, setIsGoogleLinked] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");
    const [isAuthReady, setIsAuthReady] = useState(false);

    // Anonymous Auth setup
    useEffect(() => {
        if (!auth) {
            setIsAuthReady(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthReady(true);
                // If user is already logged in (and not anonymous), we could pre-fill info
                if (!user.isAnonymous) {
                    setIsGoogleLinked(user.providerData.some(p => p.providerId === 'google.com'));
                    setFullName(user.displayName || "");
                    setEmail(user.email || "");
                }
            } else {
                signInAnonymously(auth)
                    .then(() => setIsAuthReady(true))
                    .catch((error) => {
                        console.error("Auth error:", error);
                        setErrorMessage(t('appointment.error_init') || "Erreur d'initialisation");
                    });
            }
        });
        return () => unsubscribe && unsubscribe();
    }, [t]);

    const handleGoogleLogin = async () => {
        if (!auth) return;
        setErrorMessage("");
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Auto-fill from Google Profile
            setFullName(user.displayName || "");
            setEmail(user.email || "");
            setCreateAccount(false); // No need to create account manually
            setIsGoogleLinked(true);

        } catch (error: any) {
            console.error("Google Auth Error:", error);
            setErrorMessage(t('appointment.error_google') || "Erreur lors de la connexion Google.");
        }
    };

    const resetForm = () => {
        setSubmitStatus('idle');
        setErrorMessage("");
    };

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!db || !auth) {
            setErrorMessage(t('appointment.error_service') || "Le service de réservation est temporairement indisponible.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage("");

        try {
            let userId = auth.currentUser?.uid || 'anonymous';

            // Logic to create account
            if (createAccount && password) {
                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    userId = userCredential.user.uid;
                } catch (authError: any) {
                    // Handle specific auth errors (e.g., email-already-in-use)
                    if (authError.code === 'auth/email-already-in-use') {
                        throw new Error(t('appointment.error_email_exists') || "Un compte existe déjà avec cet email. Veuillez vous connecter.");
                    } else if (authError.code === 'auth/weak-password') {
                        throw new Error(t('appointment.error_weak_pass') || "Le mot de passe doit contenir au moins 6 caractères.");
                    } else if (authError.message?.includes('Password must contain an upper case character')) {
                        throw new Error(t('appointment.error_pass_uppercase') || "Le mot de passe doit contenir au moins une majuscule.");
                    } else if (authError.code === 'auth/password-does-not-meet-requirements') {
                        throw new Error(t('appointment.error_pass_requirements') || "Le mot de passe ne respecte pas les critères de sécurité (min 6 caractères, 1 majuscule).");
                    } else {
                        throw authError; // Re-throw other errors
                    }
                }
            } else if (!auth.currentUser) {
                // Determine anonymous fallback if not creating account and no user
                const result = await signInAnonymously(auth);
                userId = result.user.uid;
            }

            await addDoc(collection(db, "appointments"), {
                fullName: fullName.trim(),
                email: email.trim().toLowerCase(),
                date,
                slot,
                contactMethod,
                contactValue,
                language,
                status: "pending",
                createdAt: serverTimestamp(),
                source: "website_v2",
                visaContext: visaContext || 'general',
                userId: userId,
                hasAccount: createAccount || isGoogleLinked
            });

            // Send notification email to admin
            await addDoc(collection(db, 'mail'), {
                to: 'info@siamvisapro.com',
                message: {
                    subject: `[PRO] Nouveau RDV Expert : ${fullName}`,
                    html: `
                        <div style="font-family: sans-serif; padding: 20px; color: #333;">
                            <h2 style="color: #2563eb;">Nouvelle demande de rendez-vous expert</h2>
                            <p>Un utilisateur souhaite être contacté par un expert via le site <strong>siamvisapro.com</strong>.</p>
                            
                            <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
                                <p><strong>Nom complet :</strong> ${fullName}</p>
                                <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
                                <p><strong>Date souhaitée :</strong> ${date}</p>
                                <p><strong>Heure/Créneau :</strong> ${slot}</p>
                                <p><strong>Méthode de contact :</strong> ${contactMethod.toUpperCase()}</p>
                                <p><strong>Coordonnées de contact :</strong> ${contactValue}</p>
                                <p><strong>Contexte (Page) :</strong> ${visaContext || 'Général'}</p>
                            </div>
                            
                            <p style="margin-top: 20px; font-size: 12px; color: #64748b;">
                                Ce message a été généré automatiquement par le système de gestion des rendez-vous.
                            </p>
                        </div>
                    `
                }
            });

            setSubmitStatus('success');
            if (onSuccess) {
                setTimeout(onSuccess, 3000);
            }
        } catch (error: any) {
            console.error("Error saving appointment:", error);
            setSubmitStatus('error');
            setErrorMessage(error.message || t('appointment.error_generic') || "Une erreur est survenue.");

        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        state: { fullName, email, date, slot, contactMethod, contactValue, createAccount, password, isGoogleLinked, isSubmitting, submitStatus, errorMessage, isAuthReady },
        actions: { setFullName, setEmail, setDate, setSlot, setContactMethod, setContactValue, setCreateAccount, setPassword, handleGoogleLogin, submitForm, resetForm }
    };
};
