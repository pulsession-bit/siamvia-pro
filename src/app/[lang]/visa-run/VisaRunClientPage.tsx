'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    AlertTriangle,
    XCircle,
    ShieldCheck,
    ArrowRight,
    Plane,
    AlertOctagon,
    Ban
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';

const VisaRunClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Hero Section - Warning Style */}
            <div className="relative bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-40 grayscale">
                    <Image
                        src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80"
                        alt="Airport Stress"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-red-950/40 to-slate-900/30"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/50 text-red-200 text-xs font-bold tracking-wider mb-8 shadow-lg backdrop-blur-sm animate-pulse">
                        <AlertOctagon className="w-4 h-4" />
                        <span>IMMIGRATION UPDATE 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {t('visa_run_page.hero.title')} <br />
                        <span className="text-red-500 bg-white/10 px-2 rounded-lg decoration-wavy underline decoration-red-600">{t('visa_run_page.hero.highlight')}</span>
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                        {t('visa_run_page.hero.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href={langPath('search')}
                            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-8 rounded-xl shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <ShieldCheck className="w-5 h-5" />
                            {t('visa_run_page.hero.cta')}
                        </Link>
                    </div>
                </div>
            </div>

            {/* The Dangers Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                            <Ban className="w-10 h-10 text-red-600" />
                            {t('visa_run_page.dangers.title')}
                        </h2>
                        <div className="h-1 w-24 bg-red-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Risk 1 */}
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-red-200 transition-colors group">
                            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                                <XCircle className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700 transition-colors">
                                {t('visa_run_page.dangers.risk1_title')}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t('visa_run_page.dangers.risk1_desc')}
                            </p>
                        </div>

                        {/* Risk 2 */}
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-red-200 transition-colors group">
                            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                                <AlertTriangle className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700 transition-colors">
                                {t('visa_run_page.dangers.risk2_title')}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t('visa_run_page.dangers.risk2_desc')}
                            </p>
                        </div>

                        {/* Risk 3 */}
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-red-200 transition-colors group">
                            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                                <Plane className="w-8 h-8 text-red-600 rotate-45" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700 transition-colors">
                                {t('visa_run_page.dangers.risk3_title')}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t('visa_run_page.dangers.risk3_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solutions Section */}
            <section className="py-20 bg-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-2 block">Legitimate Pathways</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            {t('visa_run_page.solutions.title')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* DTV Visa */}
                        <Link href={langPath('dtv')} className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-200 hover:border-amber-400 h-full flex flex-col">
                                <div className="text-amber-500 mb-4">
                                    <ShieldCheck className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                                    {t('visa_run_page.solutions.dtv')}
                                </h3>
                                <p className="text-slate-600 mb-6 flex-grow">
                                    {t('visa_run_page.solutions.dtv_desc')}
                                </p>
                                <div className="flex items-center text-amber-600 font-medium">
                                    Discover DTV <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        {/* Elite Visa */}
                        <Link href={langPath('search')} className="group">
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-700 hover:border-amber-400 h-full flex flex-col text-white">
                                <div className="text-amber-400 mb-4">
                                    <ShieldCheck className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                    {t('visa_run_page.solutions.elite')}
                                </h3>
                                <p className="text-slate-300 mb-6 flex-grow">
                                    {t('visa_run_page.solutions.elite_desc')}
                                </p>
                                <div className="flex items-center text-amber-400 font-medium">
                                    Compare Elites <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        {/* LTR Visa */}
                        <Link href={langPath('ltr')} className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-200 hover:border-blue-500 h-full flex flex-col">
                                <div className="text-blue-600 mb-4">
                                    <ShieldCheck className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                                    {t('visa_run_page.solutions.ltr')}
                                </h3>
                                <p className="text-slate-600 mb-6 flex-grow">
                                    {t('visa_run_page.solutions.ltr_desc')}
                                </p>
                                <div className="flex items-center text-blue-600 font-medium">
                                    Auditez votre profil <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisaRunClientPage;
