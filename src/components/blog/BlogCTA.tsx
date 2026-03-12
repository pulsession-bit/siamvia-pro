'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export const BlogCTA: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();

    return (
        <div className="my-16 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 border border-amber-500/30">
                        <Sparkles className="h-3 w-3" />
                        <span>Siam Visa Pro Expertise</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                        {t('home_page.appointment_title') || "Votre projet de visa,"} <br className="hidden md:block"/>
                        <span className="text-amber-500">{t('home_page.title_highlight') || "100% sécurisé."}</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                        {t('home_page.appointment_subtitle') || "Évitez les refus administratifs. Nos experts et notre IA analysent votre éligibilité en temps réel."}
                    </p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left max-w-lg mx-auto lg:mx-0">
                        {[
                            t('dtv_page.high_value.item1') || "Dossier DTV optimisé",
                            t('elite_page.high_value.item3') || "Accompagnement VIP",
                            t('nav.eligibility_check') || "Analyse d'éligibilité IA",
                            t('footer.support') || "Soutien 7j/7"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-300 font-medium">
                                <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="flex flex-col gap-4 w-full md:w-auto">
                    <a 
                        href={langPath('services')}
                        className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-10 py-5 rounded-2xl font-black text-xl shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3 group"
                    >
                        {t('nav.see_services')}
                        <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                        href="https://audit.siamvisapro.com/"
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg backdrop-blur-sm transition-all text-center"
                    >
                        {t('nav.free_audit')}
                    </a>
                </div>
            </div>
        </div>
    );
};
