'use client';

import React from 'react';
import { Check, AlertTriangle, Heart, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { URLS, IMAGES } from '@/constants';
import { HeroSection, PageContainer, Card, CTAButton } from '@/components/ui/PageComponents';

/**
 * Retirement Visa Page
 * 
 * Informations sur le visa retraite pour la Thaïlande.
 * Affiche les critères d'éligibilité et les pièges courants.
 */
const RetirementVisaPage: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                backgroundImage={IMAGES.LTR}
                imageAlt="Retirement in Thailand"
                title={t('retirement_visa_page.hero_title')}
                subtitle={t('retirement_visa_page.hero_subtitle')}
                badge="● VISA RETRAITE"
            />

            {/* Main Content */}
            <PageContainer maxWidth="max-w-5xl" negativeMargin>
                {/* Eligibility Section */}
                <Card variant="white" className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                        <Heart className="h-6 w-6 text-amber-500 mr-3" />
                        {t('retirement_visa_page.eligibility_title')}
                    </h2>
                    <ul className="space-y-4">
                        <EligibilityItem text={t('retirement_visa_page.criteria1')} />
                        <EligibilityItem text={t('retirement_visa_page.criteria2')} />
                        <EligibilityItem text={t('retirement_visa_page.criteria3')} />
                        <EligibilityItem text={t('retirement_visa_page.criteria4')} />
                    </ul>
                </Card>

                {/* Common Pitfalls Section */}
                <Card variant="white" className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                        <Shield className="h-6 w-6 text-red-500 mr-3" />
                        {t('retirement_visa_page.pitfalls_title')}
                    </h2>
                    <div className="space-y-6">
                        <PitfallItem
                            title={t('retirement_visa_page.pitfall1_title')}
                            description={t('retirement_visa_page.pitfall1_desc')}
                        />
                        <PitfallItem
                            title={t('retirement_visa_page.pitfall2_title')}
                            description={t('retirement_visa_page.pitfall2_desc')}
                        />
                        <PitfallItem
                            title={t('retirement_visa_page.pitfall3_title')}
                            description={t('retirement_visa_page.pitfall3_desc')}
                        />
                    </div>
                </Card>

                {/* Warning Section */}
                <Card variant="amber" className="mb-12">
                    <div className="flex items-start">
                        <AlertTriangle className="h-6 w-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-amber-900 mb-2">
                                {t('retirement_visa_page.warning_title')}
                            </h3>
                            <p className="text-amber-800 text-sm">{t('retirement_visa_page.warning_desc')}</p>
                        </div>
                    </div>
                </Card>

                {/* CTA Section */}
                <Card variant="dark" className="text-center">
                    <h3 className="text-2xl font-bold text-amber-400 mb-4">
                        {t('retirement_visa_page.cta_title')}
                    </h3>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        {t('retirement_visa_page.cta_desc')}
                    </p>
                    <CTAButton href={URLS.SCORING_ENGINE} variant="primary">
                        {t('retirement_visa_page.cta_btn')}
                    </CTAButton>
                </Card>
            </PageContainer>
        </div>
    );
};

/**
 * Eligibility Item Component
 */
const EligibilityItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start">
        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
        <span className="text-slate-700">{text}</span>
    </li>
);

/**
 * Pitfall Item Component
 */
const PitfallItem: React.FC<{
    title: string;
    description: string;
}> = ({ title, description }) => (
    <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
        <h3 className="font-bold text-red-900 mb-2">{title}</h3>
        <p className="text-red-800 text-sm">{description}</p>
    </div>
);

export default RetirementVisaPage;
