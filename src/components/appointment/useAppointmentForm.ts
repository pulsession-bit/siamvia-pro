import { useState, useEffect } from "react";
import { db, auth } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { useLanguage } from "@/contexts/LanguageContext";

export type ContactMethod = "phone" | "whatsapp" | "email" | "video";

export const useAppointmentForm = (visaContext?: string, onSuccess?: () => void) => {
    const { language } = useLanguage();
    const [date, setDate] = useState("");
    const [slot, setSlot] = useState("");
    const [contactMethod, setContactMethod] = useState<ContactMethod>("whatsapp");
    const [contactValue, setContactValue] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");
    const [isAuthReady, setIsAuthReady] = useState(false);

    // Anonymous Auth setup
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthReady(true);
            } else {
                signInAnonymously(auth)
                    .then(() => setIsAuthReady(true))
                    .catch((error) => {
                        console.error("Auth error:", error);
                        setErrorMessage("Erreur d'initialisation");
                    });
            }
        });
        return () => unsubscribe();
    }, []);

    const resetForm = () => {
        setSubmitStatus('idle');
        setErrorMessage("");
    };

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage("");

        try {
            let currentUser = auth.currentUser;
            if (!currentUser) {
                const result = await signInAnonymously(auth);
                currentUser = result.user;
            }

            await addDoc(collection(db, "appointments"), {
                date,
                slot,
                contactMethod,
                contactValue,
                language,
                status: "pending",
                createdAt: serverTimestamp(),
                source: "website_v2",
                visaContext: visaContext || 'general',
                userId: currentUser?.uid || 'anonymous'
            });

            setSubmitStatus('success');
            if (onSuccess) {
                setTimeout(onSuccess, 3000);
            }
        } catch (error: any) {
            console.error("Error saving appointment:", error);
            setSubmitStatus('error');
            setErrorMessage(error.message || "Une erreur est survenue.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        state: { date, slot, contactMethod, contactValue, isSubmitting, submitStatus, errorMessage, isAuthReady },
        actions: { setDate, setSlot, setContactMethod, setContactValue, submitForm, resetForm }
    };
};
