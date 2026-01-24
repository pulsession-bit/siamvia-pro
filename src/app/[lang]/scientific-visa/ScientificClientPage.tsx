
'use client';

import React from 'react';
import { Microscope, CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, FlaskConical, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const ScientificClientPage: React.FC = () => {
    const { t } = useLanguage();

    const VISA_CONFIG = {
        name: t('scientific_visa_page.hero_title').split(' – ')[0],
        type: t('scientific_visa_page.hero_badge'),
        audience: t('scientific_visa_page.hero_subtitle'),
        duration: "1 an (renouvelable)",
        work_allowed: true,
        risk_level: "low"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={"https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Laboratoire Thaïlande"
                title={t('scientific_visa_page.hero_title')}
                subtitle={`${t('scientific_visa_page.hero_subtitle')} (${new Date().getFullYear()})`}
                icon={<Microscope className="h-6 w-6" />}
                badge={t('scientific_visa_page.hero_badge')}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{t('scientific_visa_page.definition_title')}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                {t('scientific_visa_page.definition_content')}
                            </p>
                        </Card>
                    </section>

                    <section id="audience">
                        <SectionTitle>{t('scientific_visa_page.audience_title')}</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-6">
                                <FlaskConical className="h-8 w-8 text-blue-500 mb-3" />
                                <h3 className="font-bold text-slate-900 mb-2">{t('scientific_visa_page.audience_tech_title')}</h3>
                                <p className="text-sm text-slate-600">{t('scientific_visa_page.audience_tech_text')}</p>
                            </Card>
                            <Card variant="white" className="p-6">
                                <GraduationCap className="h-8 w-8 text-green-500 mb-3" />
                                <h3 className="font-bold text-slate-900 mb-2">{t('scientific_visa_page.audience_academic_title')}</h3>
                                <p className="text-sm text-slate-600">{t('scientific_visa_page.audience_academic_text')}</p>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>{t('scientific_visa_page.conditions_title')}</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {(t('scientific_visa_page.conditions_list') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-3 mt-2 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>
                </div>

                <div className="mt-16 text-center">
                    <CTAButton href="https://desk.siamvisapro.com" variant="primary">
                        {t('scientific_visa_page.cta_btn')}
                    </CTAButton>
                </div>
            </PageContainer>
        </div>
    );
};

export default ScientificClientPage;
