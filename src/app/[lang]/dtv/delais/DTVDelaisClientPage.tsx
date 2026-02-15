'use client';

import React from 'react';
import { Clock, MapPin, AlertTriangle, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import Link from 'next/link';

const DTVDelaisClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();

    const p = (key: string) => t(`dtv_delais_page.${key}`);
    const pArr = (key: string): any[] => {
        const val = t(`dtv_delais_page.${key}`);
        return Array.isArray(val) ? val : [];
    };

    const steps = pArr('steps');
    const embassies = pArr('embassies');
    const seasons = pArr('seasons');
    const tips = pArr('tips');

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero compact */}
            <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-emerald-200 mb-6" aria-label="Breadcrumb">
                        <Link href={langPath('home')} className="hover:text-white transition">{p('breadcrumb_home')}</Link>
                        <span>/</span>
                        <Link href={langPath('dtv')} className="hover:text-white transition">{p('breadcrumb_dtv')}</Link>
                        <span>/</span>
                        <span className="text-white font-medium">{p('breadcrumb_current')}</span>
                    </nav>

                    <span className="inline-block bg-emerald-700/50 text-emerald-100 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        {p('hero_badge')}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{p('hero_title')}</h1>
                    <p className="text-lg text-emerald-100 max-w-2xl">{p('hero_subtitle')}</p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <p className="text-gray-700 text-lg leading-relaxed mb-12">{p('intro')}</p>

                {/* Timeline / Étapes */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Clock className="w-7 h-7 text-emerald-600" />
                        {p('timeline_title')}
                    </h2>
                    <div className="space-y-4">
                        {steps.map((step: any, i: number) => (
                            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-black text-lg flex items-center justify-center">
                                    {step.step}
                                </span>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="font-bold text-gray-900">{step.title}</h3>
                                        <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">{step.duration}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm">{step.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tableau des ambassades */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <MapPin className="w-7 h-7 text-blue-600" />
                        {p('embassies_title')}
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">{p('embassies_subtitle')}</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200 text-sm">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">{p('col_embassy')}</th>
                                    <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b">{p('col_rdv')}</th>
                                    <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b">{p('col_processing')}</th>
                                    <th className="text-center px-4 py-3 font-bold text-emerald-700 bg-emerald-50 border-b">{p('col_total')}</th>
                                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">{p('col_notes')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {embassies.map((emb: any, i: number) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 font-medium text-gray-900 border-b">{emb.name}</td>
                                        <td className="px-4 py-3 text-center text-gray-700 border-b">{emb.rdv}</td>
                                        <td className="px-4 py-3 text-center text-gray-700 border-b">{emb.processing}</td>
                                        <td className="px-4 py-3 text-center font-semibold text-emerald-700 bg-emerald-50/50 border-b">{emb.total}</td>
                                        <td className="px-4 py-3 text-gray-500 text-xs border-b">{emb.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Délai total */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <TrendingUp className="w-7 h-7 text-emerald-600" />
                        {p('total_title')}
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                            <p className="text-3xl font-black text-green-600">{p('total_min')}</p>
                            <p className="text-sm text-gray-600 mt-2">{p('total_min_label')}</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                            <p className="text-3xl font-black text-blue-600">{p('total_avg')}</p>
                            <p className="text-sm text-gray-600 mt-2">{p('total_avg_label')}</p>
                        </div>
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
                            <p className="text-3xl font-black text-orange-600">{p('total_max')}</p>
                            <p className="text-sm text-gray-600 mt-2">{p('total_max_label')}</p>
                        </div>
                    </div>
                </section>

                {/* Périodes à éviter */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <AlertTriangle className="w-7 h-7 text-amber-500" />
                        {p('seasons_title')}
                    </h2>
                    <div className="space-y-3">
                        {seasons.map((season: any, i: number) => (
                            <div key={i} className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                                <span className="font-bold text-amber-700 whitespace-nowrap">{season.period}</span>
                                <span className="text-gray-700 text-sm">{season.impact}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Conseils */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{p('tips_title')}</h2>
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <ul className="space-y-3">
                            {tips.map((tip: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-gray-800">
                                    <span className="text-emerald-500 font-bold mt-0.5">{'+'}</span>
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white mb-12">
                    <h2 className="text-2xl font-bold mb-3">{p('cta_title')}</h2>
                    <p className="text-emerald-100 mb-6 max-w-lg mx-auto">{p('cta_text')}</p>
                    <Link
                        href={langPath('search')}
                        className="inline-block bg-white text-emerald-700 font-semibold px-8 py-3 rounded-full hover:bg-emerald-50 transition shadow-lg"
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
                <section className="pt-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{p('related_title')}</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <Link href={langPath('dtv-documents')} className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition">
                            <span className="text-blue-600 font-semibold">{p('related_documents')}</span>
                        </Link>
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

export default DTVDelaisClientPage;
