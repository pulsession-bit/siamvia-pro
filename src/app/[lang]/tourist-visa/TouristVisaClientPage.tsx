'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import { URLS, IMAGES } from '@/constants';
import { PageContainer, HighsLows, FAQAccordion } from '@/components/ui/PageComponents';
import { RelatedPages } from '@/components/RelatedPages';
import { VisaHero } from '@/components/visa/VisaHero';
import { VisaFeatureSummary } from '@/components/visa/VisaFeatureSummary';
import { VisaPitfalls } from '@/components/visa/VisaPitfalls';
import { Briefcase, Heart, HelpCircle, FileText, Calendar, Check } from 'lucide-react';

const TouristVisaClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* 1. Hero Section */}
            <VisaHero
                badge="● VISA TOURISTIQUE"
                title={t('tourist_visa_page.hero_title')}
                subtitle={t('tourist_visa_page.hero_subtitle')}
                description={t('tourist_visa_page.hero_description')}
                tagline={t('tourist_visa_page.hero_tagline')}
                backgroundImage={IMAGES.THAILAND_BEACH}
            />

            <PageContainer maxWidth="max-w-5xl" negativeMargin>
                {/* 2. Rules & Eligibility Section */}
                <VisaFeatureSummary
                    whyTitle={t('tourist_visa_page.rules_title')}
                    features={[
                        { icon: Calendar, title: t('tourist_visa_page.duration_title'), description: t('tourist_visa_page.duration_desc') },
                        { icon: Check, title: t('tourist_visa_page.validity_title'), description: t('tourist_visa_page.validity_desc') }
                    ]}
                    whoTitle={t('tourist_visa_page.docs_title')}
                    whoItems={[
                        { icon: FileText, title: t('tourist_visa_page.doc1'), description: "" },
                        { icon: FileText, title: t('tourist_visa_page.doc2'), description: "" },
                        { icon: FileText, title: t('tourist_visa_page.doc3'), description: "" },
                        { icon: FileText, title: t('tourist_visa_page.doc4'), description: "" },
                        { icon: FileText, title: t('tourist_visa_page.doc5'), description: "" }
                    ]}
                />

                {/* 3. Warnings */}
                <VisaPitfalls
                    title={t('tourist_visa_page.pitfalls_title')}
                    items={[]}
                    warningTitle={t('tourist_visa_page.warning_title')}
                    warningDesc={t('tourist_visa_page.warning_desc')}
                />

                {/* 4. Highs & Lows Section */}
                <HighsLows
                    highsTitle={t('tourist_visa_page.highs_title')}
                    highs={[
                        t('tourist_visa_page.highs.0'), t('tourist_visa_page.highs.1'),
                        t('tourist_visa_page.highs.2'), t('tourist_visa_page.highs.3'),
                    ]}
                    lowsTitle={t('tourist_visa_page.lows_title')}
                    lows={[
                        t('tourist_visa_page.lows.0'), t('tourist_visa_page.lows.1'),
                        t('tourist_visa_page.lows.2'), t('tourist_visa_page.lows.3'),
                    ]}
                />

                {/* 5. FAQ Section */}
                <FAQAccordion
                    title={t('tourist_visa_page.faq_title')}
                    faqs={[
                        { q: t('tourist_visa_page.faqs.0.q'), a: t('tourist_visa_page.faqs.0.a') },
                        { q: t('tourist_visa_page.faqs.1.q'), a: t('tourist_visa_page.faqs.1.a') },
                        { q: t('tourist_visa_page.faqs.2.q'), a: t('tourist_visa_page.faqs.2.a') },
                        { q: t('tourist_visa_page.faqs.3.q'), a: t('tourist_visa_page.faqs.3.a') },
                    ]}
                />

                {/* 6. Related Pages */}
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

                {/* 7. Final CTA */}
                <div className="mt-12 bg-slate-900 rounded-[2rem] p-12 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-amber-400 mb-4">{t('tourist_visa_page.cta_title')}</h3>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">{t('tourist_visa_page.cta_desc')}</p>
                        <a href={URLS.SCORING_ENGINE} className="inline-block bg-amber-500 text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-amber-400 transition transform hover:scale-105 shadow-xl">
                            {t('tourist_visa_page.cta_btn')}
                        </a>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};

export default TouristVisaClientPage;
