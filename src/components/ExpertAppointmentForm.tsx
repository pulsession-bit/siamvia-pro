'use client';

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Loader2, Phone, MessageSquare, Mail, Video, Calendar, Clock, User } from "lucide-react";
import { useAppointmentForm, ContactMethod } from "./appointment/useAppointmentForm";
import { AppointmentSuccess } from "./appointment/AppointmentSuccess";

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
  const { t } = useLanguage();
  const { state, actions } = useAppointmentForm(visaContext, onSuccess);

  const contactMethods = [
    { id: 'whatsapp', icon: MessageSquare, label: t('appointment.methods.whatsapp') || 'WhatsApp', color: 'text-green-500' },
    { id: 'phone', icon: Phone, label: t('appointment.methods.phone') || 'Appel', color: 'text-blue-500' },
    { id: 'email', icon: Mail, label: t('appointment.methods.email') || 'Email', color: 'text-amber-500' },
    { id: 'video', icon: Video, label: t('appointment.methods.video') || 'Vidéo', color: 'text-purple-500' }
  ];

  if (state.submitStatus === 'success') {
    return (
      <AppointmentSuccess
        title={t('appointment.success_title')}
        description={t('appointment.success_desc')}
        buttonText={onSuccess ? 'CONTINUER' : 'FERMER'}
        onClose={() => onSuccess ? onSuccess() : window.location.reload()}
      />
    );
  }

  return (
    <form onSubmit={actions.submitForm} className={`w-full space-y-8 transition-all duration-300 ${state.isSubmitting ? 'opacity-50 pointer-events-none grayscale' : 'opacity-100'}`}>
      <div className="text-center">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t('appointment.title')}</h2>
        <p className="text-slate-500 mt-2 text-sm font-medium">{t('appointment.subtitle')}</p>
      </div>

      {/* Nom et Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
            <User className="w-3 h-3 mr-2" /> {t('appointment.name_label') || 'Nom complet'}
          </label>
          <input
            type="text"
            className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-bold text-slate-700"
            value={state.fullName}
            onChange={(e) => actions.setFullName(e.target.value)}
            placeholder="Jean Dupont"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
            <Mail className="w-3 h-3 mr-2" /> {t('appointment.email_label') || 'Email'}
          </label>
          <input
            type="email"
            className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-bold text-slate-700"
            value={state.email}
            onChange={(e) => actions.setEmail(e.target.value)}
            placeholder="votre@email.com"
            required
          />
        </div>
      </div>

      {/* Grid Date & Heure */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
            <Calendar className="w-3 h-3 mr-2" /> {t('appointment.date_label') || 'Date souhaitée'}
          </label>
          <input
            type="date"
            className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-bold text-slate-700"
            value={state.date}
            onChange={(e) => actions.setDate(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
            <Clock className="w-3 h-3 mr-2" /> {t('appointment.time_label') || 'Heure'}
          </label>
          <input
            type="time"
            className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-bold text-slate-700"
            value={state.slot}
            onChange={(e) => actions.setSlot(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Méthode de contact */}
      <div className="space-y-4">
        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{t('appointment.channel_label') || 'Canal de contact préféré'}</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {contactMethods.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => actions.setContactMethod(m.id as ContactMethod)}
              className={`flex flex-col items-center justify-center p-5 rounded-[2rem] border-2 transition-all relative overflow-hidden group ${state.contactMethod === m.id ? 'border-amber-500 bg-amber-50 shadow-lg shadow-amber-500/10' : 'border-slate-50 bg-slate-50/50 hover:border-slate-200 hover:bg-white'}`}
            >
              <m.icon className={`w-7 h-7 mb-2 transition-transform group-hover:scale-110 ${state.contactMethod === m.id ? 'text-amber-500' : 'text-slate-300'}`} />
              <span className={`text-[10px] font-black uppercase tracking-tight ${state.contactMethod === m.id ? 'text-amber-700' : 'text-slate-400'}`}>{m.label}</span>
              {m.id === 'whatsapp' && <span className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" title="Recommandé"></span>}
            </button>
          ))}
        </div>

        {/* Input Coordonnées */}
        <div className="relative group mt-6">
          <input
            type="text"
            className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 pl-14 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-bold"
            value={state.contactValue}
            onChange={(e) => actions.setContactValue(e.target.value)}
            placeholder={state.contactMethod === 'email' ? 'votre@email.com' : (t('appointment.phone_placeholder') || 'N° avec indicatif (ex: +33...)')}
            required
          />
          <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${state.contactMethod === 'email' ? 'text-amber-500' : 'text-slate-400'}`}>
            {state.contactMethod === 'email' ? <Mail size={22} /> : <Phone size={22} />}
          </div>
        </div>
      </div>

      {/* Erreurs */}
      {state.errorMessage && (
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-red-600 text-sm font-bold flex items-center animate-shake">
          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
          {state.errorMessage}
        </div>
      )}

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={state.isSubmitting}
          className="w-full bg-slate-900 text-white py-6 rounded-3xl font-black text-xl shadow-2xl shadow-slate-900/30 hover:bg-slate-800 transition-all flex items-center justify-center disabled:opacity-50 active:scale-95 group"
        >
          {state.isSubmitting ? (
            <Loader2 className="w-8 h-8 animate-spin" />
          ) : (
            <>
              {t('appointment.submit_btn_project') || 'CONFIER MON PROJET'}
              <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
            </>
          )}
        </button>

        {onCancel && (
          <button type="button" onClick={onCancel} className="w-full mt-6 text-slate-400 text-[10px] font-black hover:text-slate-600 transition tracking-[0.3em] uppercase">
            — {t('appointment.cancel_btn') || 'Annuler la demande'} —
          </button>
        )}
      </div>
    </form>
  );
};

export default ExpertAppointmentForm;
