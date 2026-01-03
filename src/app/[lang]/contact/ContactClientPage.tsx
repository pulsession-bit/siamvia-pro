'use client';

import React, { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
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
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('contact_page.form_title')}</h2>

                                {['name', 'email', 'subject'].map((field) => (
                                    <div key={field}>
                                        <label className="block text-sm font-medium text-slate-700 mb-1 uppercase tracking-wider text-[10px] font-black">
                                            {t(`contact_page.${field}_label`)}
                                        </label>
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            name={field}
                                            required
                                            value={(formData as any)[field]}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all"
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1 uppercase tracking-wider text-[10px] font-black">
                                        {t('contact_page.message_label')}
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-amber-500 text-slate-900 py-4 rounded-xl font-bold shadow-xl shadow-amber-500/20 hover:bg-amber-400 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-95"
                                >
                                    {isSubmitting ? (
                                        <><Loader2 className="w-5 h-5 animate-spin mr-2" />{t('contact_page.btn_sending')}</>
                                    ) : (
                                        <><Send className="w-5 h-5 mr-2" />{t('contact_page.btn_send')}</>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* 3. Expert Appointment Component */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-20">
                <div className="bg-slate-900 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden">
                    <div className="bg-white rounded-[2.4rem] p-8 md:p-12">
                        <ExpertAppointmentForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactClientPage;
