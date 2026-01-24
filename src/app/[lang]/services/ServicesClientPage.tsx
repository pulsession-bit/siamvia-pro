'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { URLS, IMAGES } from '@/constants';
import { PageContainer, Card } from '@/components/ui/PageComponents';
import { VisaHero } from '@/components/visa/VisaHero';
import { ServiceCard } from '@/components/services/ServiceCard';

const ServicesClientPage: React.FC = () => {
    const { t } = useLanguage();

    const tiers = [
        {
            id: 'audit',
            name: t('services_page.tier_audit'),
            description: t('services_page.tier_audit_desc'),
            features: [
                t('services_page.audit_feat1'),
                t('services_page.audit_feat2'),
                t('services_page.audit_feat3'),
                t('services_page.audit_feat4'),
                t('services_page.audit_feat5'),
            ],
        },
        {
            id: 'serenite',
            name: t('services_page.tier_serenity'),
            description: t('services_page.tier_serenity_desc'),
            recommended: true,
            features: [
                t('services_page.serenity_feat1'),
                t('services_page.serenity_feat2'),
                t('services_page.serenity_feat3'),
                t('services_page.serenity_feat4'),
                t('services_page.serenity_feat5'),
                t('services_page.serenity_feat6'),
            ],
        },
        {
            id: 'vip',
            name: t('services_page.tier_vip'),
            description: t('services_page.tier_vip_desc'),
            features: [
                t('services_page.vip_feat1'),
                t('services_page.vip_feat2'),
                t('services_page.vip_feat3'),
                t('services_page.vip_feat4'),
                t('services_page.vip_feat5'),
                t('services_page.vip_feat6'),
            ],
        },
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* 1. Hero Section - Unified with Visa pages */}
            <VisaHero
                badge="● NOS SOLUTIONS"
                title={t('services_page.hero_title')}
                subtitle={t('services_page.hero_subtitle')}
                description={t('services_page.hero_tagline')}
                tagline={t('services_page.hero_tagline_secondary')}
                backgroundImage={IMAGES.OFFICE}
            />

            {/* 2. Services Grid */}
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

                {/* 3. Insurance & Extra Info Section */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card variant="white" className="p-10 border-slate-100 shadow-xl rounded-[2rem]">
                        <h3 className="text-xl font-black text-slate-900 mb-4">
                            {t('services_page.insurance_title')}
                        </h3>
                        <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                            {t('services_page.insurance_desc')}
                        </p>
                        <a
                            href="#"
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
                            onClick={() => window.location.href = '#'}
                            className="bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px]"
                        >
                            {t('services_page.custom_support_btn')}
                        </button>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

export default ServicesClientPage;
