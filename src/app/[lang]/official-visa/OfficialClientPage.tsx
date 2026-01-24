
'use client';

import React from 'react';
import { Shield, CheckCircle2, AlertTriangle, Clock, Globe, Landmark, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const OfficialClientPage: React.FC = () => {
    const { t } = useLanguage();

    const VISA_CONFIG = {
        name: t('official_visa_page.hero_title').split(' – ')[0],
        type: t('official_visa_page.hero_badge'),
        audience: t('official_visa_page.hero_subtitle'),
        duration: "Selon la mission",
        work_allowed: true,
        risk_level: "low"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={"https://images.unsplash.com/photo-1541872703-74c5e440d12e?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Gouvernement Thaïlande"
                title={t('official_visa_page.hero_title')}
                subtitle={`${t('official_visa_page.hero_subtitle')} (${new Date().getFullYear()})`}
                icon={<Landmark className="h-6 w-6" />}
                badge={t('official_visa_page.hero_badge')}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{t('official_visa_page.definition_title')}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                {t('official_visa_page.definition_content')}
                            </p>
                        </Card>
                    </section>

                    <section id="audience">
                        <SectionTitle>{t('official_visa_page.audience_title')}</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-6 flex items-start space-x-4">
                                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-900">{t('official_visa_page.audience_diplomatic_title')}</h3>
                                    <p className="text-sm text-slate-600">{t('official_visa_page.audience_diplomatic_text')}</p>
                                </div>
                            </Card>
                            <Card variant="white" className="p-6 flex items-start space-x-4">
                                <Users className="h-6 w-6 text-green-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-900">{t('official_visa_page.audience_oi_title')}</h3>
                                    <p className="text-sm text-slate-600">{t('official_visa_page.audience_oi_text')}</p>
                                </div>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>{t('official_visa_page.conditions_title')}</SectionTitle>
                        <Card variant="white" className="p-6 bg-slate-50">
                            <p className="text-slate-700 italic">
                                {t('official_visa_page.conditions_text')}
                            </p>
                        </Card>
                    </section>
                </div>

                <div className="mt-16 text-center">
                    <CTAButton href="https://desk.siamvisapro.com" variant="primary">
                        {t('official_visa_page.cta_btn')}
                    </CTAButton>
                </div>
            </PageContainer>
        </div>
    );
};

export default OfficialClientPage;
