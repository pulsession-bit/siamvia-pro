'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import { URLS, IMAGES } from '@/constants';
import { PageContainer, Card } from '@/components/ui/PageComponents';
import { VisaHero } from '@/components/visa/VisaHero';
import { ServiceCard } from '@/components/services/ServiceCard';
import { X, Info, Check, AlertTriangle } from 'lucide-react';

const ExpertAppointmentForm = dynamic(() => import('@/components/ExpertAppointmentForm'), {
    ssr: false,
    loading: () => <div className="p-8 text-center">Loading...</div>
});

const ServicesClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();
    const [showAppointment, setShowAppointment] = useState(false);

    const tiers = [
        {
            id: 'standard',
            name: t('services_page.tier_standard'),
            price: t('services_page.tier_standard_price'),
            description: t('services_page.tier_standard_desc'),
            features: [
                t('services_page.pack_feat1'),
                t('services_page.pack_feat2'),
                t('services_page.pack_feat3'),
                t('services_page.pack_feat4'),
                t('services_page.pack_feat5'),
            ],
        },
        {
            id: 'express',
            name: t('services_page.tier_express'),
            price: t('services_page.tier_express_price'),
            description: t('services_page.tier_express_desc'),
            recommended: true,
            features: [
                t('services_page.pack_feat1'),
                t('services_page.pack_feat2'),
                t('services_page.pack_feat3'),
                t('services_page.pack_feat4'),
                t('services_page.pack_feat5'),
            ],
        },
        {
            id: 'premium',
            name: t('services_page.tier_premium'),
            price: t('services_page.tier_premium_price'),
            description: t('services_page.tier_premium_desc'),
            features: [
                t('services_page.pack_feat1'),
                t('services_page.pack_feat2'),
                t('services_page.pack_feat3'),
                t('services_page.pack_feat4'),
                t('services_page.pack_feat5'),
            ],
        },
    ];

    const options = [
        { label: t('services_page.option_traduction'), price: t('services_page.option_traduction_price') },
        { label: t('services_page.option_legalisation'), price: t('services_page.option_legalisation_price') },
        { label: t('services_page.option_assurance'), price: t('services_page.option_assurance_price'), link: langPath('insurance') },
        { label: t('services_page.option_rdv'), price: t('services_page.option_rdv_price') },
        { label: t('services_page.option_suivi'), price: t('services_page.option_suivi_price') },
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* 1. Hero Section */}
            <VisaHero
                badge="● NOS SOLUTIONS"
                title={t('services_page.hero_title')}
                subtitle={t('services_page.hero_subtitle')}
                description={t('services_page.hero_tagline')}
                tagline={t('services_page.hero_tagline_secondary')}
                backgroundImage={IMAGES.OFFICE}
            />

            {/* 2. Packs Pricing Grid */}
            <PageContainer negativeMargin>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {tiers.map(tier => (
                        <ServiceCard
                            key={tier.id}
                            tier={tier}
                            recommendedLabel={t('services_page.recommended')}
                            ctaLabel={t('services_page.btn_start')}
                            ctaHref={URLS.SCORING_ENGINE}
                        />
                    ))}
                </div>

                {/* 3. Ce qui est inclus */}
                <div className="mb-12">
                    <h2 className="text-2xl font-black text-slate-900 mb-6">{t('services_page.included_title')}</h2>
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <li key={i} className="flex items-start">
                                    <div className="bg-amber-100 rounded-full p-1 mr-3 mt-0.5 shrink-0">
                                        <Check className="h-4 w-4 text-amber-600" />
                                    </div>
                                    <span className="text-slate-700 leading-relaxed">{t(`services_page.pack_feat${i}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 4. Frais administratifs */}
                <div className="mb-12">
                    <h2 className="text-2xl font-black text-slate-900 mb-6">{t('services_page.admin_fees_title')}</h2>
                    <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                        <div className="flex items-start mb-4">
                            <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
                            <p className="text-sm font-semibold text-blue-800">{t('services_page.admin_fees_subtitle')}</p>
                        </div>
                        <ul className="space-y-3 ml-8">
                            <li className="text-slate-700 text-sm leading-relaxed">{t('services_page.admin_fees_visa')}</li>
                            <li className="text-slate-700 text-sm leading-relaxed">{t('services_page.admin_fees_center')}</li>
                        </ul>
                    </div>
                </div>

                {/* 5. Options complémentaires */}
                <div className="mb-12">
                    <h2 className="text-2xl font-black text-slate-900 mb-6">{t('services_page.options_title')}</h2>
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <tbody>
                                    {options.map((opt, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                            <td className="px-6 py-4 text-slate-700 font-medium">
                                                {opt.link ? (
                                                    <a href={opt.link} className="text-amber-600 hover:text-amber-700 underline underline-offset-2">{opt.label}</a>
                                                ) : opt.label}
                                            </td>
                                            <td className="px-6 py-4 text-right text-amber-600 font-bold whitespace-nowrap">{opt.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* 6. Conditions */}
                <div className="mb-16">
                    <h2 className="text-2xl font-black text-slate-900 mb-6">{t('services_page.conditions_title')}</h2>
                    <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 shrink-0" />
                                <span className="text-slate-700 text-sm leading-relaxed">{t('services_page.condition1')}</span>
                            </li>
                            <li className="flex items-start">
                                <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 shrink-0" />
                                <span className="text-slate-700 text-sm leading-relaxed">{t('services_page.condition2')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 7. Insurance & Custom Support */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card variant="white" className="p-10 border-slate-100 shadow-xl rounded-[2rem]">
                        <h3 className="text-xl font-black text-slate-900 mb-4">
                            {t('services_page.insurance_title')}
                        </h3>
                        <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                            {t('services_page.insurance_desc')}
                        </p>
                        <a
                            href={langPath('insurance')}
                            className="inline-flex items-center text-amber-600 font-black hover:text-amber-700 transition"
                        >
                            <span className="uppercase tracking-widest text-xs mr-2">{t('services_page.insurance_link')}</span>
                            <span className="text-lg">→</span>
                        </a>
                    </Card>

                    <Card variant="dark" className="p-10 shadow-xl rounded-[2rem] bg-slate-900 border-none">
                        <h3 className="text-xl font-black text-white mb-4">
                            {t('services_page.custom_support_title')}
                        </h3>
                        <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                            {t('services_page.custom_support_desc')}
                        </p>
                        <button
                            onClick={() => setShowAppointment(true)}
                            className="bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px]"
                        >
                            {t('services_page.custom_support_btn')}
                        </button>
                    </Card>
                </div>
            </PageContainer>

            {/* Appointment Modal Overlay */}
            {showAppointment && (
                <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999]">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setShowAppointment(false)}></div>
                    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-xl relative animate-in zoom-in-95 fade-in duration-200 z-[10000] max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setShowAppointment(false)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 transition-colors z-[110]"
                        >
                            <X size={24} />
                        </button>
                        <ExpertAppointmentForm
                            visaContext="services_page"
                            onSuccess={() => { }}
                            onCancel={() => setShowAppointment(false)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesClientPage;
