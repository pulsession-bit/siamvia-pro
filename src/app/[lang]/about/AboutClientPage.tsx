
'use client';

import React from 'react';
import { ShieldCheck, Target, Users, Landmark, Linkedin, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutClientPage: React.FC = () => {
    const { t } = useLanguage();
    const linkedinUrl = "https://www.linkedin.com/in/raphael-buresi-4a9562a/";

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative bg-slate-900 pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
                        alt="Bangkok Sky"
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full mb-6">
                        <ShieldCheck className="h-4 w-4 text-amber-500" />
                        <span className="text-amber-500 text-sm font-bold tracking-wide uppercase">Siam Visa Pro</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        {t('about_page.hero_title')}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {t('about_page.hero_subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-30">
                {/* Mission Section */}
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-16 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex p-3 bg-amber-100 rounded-2xl">
                                <Target className="h-8 w-8 text-amber-600" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                {t('about_page.mission_title')}
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>{t('about_page.mission_text1')}</p>
                                <p>{t('about_page.mission_text2')}</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-amber-500 rounded-3xl rotate-3 opacity-10" />
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                                alt="Team Working"
                                className="relative z-10 rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-12 overflow-hidden relative">
                        <div className="relative z-10">
                            <div className="inline-flex p-3 bg-blue-100 rounded-2xl mb-6">
                                <Users className="h-8 w-8 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('about_page.team_title')}</h2>
                            <p className="text-lg text-slate-600 mb-12 max-w-xl leading-relaxed">
                                {t('about_page.team_description')}
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 transition-colors group">
                                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-amber-500/20">
                                    RB
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-slate-900">{t('about_page.founder_name')}</h3>
                                    <p className="text-amber-600 font-bold text-sm mb-2">{t('about_page.founder_role')}</p>
                                    <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                                        {t('about_page.founder_bio')}
                                    </p>
                                </div>
                                <a
                                    href={linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md hover:bg-slate-900 hover:text-white transition-all text-slate-400"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                            <Landmark className="h-32 w-32" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-6">{t('about_page.partnership_title')}</h2>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                {t('about_page.partnership_text')}
                            </p>
                        </div>
                        <a
                            href="https://digitgpt.cloud"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 flex items-center justify-between bg-white/10 hover:bg-white/20 px-6 py-4 rounded-2xl border border-white/10 transition-colors"
                        >
                            <span className="font-bold">DigitGpt.cloud</span>
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutClientPage;
