'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { HeroSection, PageContainer, SectionTitle, Card, CTAButton } from '@/components/ui/PageComponents';
import { CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, ArrowRight, Plane, HelpCircle } from 'lucide-react';
import { IMAGES } from '@/constants';

interface VisaPageTemplateProps {
    pageKey: string; // The translation key prefix, e.g., 'exemption_visa_page'
    heroImage?: string;
    heroImageAlt?: string;
    heroIcon?: React.ReactNode;
    visaConfig?: {
        name?: string;
        type?: string;
        audience?: string;
        duration?: string;
        workAllowed?: boolean;
        riskLevel?: string;
    };
    ctaHelpLink?: string;
    ctaCompareLink?: string;
}

export const VisaPageTemplate: React.FC<VisaPageTemplateProps> = ({
    pageKey,
    heroImage,
    heroImageAlt,
    heroIcon = <Plane className="h-6 w-6" />,
    ctaHelpLink = "/dtv", // Default redirect
    ctaCompareLink = "/tourist-visa" // Default compare
}) => {
    const { t } = useLanguage();

    // Helper to safely get array translations
    const getList = (key: string): string[] => {
        const val = t(`${pageKey}.${key}`);
        return Array.isArray(val) ? (val as unknown as string[]) : [];
    };

    // Helper to try multiple keys and return the first valid translation
    const tOr = (...keys: string[]): string => {
        for (const key of keys) {
            const fullKey = `${pageKey}.${key}`;
            const val = t(fullKey);
            if (val && val !== fullKey) {
                return val;
            }
        }
        // If all fail, return the first key translation (likely the raw key)
        return t(`${pageKey}.${keys[0]}`);
    };

    const SCORING_ENGINE_URL = 'https://audit.siamvisapro.com/';

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* 1. HERO SECTION */}
            <HeroSection
                backgroundImage={heroImage || "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa"}
                imageAlt={heroImageAlt || "Thailand Visa"}
                title={t(`${pageKey}.hero_title`)}
                subtitle={`${t(`${pageKey}.hero_subtitle`)} (${new Date().getFullYear()})`}
                icon={heroIcon}
                badge={t(`${pageKey}.hero_badge`)}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    {/* 2. DEFINITION */}
                    <section id="definition">
                        <SectionTitle>{t(`${pageKey}.definition_title`)}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>{t(`${pageKey}.definition_content`)}</p>
                        </Card>
                    </section>

                    {/* 3. AUDIENCE (Compatible vs Not/Industries) */}
                    <section id="audience">
                        <SectionTitle>{t(`${pageKey}.audience_title`)}</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Compatible */}
                            <Card variant="white" className="p-6 border-l-4 border-green-500">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                                    {t(`${pageKey}.audience_compatible`)}
                                </h3>
                                <ul className="space-y-2 text-slate-600">
                                    {getList('audience_compatible_list').map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </Card>
                            {/* Not Compatible */}
                            {t(`${pageKey}.audience_not_compatible`) && (
                                <Card variant="white" className="p-6 border-l-4 border-slate-300 bg-slate-50/50 opacity-75">
                                    <h3 className="font-bold text-slate-700 mb-3">{t(`${pageKey}.audience_not_compatible`)}</h3>
                                    <ul className="space-y-2 text-slate-500">
                                        {getList('audience_not_compatible_list').map((item, i) => (
                                            <li key={i}>• {item}</li>
                                        ))}
                                    </ul>
                                </Card>
                            )}
                            {/* Industries (Specific to SMART/Scientific) */}
                            {t(`${pageKey}.audience_industries`) && t(`${pageKey}.audience_industries`) !== `${pageKey}.audience_industries` && (
                                <Card variant="white" className="p-6 border-l-4 border-amber-500 bg-amber-50/10 md:col-span-2">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                                        <Globe className="h-5 w-5 text-amber-600 mr-2" />
                                        {t(`${pageKey}.audience_industries`)}
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-slate-600">
                                        {getList('audience_industries_list').map((item, i) => (
                                            <li key={i}>• {item}</li>
                                        ))}
                                    </ul>
                                </Card>
                            )}
                        </div>
                    </section>

                    {/* 4. DURATION */}
                    <section id="duration">
                        <SectionTitle>{t(`${pageKey}.duration_title`)}</SectionTitle>
                        <div className="grid grid-cols-2 gap-4">
                            <Card variant="white" className="p-5 text-center">
                                <Clock className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">
                                    {tOr('duration_initial_label', 'duration_standard_label')}
                                </div>
                                <div className="text-xl font-bold text-slate-900">
                                    {tOr('duration_initial_value', 'duration_standard_value')}
                                </div>
                            </Card>
                            <Card variant="white" className="p-5 text-center">
                                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">
                                    {tOr('duration_max_label', 'duration_reporting_label')}
                                </div>
                                <div className="text-xl font-bold text-slate-900">
                                    {tOr('duration_max_value', 'duration_reporting_value')}
                                </div>
                            </Card>
                        </div>
                    </section>

                    {/* 5. CONDITIONS */}
                    <section id="conditions">
                        <SectionTitle>{t(`${pageKey}.conditions_title`)}</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {getList('conditions_list').map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-3 mt-2 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>

                    {/* 6. WORK & WARNINGS */}
                    <section id="work">
                        <SectionTitle>{t(`${pageKey}.work_title`)}</SectionTitle>
                        <Card variant="white" className="p-6 border-l-4 border-red-500 bg-red-50/10">
                            <div className="flex items-start mb-4">
                                <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-red-800 mb-1">
                                        {tOr('work_warning_title', 'work_no_permit_title')}
                                    </h3>
                                    <p className="text-slate-700">
                                        {tOr('work_warning_text', 'work_no_permit_text')}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>

                    {/* 7. RENEWAL */}
                    <section id="renewal">
                        <SectionTitle>{t(`${pageKey}.renewal_title`)}</SectionTitle>
                        <Card variant="white" className="p-6">
                            <p className="text-slate-600 mb-4">
                                {t(`${pageKey}.renewal_text`)}
                            </p>
                        </Card>
                    </section>

                    {/* 8. FAQ Section */}
                    {getList('faqs').length > 0 && (
                        <section id="faq">
                            <SectionTitle>{t(`${pageKey}.faq_title`) || t('nav.faq')}</SectionTitle>
                            <div className="space-y-4">
                                {(t(`${pageKey}.faqs`) as unknown as any[]).map((faq, i) => (
                                    <Card key={i} variant="white" className="p-6">
                                        <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                                            <HelpCircle className="h-5 w-5 text-amber-500 mr-2" />
                                            {faq.q}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 9. LIMITATIONS */}
                    <section id="limitations">
                        <SectionTitle>{t(`${pageKey}.limitations_title`)}</SectionTitle>
                        <Card variant="white" className="p-6 bg-slate-50 border-slate-200">
                            <div className="flex items-start text-slate-700">
                                <ShieldAlert className="h-6 w-6 mr-3 flex-shrink-0 text-slate-500" />
                                <div>
                                    <h3 className="font-bold mb-2">
                                        {tOr('limitations_risk_title', 'limitations_complex_title')}
                                    </h3>
                                    <p className="text-sm leading-relaxed">
                                        {tOr('limitations_risk_text', 'limitations_complex_text')}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

                {/* 9. CTA */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="dark" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-white mb-2">
                            {tOr('cta_help_title', 'cta_eligible_title', 'cta_school_title')}
                        </h3>
                        <p className="text-slate-400 mb-6 text-sm">
                            {tOr('cta_help_subtitle', 'cta_eligible_subtitle', 'cta_school_subtitle')}
                        </p>
                        <a
                            href={SCORING_ENGINE_URL}
                            className="w-full bg-amber-500 text-slate-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-amber-400 transition-all transform active:scale-95 inline-block"
                        >
                            {tOr('cta_help_btn', 'cta_eligible_btn', 'cta_school_btn')}
                        </a>
                    </Card>
                    <Card variant="white" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{t(`${pageKey}.cta_compare_title`)}</h3>
                        <p className="text-slate-500 mb-6 text-sm">{t(`${pageKey}.cta_compare_subtitle`)}</p>
                        <a href={ctaCompareLink} className="text-amber-600 font-semibold hover:underline flex items-center">
                            {t(`${pageKey}.cta_compare_btn`)} <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};
