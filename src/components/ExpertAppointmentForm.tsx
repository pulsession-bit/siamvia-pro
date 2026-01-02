'use client';

import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Loader2, CheckCircle, Phone, MessageSquare, Mail, Video, Calendar, Clock } from "lucide-react";
import { db, auth } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";

type ContactMethod = "phone" | "whatsapp" | "email" | "video";

interface ExpertAppointmentFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const ExpertAppointmentForm: React.FC<ExpertAppointmentFormProps> = ({
  onSuccess,
  onCancel
}) => {
  const { t, language } = useLanguage();
  const [date, setDate] = useState("");
  const [slot1, setSlot1] = useState("");
  const [slot2, setSlot2] = useState("");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("whatsapp");
  const [contactValue, setContactValue] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");
  const [isAuthReady, setIsAuthReady] = useState(false);

  // Authentification anonyme au chargement
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthReady(true);
      } else {
        // Si pas d'utilisateur, créer une session anonyme
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage("");

    if (!isAuthReady) {
      setErrorMessage("Session non initialisée, veuillez réessayer");
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Save to Firestore (avec session auth active)
      const docRef = await addDoc(collection(db, "appointments"), {
        date,
        slot1,
        slot2,
        contactMethod,
        contactValue,
        language,
        status: "pending",
        createdAt: serverTimestamp(),
        source: "website",
        userId: auth.currentUser?.uid || 'anonymous'
      });

      console.log("Appointment saved with ID: ", docRef.id);
      setSubmitStatus('success');
      if (onSuccess) {
        setTimeout(onSuccess, 3000);
      }
    } catch (error: any) {
      console.error("Error saving appointment:", error);
      setSubmitStatus('error');
      setErrorMessage(error.message || "Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center animate-fade-in min-h-[400px]">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-100">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('appointment.success_title')}</h3>
        <p className="text-slate-500 mb-8 max-w-xs">{t('appointment.success_desc')}</p>
        <button
          type="button"
          onClick={() => onSuccess ? onSuccess() : window.location.reload()}
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg"
        >
          {onSuccess ? 'Continuer' : 'Fermer'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full space-y-6 transition-opacity duration-300 ${isSubmitting ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black text-slate-900">{t('appointment.title')}</h2>
        <p className="text-slate-500 text-sm mt-1">{t('appointment.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="flex items-center text-xs font-bold text-slate-500 uppercase mb-2">
            <Calendar className="w-3 h-3 mr-1" /> {t('appointment.date_label')}
          </label>
          <input type="date" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <div>
          <label className="flex items-center text-xs font-bold text-slate-500 uppercase mb-2">
            <Clock className="w-3 h-3 mr-1" /> {t('appointment.slot1_label')}
          </label>
          <input type="time" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition" value={slot1} onChange={(e) => setSlot1(e.target.value)} required />
        </div>
        <div>
          <label className="flex items-center text-xs font-bold text-slate-500 uppercase mb-2">
            <Clock className="w-3 h-3 mr-1" /> {t('appointment.slot2_label')}
          </label>
          <input type="time" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition" value={slot2} onChange={(e) => setSlot2(e.target.value)} required />
        </div>
      </div>

      <div className="space-y-3">
        <label className="block text-xs font-bold text-slate-500 uppercase">{t('appointment.method_label')}</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'whatsapp', icon: MessageSquare, label: 'WhatsApp' },
            { id: 'phone', icon: Phone, label: 'Tél' },
            { id: 'email', icon: Mail, label: 'Email' },
            { id: 'video', icon: Video, label: 'Zoom' }
          ].map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setContactMethod(m.id as any)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition ${contactMethod === m.id ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-slate-50'}`}
            >
              <m.icon className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-bold">{m.label}</span>
            </button>
          ))}
        </div>
        <input
          type="text"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition mt-2"
          value={contactValue}
          onChange={(e) => setContactValue(e.target.value)}
          placeholder={contactMethod === 'email' ? 'email@example.com' : '+33 6...'}
          required
        />
      </div>

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          <strong>Erreur :</strong> {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold shadow-xl hover:bg-slate-800 transition flex items-center justify-center disabled:opacity-50"
      >
        {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : t('appointment.submit')}
      </button>

      {onCancel && (
        <button type="button" onClick={onCancel} className="w-full text-slate-400 text-xs font-bold hover:text-slate-600 transition">
          {t('eligibility.btn_back')}
        </button>
      )}
    </form>
  );
};
