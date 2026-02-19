'use client';

import React from 'react';
import { Scale, ThumbsUp, ThumbsDown, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import Link from 'next/link';

const DTVComparatifClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();

    const p = (key: string) => t(`dtv_comparatif_page.${key}`);
    const pArr = (key: string): any[] => {
        const val = t(`dtv_comparatif_page.${key}`);
        return Array.isArray(val) ? val : [];
    };

    const rows = pArr('rows');
    const recommendations = pArr('recommendations');
    const advantages = pArr('dtv_advantages');
    const limits = pArr('dtv_limits');

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero compact */}
            <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-indigo-200 mb-6" aria-label="Breadcrumb">
                        <Link href={langPath('home')} className="hover:text-white transition">{p('breadcrumb_home')}</Link>
                        <span>/</span>
                        <Link href={langPath('dtv')} className="hover:text-white transition">{p('breadcrumb_dtv')}</Link>
                        <span>/</span>
                        <span className="text-white font-medium">{p('breadcrumb_current')}</span>
                    </nav>

                    <span className="inline-block bg-indigo-700/50 text-indigo-100 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        {p('hero_badge')}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{p('hero_title')}</h1>
                    <p className="text-lg text-indigo-100 max-w-2xl">{p('hero_subtitle')}</p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Introduction */}
                <p className="text-gray-700 text-lg leading-relaxed mb-12">{p('intro')}</p>

                {/* Tableau comparatif */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Scale className="w-7 h-7 text-indigo-600" />
                        {p('table_title')}
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200 text-sm">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">{p('col_criteria')}</th>
                                    <th className="text-center px-4 py-3 font-bold text-blue-700 bg-blue-50 border-b">{p('col_dtv')}</th>
                                    <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b">{p('col_tourist')}</th>
                                    <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b">{p('col_ltr')}</th>
                                    <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b">{p('col_elite')}</th>
                                    <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b">{p('col_ed')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row: any, i: number) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 border-b">{row.criteria}</td>
                                        <td className="px-4 py-3 text-center font-semibold text-blue-700 bg-blue-50/50 border-b">{row.dtv}</td>
                                        <td className="px-4 py-3 text-center text-gray-700 border-b">{row.tourist}</td>
                                        <td className="px-4 py-3 text-center text-gray-700 border-b">{row.ltr}</td>
                                        <td className="px-4 py-3 text-center text-gray-700 border-b">{row.elite}</td>
                                        <td className="px-4 py-3 text-center text-gray-700 border-b">{row.ed}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Recommandations par profil */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Lightbulb className="w-7 h-7 text-amber-500" />
                        {p('reco_title')}
                    </h2>
                    <div className="space-y-4">
                        {recommendations.map((reco: any, i: number) => (
                            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                                <div className="flex items-start gap-4">
                                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                                        {reco.visa}
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{reco.profile}</h3>
                                        <p className="text-gray-600 text-sm mt-1">{reco.reason}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Avantages & Limites */}
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                    <section className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h2 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                            <ThumbsUp className="w-5 h-5" />
                            {p('dtv_advantages_title')}
                        </h2>
                        <ul className="space-y-2">
                            {advantages.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-green-800 text-sm">
                                    <span className="text-green-500 mt-0.5">{'+'}</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                            <ThumbsDown className="w-5 h-5" />
                            {p('dtv_limits_title')}
                        </h2>
                        <ul className="space-y-2">
                            {limits.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-red-800 text-sm">
                                    <span className="text-red-500 mt-0.5">{'-'}</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* CTA */}
                <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white mb-12">
                    <h2 className="text-2xl font-bold mb-3">{p('cta_title')}</h2>
                    <p className="text-indigo-100 mb-6 max-w-lg mx-auto">{p('cta_text')}</p>
                    <Link
                        href={langPath('search')}
                        className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition shadow-lg"
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
                        <Link href={langPath('dtv/erreurs')} className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition">
                            <span className="text-blue-600 font-semibold">{p('related_erreurs')}</span>
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

export default DTVComparatifClientPage;
