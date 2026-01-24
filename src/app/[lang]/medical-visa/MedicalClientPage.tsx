
'use client';

import React from 'react';
import { Stethoscope, CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, ArrowRight, Activity, House } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const MedicalClientPage: React.FC = () => {
    const { t } = useLanguage();

    const VISA_CONFIG = {
        name: t('medical_visa_page.hero_title').split(' – ')[0],
        type: t('medical_visa_page.hero_badge'),
        audience: (t('medical_visa_page.audience_types_list') as unknown as string[]).join(', '),
        duration: t('medical_visa_page.duration_validity_value'),
        work_allowed: false,
        risk_level: "low"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Hôpital de luxe Thaïlande"
                title={t('medical_visa_page.hero_title')}
                subtitle={`${t('medical_visa_page.hero_subtitle')} (${new Date().getFullYear()})`}
                icon={<Stethoscope className="h-6 w-6" />}
                badge={t('medical_visa_page.hero_badge')}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{t('medical_visa_page.definition_title')}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                {t('medical_visa_page.definition_content')}
                            </p>
                        </Card>
                    </section>

                    <section id="audience">
                        <SectionTitle>{t('medical_visa_page.audience_title')}</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-6 border-l-4 border-blue-500">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                                    <Activity className="h-5 w-5 text-blue-500 mr-2" />
                                    {t('medical_visa_page.audience_types_title')}
                                </h3>
                                <ul className="space-y-2 text-slate-600">
                                    {(t('medical_visa_page.audience_types_list') as unknown as string[]).map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </Card>
                            <Card variant="white" className="p-6 border-l-4 border-green-500">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                                    <House className="h-5 w-5 text-green-500 mr-2" />
                                    {t('medical_visa_page.audience_companion_title')}
                                </h3>
                                <p className="text-sm text-slate-600">
                                    {t('medical_visa_page.audience_companion_text')}
                                </p>
                            </Card>
                        </div>
                    </section>

                    <section id="duration">
                        <SectionTitle>{t('medical_visa_page.duration_title')}</SectionTitle>
                        <div className="grid grid-cols-2 gap-4">
                            <Card variant="white" className="p-5 text-center">
                                <Clock className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{t('medical_visa_page.duration_validity_label')}</div>
                                <div className="text-xl font-bold text-slate-900">{t('medical_visa_page.duration_validity_value')}</div>
                            </Card>
                            <Card variant="white" className="p-5 text-center">
                                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{t('medical_visa_page.duration_extension_label')}</div>
                                <div className="text-xl font-bold text-slate-900">{t('medical_visa_page.duration_extension_value')}</div>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>{t('medical_visa_page.conditions_title')}</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {(t('medical_visa_page.conditions_list') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-3 mt-2 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>

                    <section id="assistance">
                        <SectionTitle>{t('medical_visa_page.advantage_title')}</SectionTitle>
                        <Card variant="white" className="p-6 bg-slate-50 border-slate-200 italic">
                            <p className="text-slate-600">
                                {t('medical_visa_page.advantage_text')}
                            </p>
                        </Card>
                    </section>
                </div>

                <div className="mt-16">
                    <Card variant="dark" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold text-white mb-2">{t('medical_visa_page.cta_help_title')}</h3>
                        <p className="text-slate-400 mb-8 max-w-lg">{t('medical_visa_page.cta_help_subtitle')}</p>
                        <CTAButton href="https://desk.siamvisapro.com" variant="primary">
                            {t('medical_visa_page.cta_help_btn')}
                        </CTAButton>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

export default MedicalClientPage;
