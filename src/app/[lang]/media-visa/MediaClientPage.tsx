
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
    const VISA_CONFIG = {
        name: "Visa Média (Non-M)",
        type: "Presse & Journalisme",
        audience: "Journalistes, Correspondants, Équipes de tournage",
        duration: "90 jours (renouvelable jusqu'à 1 an)",
        work_allowed: true,
        risk_level: "medium"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={"https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Journalisme Thaïlande"
                title={`${VISA_CONFIG.name} – Thaïlande`}
                subtitle={`Couvrir l'actualité ou produire des contenus en Thaïlande (${new Date().getFullYear()})`}
                icon={<Newspaper className="h-6 w-6" />}
                badge={VISA_CONFIG.type}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{`Qu’est-ce que le ${VISA_CONFIG.name} ?`}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                Le Visa Non-Immigrant M (Media) s'adresse aux professionnels des médias certifiés. Contrairement au visa touristique, il permet légalement de travailler comme journaliste, correspondant de presse ou membre d'une équipe de production audiovisuelle sur le territoire thaïlandais.
                            </p>
                        </Card>
                    </section>

                    <section id="accreditation">
                        <SectionTitle>L'Accréditation : Étape Majeure</SectionTitle>
                        <Card variant="white" className="p-6 border-l-4 border-amber-500">
                            <p className="mb-4 font-semibold text-slate-800">Avant de demander le visa, vous devez obtenir l'accréditation du Ministère des Affaires Étrangères (MFA).</p>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• Enregistrement sur le portail en ligne du MFA (M-Press).</li>
                                <li>• Présentation de la carte de presse et d'une lettre de l'employeur.</li>
                                <li>• Vérification des antécédents par le Département des Relations Publiques.</li>
                            </ul>
                        </Card>
                    </section>

                    <section id="duration">
                        <SectionTitle>Conditions et Validité</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-5 flex items-center space-x-4">
                                <Clock className="h-8 w-8 text-amber-500" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-bold">Durée</div>
                                    <div className="text-lg font-bold">1 an (renouvelable)</div>
                                </div>
                            </Card>
                            <Card variant="white" className="p-5 flex items-center space-x-4">
                                <Video className="h-8 w-8 text-blue-500" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-bold">Activité</div>
                                    <div className="text-lg font-bold">Reportage & Production</div>
                                </div>
                            </Card>
                        </div>
                    </section>

                    <section id="warning">
                        <SectionTitle>Mise en garde tournage</SectionTitle>
                        <Card variant="white" className="p-6 bg-red-50 border-red-100">
                            <div className="flex items-start text-red-800">
                                <AlertTriangle className="h-6 w-6 mr-3 flex-shrink-0" />
                                <p className="text-sm">
                                    Filmer pour une production commerciale avec un simple visa touriste est passible de fortes amendes et d'expulsion. Pour les tournages de films ou documentaires, le permis du "Thailand Film Office" est également requis.
                                </p>
                            </div>
                        </Card>
                    </section>
                </div>

                <div className="mt-16">
                    <CTAButton href="https://desk.siamvisapro.com" variant="primary" fullWidth>
                        Assistance accréditation MFA
                    </CTAButton>
                </div>
            </PageContainer>
        </div>
    );
};

export default MediaClientPage;
