'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import { ShieldCheck, Calendar, FileText, Globe, Map } from 'lucide-react';

export default function SitemapClientPage() {
    const { t } = useLanguage();
    const langPath = useLangPath();

    const mainVisas = [
        { title: t('nav.dtv'), href: langPath('dtv'), icon: <Globe className="w-5 h-5" />, key: 'dtv' },
        { title: t('visas.elite_title'), href: langPath('elite-visa'), icon: <ShieldCheck className="w-5 h-5" />, key: 'elite' },
        { title: t('nav.ltr'), href: langPath('ltr'), icon: <ShieldCheck className="w-5 h-5" />, key: 'ltr' },
        { title: t('nav.tourist'), href: langPath('tourist-visa'), icon: <Calendar className="w-5 h-5" />, key: 'tourist' },
        { title: t('nav.retirement'), href: langPath('retirement-visa'), icon: <FileText className="w-5 h-5" />, key: 'retirement' },
        // ... (removed business as it's not in SLUG_MAP or translations based on previous turns)
    ];

    const otherVisas = [
        { title: t('nav.exemption'), href: langPath('exemption-visa'), key: 'exemption' },
        { title: t('nav.student'), href: langPath('student-visa'), key: 'student' },
        { title: t('nav.family'), href: langPath('family-visa'), key: 'family' },
        { title: t('nav.smart'), href: langPath('smart-visa'), key: 'smart' },
        { title: t('nav.volunteer'), href: langPath('volunteer-visa'), key: 'volunteer' },
        { title: t('nav.medical'), href: langPath('medical-visa'), key: 'medical' },
        { title: t('nav.religious'), href: langPath('religious-visa'), key: 'religious' },
        { title: t('nav.media'), href: langPath('media-visa'), key: 'media' },
        { title: t('nav.official'), href: langPath('official-visa'), key: 'official' },
        { title: t('nav.scientific'), href: langPath('scientific-visa'), key: 'scientific' },
    ];

    const tools = [
        { title: t('nav.home'), href: langPath(''), icon: <ShieldCheck className="w-5 h-5" /> },
        { title: t('nav.blog'), href: langPath('blog'), icon: <FileText className="w-5 h-5" /> },
        { title: t('nav.search'), href: langPath('search'), icon: <Map className="w-5 h-5" /> },
        { title: t('nav.services'), href: langPath('services'), icon: <Globe className="w-5 h-5" /> },
        { title: t('nav.faq'), href: langPath('faq'), icon: <FileText className="w-5 h-5" /> },
        { title: t('nav.contact'), href: langPath('contact'), icon: <Map className="w-5 h-5" /> },
        { title: t('footer.legal'), href: langPath('terms'), icon: <FileText className="w-5 h-5" /> },
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-black text-slate-900 sm:text-5xl uppercase tracking-tight mb-4">
                        {t('footer.sitemap')}
                    </h1>
                    <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 font-medium">
                        {t('nav.home')} &rsaquo; {t('footer.sitemap')}
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Main Visas section */}
                    <section>
                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm">1</span>
                            Visas Principaux & Résidence
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mainVisas.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col"
                                >
                                    <div className="mb-6 w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                                        {link.icon}
                                    </div>
                                    <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                                        {link.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Other Visas categories */}
                    <section>
                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm">2</span>
                            Autres Catégories de Visas
                        </h2>
                        <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                                {otherVisas.map((link, idx) => (
                                    <Link
                                        key={idx}
                                        href={link.href}
                                        className="flex items-center gap-3 text-slate-600 hover:text-amber-600 font-bold py-2 transition-colors border-b border-slate-50 hover:border-amber-200"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Tools section */}
                    <section>
                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm">3</span>
                            Outils & Informations
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {tools.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="group p-6 bg-slate-900 rounded-2xl text-white hover:bg-white hover:text-slate-900 border border-slate-900 transition-all text-center flex flex-col items-center gap-3"
                                >
                                    <div className="text-amber-400 group-hover:text-amber-600">
                                        {link.icon}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest">{link.title}</span>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
