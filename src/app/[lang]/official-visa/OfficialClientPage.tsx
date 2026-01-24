
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
    const VISA_CONFIG = {
        name: "Visa Officiel (Non-F)",
        type: "Diplomatie & État",
        audience: "Diplomates, Fonctionnaires, Employés d'OI",
        duration: "Selon la mission",
        work_allowed: true,
        risk_level: "low"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={"https://images.unsplash.com/photo-1541872703-74c5e440d12e?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Gouvernement Thaïlande"
                title={`${VISA_CONFIG.name} – Thaïlande`}
                subtitle={`Missions diplomatiques et officielles en Thaïlande (${new Date().getFullYear()})`}
                icon={<Landmark className="h-6 w-6" />}
                badge={VISA_CONFIG.type}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{`Qu’est-ce que le ${VISA_CONFIG.name} ?`}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                Le Visa Non-Immigrant F (Official) est réservé aux personnes en mission officielle en Thaïlande. Cela inclut les diplomates, les fonctionnaires travaillant pour des gouvernements étrangers ou des organisations internationales reconnues, ainsi que leurs familles.
                            </p>
                        </Card>
                    </section>

                    <section id="audience">
                        <SectionTitle>Bénéficiaires</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-6 flex items-start space-x-4">
                                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Corps Diplomatique</h3>
                                    <p className="text-sm text-slate-600">Ambassades, Consulats, Attachés militaires.</p>
                                </div>
                            </Card>
                            <Card variant="white" className="p-6 flex items-start space-x-4">
                                <Users className="h-6 w-6 text-green-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-900">OI / ONU</h3>
                                    <p className="text-sm text-slate-600">Employés des Nations Unies, UNICEF, etc., basés à Bangkok.</p>
                                </div>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>Exigences spécifiques</SectionTitle>
                        <Card variant="white" className="p-6 bg-slate-50">
                            <p className="text-slate-700 italic">
                                "Ce visa demande impérativement une note verbale ou un ordre de mission officiel émanant du gouvernement d'origine ou de l'organisation internationale concernée."
                            </p>
                        </Card>
                    </section>
                </div>
            </PageContainer>
        </div>
    );
};

export default OfficialClientPage;
