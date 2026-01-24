
'use client';

import React from 'react';
import { Briefcase, CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES, URLS } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const BusinessVisaClientPage: React.FC = () => {
    const { t } = useLanguage();

    const VISA_CONFIG = {
        name: t('business_visa_page.hero_title').split(' – ')[0],
        type: t('business_visa_page.hero_badge'),
        audience: (t('business_visa_page.audience_compatible_list') as unknown as string[]).join(', '),
        duration: t('business_visa_page.duration_initial_value'),
        work_allowed: true,
        risk_level: "high"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={IMAGES.OFFICE || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Bureau Bangkok"
                title={t('business_visa_page.hero_title')}
                subtitle={`${t('business_visa_page.hero_subtitle')} (${new Date().getFullYear()})`}
                icon={<Briefcase className="h-6 w-6" />}
                badge={t('business_visa_page.hero_badge')}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{t('business_visa_page.definition_title')}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                {t('business_visa_page.definition_content')}
                            </p>
                        </Card>
                    </section>

                    <section id="audience">
                        <SectionTitle>{t('business_visa_page.audience_title')}</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-6 border-l-4 border-green-500">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                                    {t('business_visa_page.audience_compatible')}
                                </h3>
                                <ul className="space-y-2 text-slate-600">
                                    {(t('business_visa_page.audience_compatible_list') as unknown as string[]).map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </Card>
                            <Card variant="white" className="p-6 border-l-4 border-slate-300 bg-slate-50/50 opacity-75">
                                <h3 className="font-bold text-slate-700 mb-3">{t('business_visa_page.audience_not_compatible')}</h3>
                                <ul className="space-y-2 text-slate-500">
                                    {(t('business_visa_page.audience_not_compatible_list') as unknown as string[]).map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </section>

                    <section id="duration">
                        <SectionTitle>{t('business_visa_page.duration_title')}</SectionTitle>
                        <div className="grid grid-cols-2 gap-4">
                            <Card variant="white" className="p-5 text-center">
                                <Clock className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{t('business_visa_page.duration_initial_label')}</div>
                                <div className="text-xl font-bold text-slate-900">{t('business_visa_page.duration_initial_value')}</div>
                            </Card>
                            <Card variant="white" className="p-5 text-center">
                                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{t('business_visa_page.duration_max_label')}</div>
                                <div className="text-xl font-bold text-slate-900">{t('business_visa_page.duration_max_value')}</div>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>{t('business_visa_page.conditions_title')}</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {(t('business_visa_page.conditions_list') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-3 mt-2 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>

                    <section id="work">
                        <SectionTitle>{t('business_visa_page.work_title')}</SectionTitle>
                        <Card variant="white" className="p-6 border-l-4 border-amber-500 bg-amber-50/10">
                            <div className="flex items-start mb-4">
                                <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-amber-800 mb-1">{t('business_visa_page.work_warning_title')}</h3>
                                    <p className="text-slate-700">
                                        {t('business_visa_page.work_warning_text')}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-green-100/50 p-4 rounded border border-green-200">
                                    <div className="font-bold text-green-800 mb-1">{t('business_visa_page.work_allowed_label')}</div>
                                    <div className="text-green-700 text-sm">{t('business_visa_page.work_allowed_text')}</div>
                                </div>
                                <div className="bg-red-100/50 p-4 rounded border border-red-200">
                                    <div className="font-bold text-red-800 mb-1">{t('business_visa_page.work_forbidden_label')}</div>
                                    <div className="text-red-700 text-sm">{t('business_visa_page.work_forbidden_text')}</div>
                                </div>
                            </div>
                        </Card>
                    </section>

                    <section id="renewal">
                        <SectionTitle>{t('business_visa_page.renewal_title')}</SectionTitle>
                        <Card variant="white" className="p-6">
                            <p className="text-slate-600 mb-4">
                                {t('business_visa_page.renewal_text')}
                            </p>
                            <p className="text-sm text-slate-500 italic">
                                {t('business_visa_page.renewal_note')}
                            </p>
                        </Card>
                    </section>

                    <section id="limitations">
                        <SectionTitle>{t('business_visa_page.limitations_title')}</SectionTitle>
                        <Card variant="white" className="p-6 bg-red-50 border-red-100">
                            <div className="flex items-start text-red-700">
                                <ShieldAlert className="h-6 w-6 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-2">{t('business_visa_page.limitations_risk_title')}</h3>
                                    <p className="text-sm leading-relaxed">
                                        {t('business_visa_page.limitations_risk_text')}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="dark" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-white mb-2">{t('business_visa_page.cta_help_title')}</h3>
                        <p className="text-slate-400 mb-6 text-sm">{t('business_visa_page.cta_help_subtitle')}</p>
                        <CTAButton href="https://desk.siamvisapro.com" variant="primary" fullWidth>
                            {t('business_visa_page.cta_help_btn')}
                        </CTAButton>
                    </Card>
                    <Card variant="white" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{t('business_visa_page.cta_compare_title')}</h3>
                        <p className="text-slate-500 mb-6 text-sm">{t('business_visa_page.cta_compare_subtitle')}</p>
                        <a href="/fr/dtv" className="text-amber-600 font-semibold hover:underline flex items-center">
                            {t('business_visa_page.cta_compare_btn')} <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

export default BusinessVisaClientPage;
