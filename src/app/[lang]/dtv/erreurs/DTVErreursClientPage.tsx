'use client';

import React from 'react';
import { AlertTriangle, AlertCircle, Info, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import Link from 'next/link';

const DTVErreursClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();

    const p = (key: string) => t(`dtv_erreurs_page.${key}`);
    const pArr = (key: string): any[] => {
        const val = t(`dtv_erreurs_page.${key}`);
        return Array.isArray(val) ? val : [];
    };

    const severityConfig: Record<string, { icon: React.ReactNode; bg: string; border: string; badge: string; text: string }> = {
        critical: {
            icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
            bg: 'bg-red-50',
            border: 'border-red-200',
            badge: 'bg-red-100 text-red-800',
            text: p('severity_critical'),
        },
        high: {
            icon: <AlertCircle className="w-6 h-6 text-orange-600" />,
            bg: 'bg-orange-50',
            border: 'border-orange-200',
            badge: 'bg-orange-100 text-orange-800',
            text: p('severity_high'),
        },
        medium: {
            icon: <Info className="w-6 h-6 text-yellow-600" />,
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            badge: 'bg-yellow-100 text-yellow-800',
            text: p('severity_medium'),
        },
    };

    const errors = pArr('errors');

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero compact */}
            <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-red-200 mb-6" aria-label="Breadcrumb">
                        <Link href={langPath('home')} className="hover:text-white transition">{p('breadcrumb_home')}</Link>
                        <span>/</span>
                        <Link href={langPath('dtv')} className="hover:text-white transition">{p('breadcrumb_dtv')}</Link>
                        <span>/</span>
                        <span className="text-white font-medium">{p('breadcrumb_current')}</span>
                    </nav>

                    <span className="inline-block bg-red-700/50 text-red-100 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        {p('hero_badge')}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{p('hero_title')}</h1>
                    <p className="text-lg text-red-100 max-w-2xl">{p('hero_subtitle')}</p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Introduction */}
                <p className="text-gray-700 text-lg leading-relaxed mb-12">{p('intro')}</p>

                {/* Errors list */}
                <section className="mb-12 space-y-6">
                    {errors.map((error: any, i: number) => {
                        const config = severityConfig[error.severity] || severityConfig.medium;
                        return (
                            <article key={i} className={`rounded-xl border ${config.border} overflow-hidden`}>
                                <div className={`${config.bg} px-6 py-4 flex items-center gap-4`}>
                                    <span className="text-2xl font-black text-gray-400">#{error.rank}</span>
                                    {config.icon}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900">{error.title}</h3>
                                    </div>
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${config.badge}`}>
                                        {config.text}
                                    </span>
                                </div>
                                <div className="bg-white px-6 py-5 space-y-3">
                                    <p className="text-gray-700">{error.description}</p>
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <p className="text-green-800 text-sm">
                                            <span className="font-semibold">Solution :</span> {error.solution}
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-500 italic">{error.refusal_rate}</p>
                                </div>
                            </article>
                        );
                    })}
                </section>

                {/* Statistiques */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <BarChart3 className="w-7 h-7 text-blue-600" />
                        {p('stats_title')}
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                            <p className="text-3xl font-black text-red-600">{p('stats_total_value')}</p>
                            <p className="text-sm text-gray-600 mt-2">{p('stats_total')}</p>
                        </div>
                        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                            <p className="text-3xl font-black text-green-600">{p('stats_avoidable_value')}</p>
                            <p className="text-sm text-gray-600 mt-2">{p('stats_avoidable')}</p>
                        </div>
                        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                            <p className="text-3xl font-black text-blue-600">{p('stats_resubmit_value')}</p>
                            <p className="text-sm text-gray-600 mt-2">{p('stats_resubmit')}</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white mb-12">
                    <h2 className="text-2xl font-bold mb-3">{p('cta_title')}</h2>
                    <p className="text-red-100 mb-6 max-w-lg mx-auto">{p('cta_text')}</p>
                    <Link
                        href={langPath('search')}
                        className="inline-block bg-white text-red-700 font-semibold px-8 py-3 rounded-full hover:bg-red-50 transition shadow-lg"
                    >
                        {p('cta_button')}
                    </Link>
                </section>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                    <Link href={langPath('dtv')} className="text-blue-600 hover:text-blue-800 font-medium transition">
                        {p('back_to_dtv')}
                    </Link>
                </div>

                {/* Articles liés */}
                <section className="border-t border-gray-200 pt-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{p('related_title')}</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <Link href={langPath('dtv/documents')} className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition">
                            <span className="text-blue-600 font-semibold">{p('related_documents')}</span>
                        </Link>
                        <Link href={langPath('dtv/comparatif')} className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition">
                            <span className="text-blue-600 font-semibold">{p('related_comparatif')}</span>
                        </Link>
                        <Link href={langPath('dtv/delais')} className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition">
                            <span className="text-blue-600 font-semibold">{p('related_delais')}</span>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DTVErreursClientPage;
