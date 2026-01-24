
'use client';

import React from 'react';
import { Heart, CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, ArrowRight, HelpingHand } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const VolunteerClientPage: React.FC = () => {
    const { t } = useLanguage();

    const VISA_CONFIG = {
        name: t('volunteer_visa_page.hero_title').split(' – ')[0],
        type: t('volunteer_visa_page.hero_badge'),
        audience: (t('volunteer_visa_page.audience_compatible_list') as unknown as string[]).join(', '),
        duration: t('volunteer_visa_page.duration_initial_value'),
        work_allowed: false,
        risk_level: "high"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Bénévolat Thaïlande"
                title={t('volunteer_visa_page.hero_title')}
                subtitle={`${t('volunteer_visa_page.hero_subtitle')} (${new Date().getFullYear()})`}
                icon={<Heart className="h-6 w-6" />}
                badge={t('volunteer_visa_page.hero_badge')}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{t('volunteer_visa_page.definition_title')}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                {t('volunteer_visa_page.definition_content')}
                            </p>
                        </Card>
                    </section>

                    <section id="audience">
                        <SectionTitle>{t('volunteer_visa_page.audience_title')}</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-6 border-l-4 border-green-500">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                                    {t('volunteer_visa_page.audience_compatible')}
                                </h3>
                                <ul className="space-y-2 text-slate-600">
                                    {(t('volunteer_visa_page.audience_compatible_list') as unknown as string[]).map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </Card>
                            <Card variant="white" className="p-6 border-l-4 border-red-300 bg-slate-50/50 opacity-75">
                                <h3 className="font-bold text-slate-700 mb-3">{t('volunteer_visa_page.audience_not_compatible')}</h3>
                                <ul className="space-y-2 text-slate-500">
                                    {(t('volunteer_visa_page.audience_not_compatible_list') as unknown as string[]).map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </section>

                    <section id="duration">
                        <SectionTitle>{t('volunteer_visa_page.duration_title')}</SectionTitle>
                        <div className="grid grid-cols-2 gap-4">
                            <Card variant="white" className="p-5 text-center">
                                <Clock className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{t('volunteer_visa_page.duration_initial_label')}</div>
                                <div className="text-xl font-bold text-slate-900">{t('volunteer_visa_page.duration_initial_value')}</div>
                            </Card>
                            <Card variant="white" className="p-5 text-center">
                                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{t('volunteer_visa_page.duration_max_label')}</div>
                                <div className="text-xl font-bold text-slate-900">{t('volunteer_visa_page.duration_max_value')}</div>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>{t('volunteer_visa_page.conditions_title')}</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {(t('volunteer_visa_page.conditions_list') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-3 mt-2 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>

                    <section id="warning">
                        <SectionTitle>{t('volunteer_visa_page.warning_title')}</SectionTitle>
                        <Card variant="white" className="p-6 border-l-4 border-amber-500 bg-amber-50/10">
                            <div className="flex items-start">
                                <ShieldAlert className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-amber-800 mb-1">{t('volunteer_visa_page.warning_regulation_title')}</h3>
                                    <p className="text-slate-700">
                                        {t('volunteer_visa_page.warning_regulation_text')}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

                <div className="mt-16">
                    <Card variant="dark" className="p-8 text-center flex flex-col justify-center items-center">
                        <HelpingHand className="h-12 w-12 text-amber-500 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">{t('volunteer_visa_page.cta_help_title')}</h3>
                        <p className="text-slate-400 mb-8 max-w-lg">{t('volunteer_visa_page.cta_help_subtitle')}</p>
                        <CTAButton href="https://desk.siamvisapro.com" variant="primary">
                            {t('volunteer_visa_page.cta_help_btn')}
                        </CTAButton>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

export default VolunteerClientPage;
