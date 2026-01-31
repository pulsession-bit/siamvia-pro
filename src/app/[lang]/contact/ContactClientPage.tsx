'use client';

import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, ShieldCheck, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ExpertAppointmentForm from '@/components/ExpertAppointmentForm';
import { ContactHero } from './components/ContactHero';
import { ContactInfo } from './components/ContactInfo';

const ContactClientPage: React.FC = () => {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* 1. Hero Section */}
            <ContactHero
                title={t('contact_page.title')}
                subtitle={t('contact_page.subtitle')}
            />

            {/* 2. Main Content Grid */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-16 relative z-20">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Information Column */}
                    <ContactInfo
                        infoTitle={t('contact_page.info_title')}
                        addressTitle={t('contact_page.address_title')}
                        phoneTitle={t('contact_page.phone_title')}
                        emailTitle={t('contact_page.email_title')}
                        whatsappTitle={t('contact_page.whatsapp_title')}
                        whatsappCta="Chatter avec un expert"
                    />

                    {/* Form Column */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                        {isSuccess ? (
                            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-300">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('contact_page.success_title')}</h3>
                                <p className="text-slate-600 mb-8">{t('contact_page.success_desc')}</p>
                                <button onClick={() => setIsSuccess(false)} className="text-amber-600 font-bold hover:underline transition">
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <ExpertAppointmentForm
                                visaContext="contact_page"
                                onSuccess={() => setIsSuccess(true)}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* 4. Trust & Legal Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1 space-y-4 text-center md:text-left">
                            <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
                                <ShieldCheck className="w-6 h-6 text-amber-500" />
                                {t('about_page.partnership_title')}
                            </h3>
                            <p className="text-slate-600 leading-relaxed uppercase tracking-widest text-[10px] font-black">
                                Professional Immigration Consultancy
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-amber-500 uppercase tracking-tighter">USA HQ</p>
                                    <p className="text-sm font-medium text-slate-800">16192 Coastal Highway, Lewes, DE 19958</p>
                                </div>
                                <div className="space-y-1 border-l border-slate-100 pl-6">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Bangkok Office</p>
                                    <p className="text-sm font-medium text-slate-800">Sukhumvit Rd, Khlong Toei, Bangkok</p>
                                </div>
                            </div>


                        </div>
                        <div className="w-full md:w-auto p-8 bg-slate-50 rounded-2xl text-center border border-dashed border-slate-200">
                            <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Company Status</p>
                            <p className="text-xl font-black text-slate-900">DigitGpt LLC</p>
                            <p className="text-xs text-slate-500 font-mono mt-2">{t('footer.tax_id')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactClientPage;
