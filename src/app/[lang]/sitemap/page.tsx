'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import { SLUG_MAP, PageKey } from '@/utils/slugs';
import { ShieldCheck, Calendar, FileText, Globe, Map } from 'lucide-react';

export default function SitemapPage() {
    const { t } = useLanguage();
    const langPath = useLangPath();

    const links: { title: string; href: string; icon: React.ReactNode; desc: string }[] = [
        { title: t('nav.home'), href: langPath(''), icon: <ShieldCheck className="w-5 h-5" />, desc: t('meta.description') },
        { title: t('nav.dtv'), href: langPath('dtv'), icon: <Globe className="w-5 h-5" />, desc: t('dtv_page.hero_subtitle') },
        { title: t('visas.elite_title'), href: langPath('elite-visa'), icon: <ShieldCheck className="w-5 h-5" />, desc: t('elite_page.hero_subtitle') },
        { title: t('nav.ltr'), href: langPath('ltr'), icon: <ShieldCheck className="w-5 h-5" />, desc: t('ltr_page.subtitle') },
        { title: t('nav.tourist'), href: langPath('tourist-visa'), icon: <Calendar className="w-5 h-5" />, desc: t('tourist_visa_page.hero_subtitle') },
        { title: t('nav.retirement'), href: langPath('retirement-visa'), icon: <FileText className="w-5 h-5" />, desc: t('retirement_visa_page.hero_subtitle') },
        { title: t('nav.services'), href: langPath('services'), icon: <Globe className="w-5 h-5" />, desc: t('services_page.hero_subtitle') },
        { title: t('nav.faq'), href: langPath('faq'), icon: <FileText className="w-5 h-5" />, desc: t('faq_page.subtitle') },
        { title: t('nav.contact'), href: langPath('contact'), icon: <Map className="w-5 h-5" />, desc: t('contact_page.subtitle') },
        { title: t('footer.legal'), href: langPath('terms'), icon: <FileText className="w-5 h-5" />, desc: t('terms_page.title') },
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        {t('footer.sitemap')}
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">
                        {t('nav.home')} &rsaquo; {t('footer.sitemap')}
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-slate-200">
                        {links.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="group p-6 hover:bg-slate-50 transition-colors flex items-start space-x-4 border-b border-slate-100 last:border-b-0 md:border-b-0"
                            >
                                <div className="flex-shrink-0 p-3 bg-amber-50 text-amber-600 rounded-lg group-hover:bg-amber-100 transition-colors">
                                    {link.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-slate-900 group-hover:text-amber-600 transition-colors">
                                        {link.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                                        {link.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
