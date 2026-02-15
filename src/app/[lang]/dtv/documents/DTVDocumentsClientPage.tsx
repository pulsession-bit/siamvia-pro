'use client';

import React from 'react';
import { FileText, CheckCircle, Briefcase, Palette, User, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import Link from 'next/link';

const DTVDocumentsClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();

    const p = (key: string) => t(`dtv_documents_page.${key}`);
    const pArr = (key: string): any[] => {
        const val = t(`dtv_documents_page.${key}`);
        return Array.isArray(val) ? val : [];
    };

    const profileIcons: Record<string, React.ReactNode> = {
        nomad: <Briefcase className="w-6 h-6 text-blue-600" />,
        freelance: <User className="w-6 h-6 text-purple-600" />,
        retiree: <CheckCircle className="w-6 h-6 text-green-600" />,
        artist: <Palette className="w-6 h-6 text-pink-600" />,
    };

    const profiles = [
        { key: 'nomad', color: 'blue' },
        { key: 'freelance', color: 'purple' },
        { key: 'retiree', color: 'green' },
        { key: 'artist', color: 'pink' },
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero compact */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6" aria-label="Breadcrumb">
                        <Link href={langPath('home')} className="hover:text-white transition">{p('breadcrumb_home')}</Link>
                        <span>/</span>
                        <Link href={langPath('dtv')} className="hover:text-white transition">{p('breadcrumb_dtv')}</Link>
                        <span>/</span>
                        <span className="text-white font-medium">{p('breadcrumb_current')}</span>
                    </nav>

                    <span className="inline-block bg-blue-700/50 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        {p('hero_badge')}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{p('hero_title')}</h1>
                    <p className="text-lg text-blue-100 max-w-2xl">{p('hero_subtitle')}</p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Introduction */}
                <p className="text-gray-700 text-lg leading-relaxed mb-12">{p('intro')}</p>

                {/* Documents communs */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <FileText className="w-7 h-7 text-blue-600" />
                        {p('common_title')}
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
                        {pArr('common_docs').map((item: any, i: number) => (
                            <div key={i} className="p-5 flex items-start gap-4">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <dt className="font-semibold text-gray-900">{item.doc}</dt>
                                    <dd className="text-gray-600 text-sm mt-1">{item.detail}</dd>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Documents par profil */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{p('profiles_title')}</h2>
                    <div className="grid gap-8">
                        {profiles.map(({ key, color }) => (
                            <div key={key} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className={`bg-${color}-50 px-6 py-4 border-b border-${color}-100 flex items-center gap-3`}>
                                    {profileIcons[key]}
                                    <h3 className="text-lg font-bold text-gray-900">
                                        {p(`profile_${key}_title`)}
                                    </h3>
                                </div>
                                <div className="divide-y divide-gray-100">
                                    {pArr(`profile_${key}_docs`).map((item: any, i: number) => (
                                        <div key={i} className="p-5 flex items-start gap-4">
                                            <CheckCircle className={`w-5 h-5 text-${color}-500 mt-0.5 flex-shrink-0`} />
                                            <div>
                                                <dt className="font-semibold text-gray-900">{item.doc}</dt>
                                                <dd className="text-gray-600 text-sm mt-1">{item.detail}</dd>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Conseils */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <AlertTriangle className="w-7 h-7 text-amber-500" />
                        {p('tips_title')}
                    </h2>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                        <ul className="space-y-3">
                            {pArr('tips').map((tip: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-gray-800">
                                    <span className="text-amber-500 font-bold mt-0.5">{'•'}</span>
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white mb-12">
                    <h2 className="text-2xl font-bold mb-3">{p('cta_title')}</h2>
                    <p className="text-blue-100 mb-6 max-w-lg mx-auto">{p('cta_text')}</p>
                    <Link
                        href={langPath('search')}
                        className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition shadow-lg"
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
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Link href={langPath('dtv-erreurs')} className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition">
                            <span className="text-blue-600 font-semibold">{p('related_erreurs')}</span>
                        </Link>
                        <Link href={langPath('dtv-comparatif')} className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition">
                            <span className="text-blue-600 font-semibold">{p('related_comparatif')}</span>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DTVDocumentsClientPage;
