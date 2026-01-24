
'use client';

import React from 'react';
import { Newspaper, CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, Video, Camera } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const MediaClientPage: React.FC = () => {
    const { t } = useLanguage();

    const VISA_CONFIG = {
        name: t('media_visa_page.hero_title').split(' – ')[0],
        type: t('media_visa_page.hero_badge'),
        audience: (t('media_visa_page.accreditation_list') as unknown as string[]).join(', '),
        duration: t('media_visa_page.duration_value'),
        work_allowed: true,
        risk_level: "medium"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={"https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Journalisme Thaïlande"
                title={t('media_visa_page.hero_title')}
                subtitle={`${t('media_visa_page.hero_subtitle')} (${new Date().getFullYear()})`}
                icon={<Newspaper className="h-6 w-6" />}
                badge={t('media_visa_page.hero_badge')}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{t('media_visa_page.definition_title')}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                {t('media_visa_page.definition_content')}
                            </p>
                        </Card>
                    </section>

                    <section id="accreditation">
                        <SectionTitle>{t('media_visa_page.accreditation_title')}</SectionTitle>
                        <Card variant="white" className="p-6 border-l-4 border-amber-500">
                            <p className="mb-4 font-semibold text-slate-800">{t('media_visa_page.accreditation_subtitle')}</p>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                {(t('media_visa_page.accreditation_list') as unknown as string[]).map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>
                        </Card>
                    </section>

                    <section id="duration">
                        <SectionTitle>{t('media_visa_page.conditions_title')}</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-5 flex items-center space-x-4">
                                <Clock className="h-8 w-8 text-amber-500" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-bold">{t('media_visa_page.duration_label')}</div>
                                    <div className="text-lg font-bold">{t('media_visa_page.duration_value')}</div>
                                </div>
                            </Card>
                            <Card variant="white" className="p-5 flex items-center space-x-4">
                                <Video className="h-8 w-8 text-blue-500" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-bold">{t('media_visa_page.activity_label')}</div>
                                    <div className="text-lg font-bold">{t('media_visa_page.activity_value')}</div>
                                </div>
                            </Card>
                        </div>
                    </section>

                    <section id="warning">
                        <SectionTitle>{t('media_visa_page.warning_title')}</SectionTitle>
                        <Card variant="white" className="p-6 bg-red-50 border-red-100">
                            <div className="flex items-start text-red-800">
                                <AlertTriangle className="h-6 w-6 mr-3 flex-shrink-0" />
                                <p className="text-sm">
                                    {t('media_visa_page.warning_text')}
                                </p>
                            </div>
                        </Card>
                    </section>
                </div>

                <div className="mt-16">
                    <CTAButton href="https://desk.siamvisapro.com" variant="primary" fullWidth>
                        {t('media_visa_page.cta_btn')}
                    </CTAButton>
                </div>
            </PageContainer>
        </div>
    );
};

export default MediaClientPage;
