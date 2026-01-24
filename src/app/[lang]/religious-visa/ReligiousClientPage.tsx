
'use client';

import React from 'react';
import { CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, ArrowRight, Sun } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const ReligiousClientPage: React.FC = () => {
    const { t } = useLanguage();

    const VISA_CONFIG = {
        name: t('religious_visa_page.hero_title').split(' – ')[0],
        type: t('religious_visa_page.hero_badge'),
        audience: (t('religious_visa_page.conditions_list') as unknown as string[]).join(', '),
        duration: t('religious_visa_page.duration_initial_value'),
        work_allowed: false,
        risk_level: "low"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={"https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Temple Thaïlande"
                title={t('religious_visa_page.hero_title')}
                subtitle={`${t('religious_visa_page.hero_subtitle')} (${new Date().getFullYear()})`}
                icon={<Sun className="h-6 w-6" />}
                badge={t('religious_visa_page.hero_badge')}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{t('religious_visa_page.definition_title')}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                {t('religious_visa_page.definition_content')}
                            </p>
                        </Card>
                    </section>

                    <section id="conditions">
                        <SectionTitle>{t('religious_visa_page.conditions_title')}</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {(t('religious_visa_page.conditions_list') as unknown as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-3 mt-2 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>

                    <section id="duration">
                        <SectionTitle>{t('religious_visa_page.duration_title')}</SectionTitle>
                        <div className="grid grid-cols-2 gap-4">
                            <Card variant="white" className="p-5 text-center">
                                <Clock className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{t('religious_visa_page.duration_initial_label')}</div>
                                <div className="text-xl font-bold text-slate-900">{t('religious_visa_page.duration_initial_value')}</div>
                            </Card>
                            <Card variant="white" className="p-5 text-center">
                                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{t('religious_visa_page.duration_max_label')}</div>
                                <div className="text-xl font-bold text-slate-900">{t('religious_visa_page.duration_max_value')}</div>
                            </Card>
                        </div>
                    </section>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-500 text-sm mb-6 italic">{t('religious_visa_page.footer_note')}</p>
                    <CTAButton href="https://desk.siamvisapro.com" variant="secondary" className="px-10">
                        {t('religious_visa_page.cta_btn')}
                    </CTAButton>
                </div>
            </PageContainer>
        </div>
    );
};

export default ReligiousClientPage;
