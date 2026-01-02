'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import { URLS, IMAGES } from '@/constants';
import { HeroSection, PageContainer, Card, CTAButton, HighsLows, FAQAccordion } from '@/components/ui/PageComponents';
import { RelatedPages } from '@/components/RelatedPages';
import { Briefcase, Heart, HelpCircle, AlertTriangle, FileText, Calendar, Check } from 'lucide-react';

const TouristVisaClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                backgroundImage={IMAGES.THAILAND_BEACH}
                imageAlt="Thailand Beach"
                title={t('tourist_visa_page.hero_title')}
                subtitle={t('tourist_visa_page.hero_subtitle')}
                badge="● VISA TOURISTIQUE"
            />

            {/* Main Content */}
            <PageContainer maxWidth="max-w-5xl" negativeMargin>
                {/* Visa Rules Section */}
                <Card variant="white" className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                        <FileText className="h-6 w-6 text-amber-500 mr-3" />
                        {t('tourist_visa_page.rules_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <InfoBox
                            icon={<Calendar className="h-5 w-5 text-amber-500" />}
                            title={t('tourist_visa_page.duration_title')}
                            description={t('tourist_visa_page.duration_desc')}
                        />
                        <InfoBox
                            icon={<Check className="h-5 w-5 text-green-500" />}
                            title={t('tourist_visa_page.validity_title')}
                            description={t('tourist_visa_page.validity_desc')}
                        />
                    </div>
                </Card>

                {/* Required Documents Section */}
                <Card variant="white" className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        {t('tourist_visa_page.docs_title')}
                    </h2>
                    <ul className="space-y-4">
                        <DocumentItem text={t('tourist_visa_page.doc1')} />
                        <DocumentItem text={t('tourist_visa_page.doc2')} />
                        <DocumentItem text={t('tourist_visa_page.doc3')} />
                        <DocumentItem text={t('tourist_visa_page.doc4')} />
                        <DocumentItem text={t('tourist_visa_page.doc5')} />
                    </ul>
                </Card>

                {/* Warning Section */}
                <Card variant="amber" className="mb-12">
                    <div className="flex items-start">
                        <AlertTriangle className="h-6 w-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-amber-900 mb-2">
                                {t('tourist_visa_page.warning_title')}
                            </h3>
                            <p className="text-amber-800 text-sm">
                                {t('tourist_visa_page.warning_desc')}{' '}
                                <a href={langPath('dtv')} className="font-bold underline text-amber-900 hover:text-amber-700">
                                    {t('visas.dtv_title')} &rarr;
                                </a>
                            </p>
                        </div>
                    </div>
                </Card>

                <HighsLows
                    highsTitle={t('tourist_visa_page.highs_title')}
                    highs={[
                        t('tourist_visa_page.highs.0'),
                        t('tourist_visa_page.highs.1'),
                        t('tourist_visa_page.highs.2'),
                        t('tourist_visa_page.highs.3'),
                    ]}
                    lowsTitle={t('tourist_visa_page.lows_title')}
                    lows={[
                        t('tourist_visa_page.lows.0'),
                        t('tourist_visa_page.lows.1'),
                        t('tourist_visa_page.lows.2'),
                        t('tourist_visa_page.lows.3'),
                    ]}
                />

                <FAQAccordion
                    title={t('tourist_visa_page.faq_title')}
                    faqs={[
                        { q: t('tourist_visa_page.faqs.0.q'), a: t('tourist_visa_page.faqs.0.a') },
                        { q: t('tourist_visa_page.faqs.1.q'), a: t('tourist_visa_page.faqs.1.a') },
                        { q: t('tourist_visa_page.faqs.2.q'), a: t('tourist_visa_page.faqs.2.a') },
                        { q: t('tourist_visa_page.faqs.3.q'), a: t('tourist_visa_page.faqs.3.a') },
                    ]}
                />

                <RelatedPages
                    title={t('footer.col_visas')}
                    pages={[
                        {
                            title: t('visas.dtv_title'),
                            description: t('visas.dtv_desc'),
                            href: langPath('dtv'),
                            icon: Briefcase
                        },
                        {
                            title: t('visas.ltr_title'),
                            description: t('visas.ltr_desc'),
                            href: langPath('retirement-visa'),
                            icon: Heart
                        },
                        {
                            title: t('nav.faq'),
                            description: t('faq_page.subtitle'),
                            href: langPath('faq'),
                            icon: HelpCircle
                        }
                    ]}
                />

                {/* CTA Section */}
                <Card variant="dark" className="text-center">
                    <h3 className="text-2xl font-bold text-amber-400 mb-4">
                        {t('tourist_visa_page.cta_title')}
                    </h3>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        {t('tourist_visa_page.cta_desc')}
                    </p>
                    <CTAButton href={URLS.SCORING_ENGINE} variant="primary">
                        {t('tourist_visa_page.cta_btn')}
                    </CTAButton>
                </Card>
            </PageContainer>
        </div>
    );
};

const InfoBox: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
}> = ({ icon, title, description }) => (
    <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-200">
        <div className="mr-3 mt-1">{icon}</div>
        <div>
            <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
            <p className="text-slate-600 text-sm">{description}</p>
        </div>
    </div>
);

const DocumentItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start">
        <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mr-3 mt-0.5" />
        <span className="text-slate-700">{text}</span>
    </li>
);

export default TouristVisaClientPage;
