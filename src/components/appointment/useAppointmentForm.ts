import { useState, useEffect } from "react";
import { db, auth } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { signInAnonymously, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
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
                hasAccount: createAccount
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
        state: { fullName, email, date, slot, contactMethod, contactValue, createAccount, password, isSubmitting, submitStatus, errorMessage, isAuthReady },
        actions: { setFullName, setEmail, setDate, setSlot, setContactMethod, setContactValue, setCreateAccount, setPassword, submitForm, resetForm }
    };
};
