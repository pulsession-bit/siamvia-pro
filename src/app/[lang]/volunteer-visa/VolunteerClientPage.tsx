
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
    const VISA_CONFIG = {
        name: "Visa Volontaire (Non-O Volunteer)",
        type: "Bénévolat & Humanitaire",
        audience: "Bénévoles en ONG, Fondations, Associations caritatives",
        duration: "90 jours (renouvelable jusqu'à 1 an)",
        work_allowed: false,
        risk_level: "high"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Bénévolat Thaïlande"
                title={`${VISA_CONFIG.name} – Thaïlande`}
                subtitle={`S'engager pour une cause humanitaire en Thaïlande (${new Date().getFullYear()})`}
                icon={<Heart className="h-6 w-6" />}
                badge={VISA_CONFIG.type}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{`Qu’est-ce que le ${VISA_CONFIG.name} ?`}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                Le Visa Non-Immigrant O (Volunteer) est destiné aux étrangers souhaitant effectuer un travail bénévole non rémunéré au sein d'une organisation caritative, d'une fondation publique ou d'une ONG reconnue en Thaïlande. C'est un visa très encadré pour éviter les abus liés au travail déguisé.
                            </p>
                        </Card>
                    </section>

                    <section id="audience">
                        <SectionTitle>À qui s’adresse ce visa ?</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-6 border-l-4 border-green-500">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                                    Profils Compatibles
                                </h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li>• Bénévoles dans des fondations enregistrées.</li>
                                    <li>• Travailleurs humanitaires en mission.</li>
                                    <li>• Aide aux éléphants / protection animale.</li>
                                </ul>
                            </Card>
                            <Card variant="white" className="p-6 border-l-4 border-red-300 bg-slate-50/50 opacity-75">
                                <h3 className="font-bold text-slate-700 mb-3">Profils Non Compatibles</h3>
                                <ul className="space-y-2 text-slate-500">
                                    <li>• Volontourisme de courte durée (- de 30j).</li>
                                    <li>• Personnes sans invitation officielle.</li>
                                    <li>• Travailleurs cherchant à éviter le visa Business.</li>
                                </ul>
                            </Card>
                        </div>
                    </section>

                    <section id="duration">
                        <SectionTitle>Durée de séjour et validité</SectionTitle>
                        <div className="grid grid-cols-2 gap-4">
                            <Card variant="white" className="p-5 text-center">
                                <Clock className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Durée Initiale</div>
                                <div className="text-xl font-bold text-slate-900">90 jours</div>
                            </Card>
                            <Card variant="white" className="p-5 text-center">
                                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Max Total</div>
                                <div className="text-xl font-bold text-slate-900">1 An (Extensions)</div>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>Conditions et critères indispensables</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {[
                                    "Lettre officielle de l'organisation enregistrée en Thaïlande.",
                                    "Copie de la licence de la fondation / ONG.",
                                    "Work Permit obligatoire (même pour du bénévolat).",
                                    "Casier judiciaire souvent requis pour l'enseignement.",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-3 mt-2 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>

                    <section id="warning">
                        <SectionTitle>Vigilance : Le "Grey Area"</SectionTitle>
                        <Card variant="white" className="p-6 border-l-4 border-amber-500 bg-amber-50/10">
                            <div className="flex items-start">
                                <ShieldAlert className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-amber-800 mb-1">Réglementation stricte</h3>
                                    <p className="text-slate-700">
                                        Beaucoup d'agences vendent des "Visas Volontaires" sans réel engagement humanitaire. L'immigration thaïlandaise surveille de très près ces visas. En cas de contrôle, si vous n'êtes pas capable de prouver votre activité réelle au sein de l'ONG, le visa sera annulé.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

                <div className="mt-16">
                    <Card variant="dark" className="p-8 text-center flex flex-col justify-center items-center">
                        <HelpingHand className="h-12 w-12 text-amber-500 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Besoin d'aide pour votre dossier ?</h3>
                        <p className="text-slate-400 mb-8 max-w-lg">Le visa volontaire demande une documentation complexe de la part de l'association. Nous vous aidons à vérifier la conformité.</p>
                        <CTAButton href="https://desk.siamvisapro.com" variant="primary">
                            Consulter un expert
                        </CTAButton>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

export default VolunteerClientPage;
