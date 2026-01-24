
'use client';

import React from 'react';
import { Heart, CheckCircle2, Clock, Globe, ShieldAlert, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const FamilyClientPage: React.FC = () => {
    const { t } = useLanguage();

    const VISA_CONFIG = {
        name: t('family_visa_page.hero_title').split(' – ')[0],
        type: t('family_visa_page.hero_badge'),
        audience: (t('family_visa_page.audience_compatible_list') as unknown as string[]).join(', '),
        duration: t('family_visa_page.duration_initial_value'),
        work_allowed: true, // Avec permis de travail
        risk_level: "low"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={IMAGES.BEACH || "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Famille en Thaïlande"
                title={t('family_visa_page.hero_title')}
                subtitle={`${t('family_visa_page.hero_subtitle')} (${new Date().getFullYear()})`}
                icon={<Heart className="h-6 w-6" />}
                badge={t('family_visa_page.hero_badge')}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{t('family_visa_page.definition_title')}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                {t('family_visa_page.definition_content')}
                            </p>
                        </Card>
                    </section>

                    <section id="audience">
                        <SectionTitle>{t('family_visa_page.audience_title')}</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-6 border-l-4 border-green-500">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                                    {t('family_visa_page.audience_compatible')}
                                </h3>
                                <ul className="space-y-2 text-slate-600">
                                    {(t('family_visa_page.audience_compatible_list') as unknown as string[]).map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </Card>
                            <Card variant="white" className="p-6 border-l-4 border-slate-300 bg-slate-50/50 opacity-75">
                                <h3 className="font-bold text-slate-700 mb-3">{t('family_visa_page.audience_not_compatible')}</h3>
                                <ul className="space-y-2 text-slate-500">
                                    {(t('family_visa_page.audience_not_compatible_list') as unknown as string[]).map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </section>

                    <section id="duration">
                        <SectionTitle>{t('family_visa_page.duration_title')}</SectionTitle>
                        <div className="grid grid-cols-2 gap-4">
                            <Card variant="white" className="p-5 text-center">
                                <Clock className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{t('family_visa_page.duration_initial_label')}</div>
                                <div className="text-xl font-bold text-slate-900">{t('family_visa_page.duration_initial_value')}</div>
                            </Card>
                            <Card variant="white" className="p-5 text-center">
                                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{t('family_visa_page.duration_max_label')}</div>
                                <div className="text-xl font-bold text-slate-900">{t('family_visa_page.duration_max_value')}</div>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>{t('family_visa_page.conditions_title')}</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {(t('family_visa_page.conditions_list') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-3 mt-2 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>

                    <section id="work">
                        <SectionTitle>{t('family_visa_page.work_title')}</SectionTitle>
                        <Card variant="white" className="p-6 border-l-4 border-green-500 bg-green-50/10">
                            <div className="flex items-start mb-4">
                                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-green-800 mb-1">{t('family_visa_page.work_allowed_title')}</h3>
                                    <p className="text-slate-700">
                                        {t('family_visa_page.work_allowed_text')}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>

                    <section id="renewal">
                        <SectionTitle>{t('family_visa_page.renewal_title')}</SectionTitle>
                        <Card variant="white" className="p-6">
                            <p className="text-slate-600 mb-4">
                                {t('family_visa_page.renewal_text')}
                            </p>
                        </Card>
                    </section>

                    <section id="limitations">
                        <SectionTitle>{t('family_visa_page.limitations_title')}</SectionTitle>
                        <Card variant="white" className="p-6 bg-amber-50 border-amber-100">
                            <div className="flex items-start text-amber-800">
                                <ShieldAlert className="h-6 w-6 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-2">{t('family_visa_page.limitations_divorce_title')}</h3>
                                    <p className="text-sm leading-relaxed">
                                        {t('family_visa_page.limitations_divorce_text')}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="dark" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-white mb-2">{t('family_visa_page.cta_help_title')}</h3>
                        <p className="text-slate-400 mb-6 text-sm">{t('family_visa_page.cta_help_subtitle')}</p>
                        <CTAButton href="https://desk.siamvisapro.com" variant="primary" fullWidth>
                            {t('family_visa_page.cta_help_btn')}
                        </CTAButton>
                    </Card>
                    <Card variant="white" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{t('family_visa_page.cta_compare_title')}</h3>
                        <p className="text-slate-500 mb-6 text-sm">{t('family_visa_page.cta_compare_subtitle')}</p>
                        <a href="/fr/elite-visa" className="text-amber-600 font-semibold hover:underline flex items-center">
                            {t('family_visa_page.cta_compare_btn')} <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

export default FamilyClientPage;
