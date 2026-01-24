
'use client';

import React from 'react';
import { Stethoscope, CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, ArrowRight, Activity, House } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const MedicalClientPage: React.FC = () => {
    const VISA_CONFIG = {
        name: "Visa Médical (Non-MT / Non-O)",
        type: "Soins & Santé",
        audience: "Patients étrangers et leurs accompagnateurs",
        duration: "60-90 jours (renouvelable)",
        work_allowed: false,
        risk_level: "low"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Hôpital de luxe Thaïlande"
                title={`${VISA_CONFIG.name} – Thaïlande`}
                subtitle={`Bénéficiez de soins de classe mondiale en Thaïlande (${new Date().getFullYear()})`}
                icon={<Stethoscope className="h-6 w-6" />}
                badge={VISA_CONFIG.type}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{`Qu’est-ce que le ${VISA_CONFIG.name} ?`}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                La Thaïlande est une destination majeure du tourisme médical. Le Visa Médical (souvent sous la forme d'un Non-Immigrant O ou du nouveau Non-MT) permet aux patients étrangers de séjourner dans le royaume pour des traitements chirurgicaux, des soins de longue durée ou des cures de réhabilitation.
                            </p>
                        </Card>
                    </section>

                    <section id="audience">
                        <SectionTitle>Services et Profils concernés</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-6 border-l-4 border-blue-500">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                                    <Activity className="h-5 w-5 text-blue-500 mr-2" />
                                    Types de Soins
                                </h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li>• Chirurgie esthétique et réparatrice.</li>
                                    <li>• Soins dentaires complexes.</li>
                                    <li>• Bilans de santé complets (Check-up).</li>
                                    <li>• Traitements chroniques (Dialyse, etc.).</li>
                                </ul>
                            </Card>
                            <Card variant="white" className="p-6 border-l-4 border-green-500">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                                    <House className="h-5 w-5 text-green-500 mr-2" />
                                    Accompagnateurs
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Jusqu'à 3 membres de la famille ou aidants peuvent généralement obtenir un visa de dépendant pour accompagner le patient durant son traitement.
                                </p>
                            </Card>
                        </div>
                    </section>

                    <section id="duration">
                        <SectionTitle>Durée et Prolongations</SectionTitle>
                        <div className="grid grid-cols-2 gap-4">
                            <Card variant="white" className="p-5 text-center">
                                <Clock className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Validité Type</div>
                                <div className="text-xl font-bold text-slate-900">90 jours</div>
                            </Card>
                            <Card variant="white" className="p-5 text-center">
                                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Extension</div>
                                <div className="text-xl font-bold text-slate-900">Selon certificat médical</div>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>Documents Requis</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {[
                                    "Certificat médical délivré par un hôpital thaïlandais certifié.",
                                    "Lettre d'invitation de l'établissement de santé.",
                                    "Preuve de fonds suffisants pour couvrir les soins et le séjour.",
                                    "Assurance santé couvrant spécifiquement le traitement si requis.",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-3 mt-2 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>

                    <section id="assistance">
                        <SectionTitle>L'avantage des hôpitaux privés</SectionTitle>
                        <Card variant="white" className="p-6 bg-slate-50 border-slate-200 italic">
                            <p className="text-slate-600">
                                "La plupart des grands hôpitaux internationaux (Bumrungrad, Bangkok Hospital, Samitivej) disposent de centres de visas internes pour aider les patients avec leurs extensions sans avoir à se déplacer à l'Immigration centrale."
                            </p>
                        </Card>
                    </section>
                </div>

                <div className="mt-16">
                    <Card variant="dark" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Besoin d'une liaison médicale ?</h3>
                        <p className="text-slate-400 mb-8 max-w-lg">Nous collaborons avec les meilleurs établissements pour faciliter votre admission et votre visa.</p>
                        <CTAButton href="https://desk.siamvisapro.com" variant="primary">
                            Contacter notre service conciergerie
                        </CTAButton>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

export default MedicalClientPage;
