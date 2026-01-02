'use client';

import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { URLS, IMAGES } from '@/constants';
import { HeroSection, PageContainer, Card } from '@/components/ui/PageComponents';

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
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                backgroundImage={IMAGES.OFFICE}
                imageAlt="Office"
                title={t('services_page.hero_title')}
                subtitle={
                    <>
                        {t('services_page.hero_subtitle')} <br />
                        {t('services_page.hero_tagline')}
                    </>
                }
            />

            {/* Services Grid */}
            <PageContainer negativeMargin>
                <div className="grid md:grid-cols-3 gap-8">
                    {tiers.map(tier => (
                        <ServiceCard key={tier.id} tier={tier} />
                    ))}
                </div>

                {/* Insurance Section */}
                <Card variant="white" className="mt-16 text-center border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {t('services_page.insurance_title')}
                    </h3>
                    <p className="text-slate-600 mb-6">{t('services_page.insurance_desc')}</p>
                    <a
                        href="#"
                        className="text-amber-600 font-semibold hover:text-amber-700 hover:underline"
                    >
                        {t('services_page.insurance_link')} &rarr;
                    </a>
                </Card>
            </PageContainer>
        </div>
    );
};

const ServiceCard: React.FC<{ tier: any }> = ({ tier }) => {
    const { t } = useLanguage();

    return (
        <div
            className={`
        relative bg-white rounded-2xl shadow-xl flex flex-col
        ${tier.recommended ? 'border-2 border-amber-500 transform md:-translate-y-4 z-10' : 'border border-slate-100'}
      `}
        >
            {/* Badge Recommandé */}
            {tier.recommended && (
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                    <span className="bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-sm flex items-center uppercase tracking-wide">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        {t('services_page.recommended')}
                    </span>
                </div>
            )}

            {/* Contenu */}
            <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
                <p className="mt-4 text-slate-500 text-sm">{tier.description}</p>

                {/* Features List */}
                <ul className="space-y-4 mb-8 mt-8">
                    {tier.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mr-3" />
                            <span className="text-slate-600 text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA Button */}
            <div className="p-8 pt-0 mt-auto">
                <a
                    href={URLS.SCORING_ENGINE}
                    className={`
            w-full py-4 px-6 rounded-xl font-bold transition flex items-center justify-center
            ${tier.recommended
                            ? 'bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-lg shadow-amber-500/20'
                            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                        }
          `}
                >
                    {t('services_page.btn_start')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                </a>
            </div>
        </div>
    );
};

export default ServicesClientPage;
