
'use client';

import React from 'react';
import { Briefcase, CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, ArrowRight, Plane } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const ExemptionClientPage: React.FC = () => {
    const { t } = useLanguage();

    const VISA_CONFIG = {
        name: "Exemption de Visa (60 Jours)",
        type: "Tourisme Court Séjour",
        audience: "Touristes (France, Belgique, Canada...)",
        duration: "60 jours + 30 jours extension",
        work_allowed: false,
        risk_level: "low"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={IMAGES.BEACH || "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Plage Thaïlande"
                title={`${VISA_CONFIG.name} – Thaïlande`}
                subtitle={`Entrée sans visa, conditions et durée de séjour (${new Date().getFullYear()})`}
                icon={<Plane className="h-6 w-6" />}
                badge={VISA_CONFIG.type}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{`Qu’est-ce que l'${VISA_CONFIG.name} ?`}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                L'Exemption de Visa permet aux ressortissants de 93 pays (dont la France, la Belgique, le Canada) d'entrer en Thaïlande <strong>sans avoir à demander de visa</strong> au préalable. C'est la solution la plus simple pour les séjours touristiques de moins de 2 mois (depuis la réforme de mi-2024 passant de 30 à 60 jours).
                            </p>
                        </Card>
                    </section>

                    <section id="audience">
                        <SectionTitle>À qui s’adresse cette exemption ?</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card variant="white" className="p-6 border-l-4 border-green-500">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                                    Profils Compatibles
                                </h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li>• Touristes en vacances (2-3 mois max).</li>
                                    <li>• Visites familiales courtes.</li>
                                    <li>• Rendez-vous médicaux ponctuels.</li>
                                </ul>
                            </Card>
                            <Card variant="white" className="p-6 border-l-4 border-slate-300 bg-slate-50/50 opacity-75">
                                <h3 className="font-bold text-slate-700 mb-3">Profils Non Compatibles</h3>
                                <ul className="space-y-2 text-slate-500">
                                    <li>• Télétravailleurs longue durée (Risque refus).</li>
                                    <li>• Personnes souhaitant s'installer.</li>
                                    <li>• Travailleurs locaux (Strictement interdit).</li>
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
                                <div className="text-xl font-bold text-slate-900">60 jours</div>
                            </Card>
                            <Card variant="white" className="p-5 text-center">
                                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Extension Sur Place</div>
                                <div className="text-xl font-bold text-slate-900">+ 30 Jours</div>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>Conditions et critères principaux</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {[
                                    "Passeport valide au moins 6 mois à l'arrivée.",
                                    "Billet de sortie confirmé sous 60 jours (souvent demandé par les compagnies aériennes).",
                                    "Preuve de fonds suffisants (10 000 THB/personne, rarement vérifié mais obligatoire).",
                                    "Ne pas être sur liste noire (Blacklist)."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-3 mt-2 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>

                    <section id="work">
                        <SectionTitle>Travail et activités autorisées</SectionTitle>
                        <Card variant="white" className="p-6 border-l-4 border-red-500 bg-red-50/10">
                            <div className="flex items-start mb-4">
                                <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-red-800 mb-1">Interdiction de Travail</h3>
                                    <p className="text-slate-700">
                                        L'exemption de visa est un statut purement touristique. Il est <strong>strictement interdit de travailler</strong> (même bénévolement) en Thaïlande avec ce statut. Le télétravail discret est toléré pour de très courtes durées, mais risqué sur le long terme.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>

                    <section id="renewal">
                        <SectionTitle>Renouvellement et extensions</SectionTitle>
                        <Card variant="white" className="p-6">
                            <p className="text-slate-600 mb-4">
                                Vous pouvez prolonger votre séjour <strong>une seule fois</strong> de 30 jours au bureau de l'immigration local (coût : 1 900 THB).
                                Pour rester plus longtemps, vous devrez sortir du pays (Visa Run) et rentrer à nouveau, mais attention : l'immigration limite le nombre d'entrées terrestres (2 par an) et surveille les abus aériens.
                            </p>
                        </Card>
                    </section>

                    <section id="limitations">
                        <SectionTitle>Limitations et points de vigilance</SectionTitle>
                        <Card variant="white" className="p-6 bg-slate-50 border-slate-200">
                            <div className="flex items-start text-slate-700">
                                <ShieldAlert className="h-6 w-6 mr-3 flex-shrink-0 text-slate-500" />
                                <div>
                                    <h3 className="font-bold mb-2">Refus d'embarquement</h3>
                                    <p className="text-sm leading-relaxed">
                                        Si vous n'avez pas de billet de retour/sortie sous 60 jours, la compagnie aérienne peut vous refuser l'embarquement au départ de l'Europe. Pensez à louer un billet ou en acheter un modifiable si votre plan est flou.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="dark" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-white mb-2">Vous voulez rester plus longtemps ?</h3>
                        <p className="text-slate-400 mb-6 text-sm">Découvrez le Visa DTV (5 ans) ou LTR (10 ans).</p>
                        <CTAButton href="/fr/dtv" variant="primary" fullWidth>
                            Voir le Visa DTV
                        </CTAButton>
                    </Card>
                    <Card variant="white" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Comparer les options</h3>
                        <p className="text-slate-500 mb-6 text-sm">Touriste, Exemption ou Retraite ?</p>
                        <a href="/fr/tourist-visa" className="text-amber-600 font-semibold hover:underline flex items-center">
                            Voir le Visa Touristique (TR) <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

export default ExemptionClientPage;
