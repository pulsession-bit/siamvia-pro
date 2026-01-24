
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
    const VISA_CONFIG = {
        name: "Visa Religieux (Non-R)",
        type: "Mission & Culte",
        audience: "Moines, Missionnaires, Travailleurs religieux",
        duration: "90 jours (renouvelable jusqu'à 1 an)",
        work_allowed: false,
        risk_level: "low"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={"https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Temple Thaïlande"
                title={`${VISA_CONFIG.name} – Thaïlande`}
                subtitle={`Mission religieuse ou étude du bouddhisme (${new Date().getFullYear()})`}
                icon={<Sun className="h-6 w-6" />}
                badge={VISA_CONFIG.type}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{`Qu’est-ce que le ${VISA_CONFIG.name} ?`}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                Le Visa Non-Immigrant R (Religious) est réservé aux étrangers souhaitant s'engager dans des activités religieuses officielles en Thaïlande. Cela concerne les ministres du culte, les moines, ainsi que les missionnaires parrainés par une organisation religieuse reconnue par le Département des Affaires Religieuses (DRA).
                            </p>
                        </Card>
                    </section>

                    <section id="conditions">
                        <SectionTitle>Profils et Conditions</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {[
                                    "Être parrainé par une organisation religieuse enregistrée en Thaïlande.",
                                    "Approbation du Département des Affaires Religieuses ou du Bureau National du Bouddhisme.",
                                    "Engagement formel à ne pas percevoir de salaire (hors indemnités de subsistance).",
                                    "Preuve de résidence au sein de l'institution religieuse.",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-3 mt-2 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>

                    <section id="duration">
                        <SectionTitle>Validité et Extensions</SectionTitle>
                        <div className="grid grid-cols-2 gap-4">
                            <Card variant="white" className="p-5 text-center">
                                <Clock className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Validité Initiale</div>
                                <div className="text-xl font-bold text-slate-900">90 jours</div>
                            </Card>
                            <Card variant="white" className="p-5 text-center">
                                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Extension Max</div>
                                <div className="text-xl font-bold text-slate-900">1 An (Renouvelable)</div>
                            </Card>
                        </div>
                    </section>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-500 text-sm mb-6 italic">Ce visa demande une coordination étroite avec les autorités religieuses nationales.</p>
                    <CTAButton href="https://desk.siamvisapro.com" variant="secondary" className="px-10">
                        Demander un conseil spécifique
                    </CTAButton>
                </div>
            </PageContainer>
        </div>
    );
};

export default ReligiousClientPage;
