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
  visaContext?: string;
}

const ExpertAppointmentForm: React.FC<ExpertAppointmentFormProps> = ({
  onSuccess,
  onCancel,
  visaContext
}) => {
  const { t, language } = useLanguage();
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
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

    try {
      let currentUser = auth.currentUser;
      if (!currentUser) {
        const result = await signInAnonymously(auth);
        currentUser = result.user;
      }

      // Save to Firestore
      const docRef = await addDoc(collection(db, "appointments"), {
        date,
        slot,
        contactMethod,
        contactValue,
        language,
        status: "pending",
        createdAt: serverTimestamp(),
        source: "website_search",
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
        <div>
          <label className="flex items-center text-xs font-bold text-slate-500 uppercase mb-2">
            <Calendar className="w-3 h-3 mr-1" /> DATE
          </label>
          <input type="date" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <div>
          <label className="flex items-center text-xs font-bold text-slate-500 uppercase mb-2">
            <Clock className="w-3 h-3 mr-1" /> HEURE
          </label>
          <input type="time" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition" value={slot} onChange={(e) => setSlot(e.target.value)} required />
        </div>
      </div>

      <div className="space-y-3">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Canal de contact préféré</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'whatsapp', icon: MessageSquare, label: 'WhatsApp', sub: 'Rapide' },
            { id: 'phone', icon: Phone, label: 'Téléphone', sub: 'Standard' },
            { id: 'email', icon: Mail, label: 'Email', sub: 'Écrit' },
            { id: 'video', icon: Video, label: 'Zoom', sub: 'Face-à-face' }
          ].map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setContactMethod(m.id as any)}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all relative overflow-hidden ${contactMethod === m.id ? 'border-amber-500 bg-amber-50 text-amber-700 ring-4 ring-amber-500/10' : 'border-slate-100 text-slate-400 hover:border-slate-200 hover:bg-slate-50'}`}
            >
              {m.id === 'whatsapp' && <span className="absolute top-0 right-0 bg-green-500 text-white text-[8px] px-1.5 py-0.5 rounded-bl-lg font-bold">TOP</span>}
              <m.icon className={`w-6 h-6 mb-2 ${contactMethod === m.id ? 'text-amber-500' : 'text-slate-300'}`} />
              <span className="text-[10px] font-black uppercase tracking-tight">{m.label}</span>
            </button>
          ))}
        </div>

        <div className="relative mt-4">
          <input
            type="text"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 pl-12 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition"
            value={contactValue}
            onChange={(e) => setContactValue(e.target.value)}
            placeholder={contactMethod === 'email' ? 'votre@email.com' : 'N° avec indicatif (ex: +33...)'}
            required
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {contactMethod === 'email' ? <Mail size={18} /> : <Phone size={18} />}
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm animate-shake">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all flex items-center justify-center disabled:opacity-50 active:scale-95"
      >
        {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : 'CONFIRMER MON RENDEZ-VOUS'}
      </button>

      {onCancel && (
        <button type="button" onClick={onCancel} className="w-full text-slate-400 text-xs font-bold hover:text-slate-600 transition tracking-widest uppercase">
          Annuler
        </button>
      )}
    </form>
  );
};

export default ExpertAppointmentForm;
