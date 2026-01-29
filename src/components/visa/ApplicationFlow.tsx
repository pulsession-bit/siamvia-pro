'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageContainer, Card, HeroSection, SectionTitle } from '@/components/ui/PageComponents';
import { Check, ArrowRight, ArrowLeft, User, Globe, Plane, Calendar, Clock, Send } from 'lucide-react';
import { VISAS_DATA } from '@/app/[lang]/search/data/visas';
import { IMAGES } from '@/constants';

type Step = 'selection' | 'personal' | 'trip' | 'confirm' | 'success';

const ApplicationFlow: React.FC = () => {
    const { t, language } = useLanguage();
    const [step, setStep] = useState<Step>('selection');
    const [formData, setFormData] = useState({
        visaId: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        nationality: '',
        entryDate: '',
        duration: '',
    });

    const steps = ['selection', 'personal', 'trip', 'confirm'];
    const currentStepIndex = steps.indexOf(step);

    const handleNext = () => {
        if (step === 'selection') setStep('personal');
        else if (step === 'personal') setStep('trip');
        else if (step === 'trip') setStep('confirm');
    };

    const handlePrev = () => {
        if (step === 'personal') setStep('selection');
        else if (step === 'trip') setStep('personal');
        else if (step === 'confirm') setStep('trip');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setStep('success');
    };

    const selectedVisa = VISAS_DATA.find(v => v.id === formData.visaId);

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                title={t('apply_page.hero_title')}
                subtitle={t('apply_page.hero_subtitle')}
                badge="DEMANDE EN LIGNE"
                backgroundImage={IMAGES.HERO_THAILAND}
            />

            <PageContainer negativeMargin maxWidth="max-w-4xl">
                {step !== 'success' && (
                    <div className="mb-12">
                        <div className="flex items-center justify-between relative px-4">
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
                            {steps.map((s, idx) => (
                                <div
                                    key={s}
                                    className={`relative z-10 flex flex-col items-center group cursor-pointer`}
                                    onClick={() => idx < currentStepIndex && setStep(s as Step)}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${idx <= currentStepIndex ? 'bg-amber-500 border-white text-white shadow-lg shadow-amber-500/20' : 'bg-white border-slate-100 text-slate-300'}`}>
                                        {idx < currentStepIndex ? <Check size={18} strokeWidth={3} /> : <span className="font-bold text-sm">{idx + 1}</span>}
                                    </div>
                                    <span className={`absolute top-full mt-2 text-[10px] font-black uppercase tracking-widest text-center whitespace-nowrap transition-colors duration-500 ${idx <= currentStepIndex ? 'text-slate-900' : 'text-slate-300'}`}>
                                        {t(`apply_page.steps.${s}.title`)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {step === 'selection' && (
                        <Card variant="white" className="p-8 md:p-12">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t('apply_page.steps.selection.title')}</h2>
                                <p className="text-slate-500 font-medium">{t('apply_page.steps.selection.subtitle')}</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                {VISAS_DATA.map((visa) => (
                                    <button
                                        key={visa.id}
                                        onClick={() => {
                                            setFormData({ ...formData, visaId: visa.id });
                                            handleNext();
                                        }}
                                        className={`p-6 rounded-2xl border-2 text-left transition-all hover:scale-[1.02] active:scale-[0.98] ${formData.visaId === visa.id ? 'border-amber-500 bg-amber-50 ring-4 ring-amber-500/10' : 'border-slate-50 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50'}`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                                                <Plane className={`w-5 h-5 ${formData.visaId === visa.id ? 'text-amber-500' : 'text-slate-400'}`} />
                                            </div>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{visa.duration}</span>
                                        </div>
                                        <h3 className={`font-black tracking-tight leading-tight ${formData.visaId === visa.id ? 'text-amber-900' : 'text-slate-800'}`}>
                                            {visa.name[language] || visa.name.en}
                                        </h3>
                                    </button>
                                ))}
                            </div>
                        </Card>
                    )}

                    {step === 'personal' && (
                        <Card variant="white" className="p-8 md:p-12">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t('apply_page.steps.personal.title')}</h2>
                                <p className="text-slate-500 font-medium">{t('apply_page.steps.personal.subtitle')}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{t('apply_page.steps.personal.first_name')}</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-bold text-slate-700"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{t('apply_page.steps.personal.last_name')}</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-bold text-slate-700"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{t('apply_page.steps.personal.email')}</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-bold text-slate-700"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{t('apply_page.steps.personal.phone')}</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-bold text-slate-700"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{t('apply_page.steps.personal.nationality')}</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-bold text-slate-700"
                                        value={formData.nationality}
                                        onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 mt-12">
                                <button onClick={handlePrev} className="flex-1 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] border-2 border-slate-100 text-slate-400 hover:text-slate-600 hover:border-slate-200 transition-all flex items-center justify-center gap-2">
                                    <ArrowLeft size={14} /> {t('apply_page.prev')}
                                </button>
                                <button onClick={handleNext} disabled={!formData.firstName || !formData.lastName || !formData.email} className="flex-[2] py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-xs bg-slate-900 text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50">
                                    {t('apply_page.next')} <ArrowRight size={16} />
                                </button>
                            </div>
                        </Card>
                    )}

                    {step === 'trip' && (
                        <Card variant="white" className="p-8 md:p-12">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t('apply_page.steps.trip.title')}</h2>
                                <p className="text-slate-500 font-medium">{t('apply_page.steps.trip.subtitle')}</p>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{t('apply_page.steps.trip.entry_date')}</label>
                                    <input
                                        type="date"
                                        className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-bold text-slate-700"
                                        value={formData.entryDate}
                                        onChange={(e) => setFormData({ ...formData, entryDate: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{t('apply_page.steps.trip.duration')}</label>
                                    <input
                                        type="number"
                                        placeholder="ex: 60"
                                        className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-bold text-slate-700"
                                        value={formData.duration}
                                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 mt-12">
                                <button onClick={handlePrev} className="flex-1 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] border-2 border-slate-100 text-slate-400 hover:text-slate-600 hover:border-slate-200 transition-all flex items-center justify-center gap-2">
                                    <ArrowLeft size={14} /> {t('apply_page.prev')}
                                </button>
                                <button onClick={handleNext} className="flex-[2] py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-xs bg-slate-900 text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-3">
                                    {t('apply_page.next')} <ArrowRight size={16} />
                                </button>
                            </div>
                        </Card>
                    )}

                    {step === 'confirm' && (
                        <Card variant="white" className="p-8 md:p-12 overflow-hidden relative">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t('apply_page.steps.confirm.title')}</h2>
                                <p className="text-slate-500 font-medium">{t('apply_page.steps.confirm.subtitle')}</p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-4 flex items-center">
                                        <Plane className="w-3 h-3 mr-2" /> Visa Sélectionné
                                    </h4>
                                    <p className="text-xl font-bold text-slate-900">
                                        {selectedVisa?.name[language] || selectedVisa?.name.en}
                                    </p>
                                    <p className="text-slate-500 font-medium text-sm mt-1">{selectedVisa?.duration}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                                            <User className="w-3 h-3 mr-2" /> Identité
                                        </h4>
                                        <p className="font-bold text-slate-800">{formData.firstName} {formData.lastName}</p>
                                        <p className="text-xs text-slate-500 mt-1">{formData.nationality}</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                                            <Globe className="w-3 h-3 mr-2" /> Contact
                                        </h4>
                                        <p className="font-bold text-slate-800 truncate">{formData.email}</p>
                                        <p className="text-xs text-slate-500 mt-1">{formData.phone}</p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                                        <Calendar className="w-3 h-3 mr-2" /> Voyage
                                    </h4>
                                    <p className="font-bold text-slate-800">
                                        Entrée le {formData.entryDate || 'Non spécifiée'}
                                    </p>
                                    <p className="text-sm text-slate-500 font-medium">{formData.duration ? `${formData.duration} jours prévus` : 'Durée non spécifiée'}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-12">
                                <button onClick={handlePrev} className="flex-1 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] border-2 border-slate-100 text-slate-400 hover:text-slate-600 hover:border-slate-200 transition-all flex items-center justify-center gap-2">
                                    <ArrowLeft size={14} /> {t('apply_page.prev')}
                                </button>
                                <button onClick={handleSubmit} className="flex-[2] py-5 px-6 rounded-3xl font-black text-lg bg-amber-500 text-slate-900 hover:bg-amber-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 active:scale-95">
                                    {t('apply_page.steps.confirm.btn_submit')} <Send size={20} />
                                </button>
                            </div>
                        </Card>
                    )}

                    {step === 'success' && (
                        <Card variant="white" className="p-12 md:p-20 text-center flex flex-col items-center justify-center min-h-[500px]">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 animate-bounce">
                                <Check className="w-12 h-12 text-green-500" strokeWidth={4} />
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
                                {t('apply_page.steps.confirm.success_title')}
                            </h2>
                            <p className="text-slate-500 text-lg font-medium max-w-md mx-auto mb-12">
                                {t('apply_page.steps.confirm.success_desc')}
                            </p>
                            <button
                                onClick={() => window.location.href = `/${language}`}
                                className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/20 active:scale-95"
                            >
                                RETOUR À L'ACCUEIL
                            </button>
                        </Card>
                    )}
                </div>
            </PageContainer>
        </div>
    );
};

export default ApplicationFlow;
