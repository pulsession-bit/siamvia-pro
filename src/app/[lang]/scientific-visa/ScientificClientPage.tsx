
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
    const VISA_CONFIG = {
        name: "Visa Recherche Scientifique (Non-RS)",
        type: "Recherche & Innovation",
        audience: "Chercheurs, Experts, Scientifiques",
        duration: "1 an (renouvelable)",
        work_allowed: true,
        risk_level: "low"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={"https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Laboratoire Thaïlande"
                title={`${VISA_CONFIG.name} – Thaïlande`}
                subtitle={`Contribuer à l'avancement scientifique en Thaïlande (${new Date().getFullYear()})`}
                icon={<Microscope className="h-6 w-6" />}
                badge={VISA_CONFIG.type}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{`Qu’est-ce que le ${VISA_CONFIG.name} ?`}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                Le Visa Non-Immigrant RS (Research & Science) est conçu pour les experts et chercheurs souhaitant mener des travaux scientifiques, de la formation ou de la recherche technologique au sein d'un institut thaïlandais ou en collaboration avec une agence gouvernementale.
                            </p>
                        </Card>
                    </section>

                    <section id="audience">
                        <SectionTitle>Profils éligibles</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-6">
                                <FlaskConical className="h-8 w-8 text-blue-500 mb-3" />
                                <h3 className="font-bold text-slate-900 mb-2">Experts Techniques</h3>
                                <p className="text-sm text-slate-600">Ingénieurs et spécialistes en transfert de technologie.</p>
                            </Card>
                            <Card variant="white" className="p-6">
                                <GraduationCap className="h-8 w-8 text-green-500 mb-3" />
                                <h3 className="font-bold text-slate-900 mb-2">Chercheurs Académiques</h3>
                                <p className="text-sm text-slate-600">Scientifiques en mission dans des universités ou centres de recherche nationaux.</p>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>Conditions Requises</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {[
                                    "Invitation d'un organisme de recherche thaïlandais (ex: NRCT).",
                                    "Accord de coopération scientifique entre les institutions.",
                                    "Certificats de diplômes et CV détaillé.",
                                    "Preuve de financement de la recherche.",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-3 mt-2 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>
                </div>
            </PageContainer>
        </div>
    );
};

export default ScientificClientPage;
