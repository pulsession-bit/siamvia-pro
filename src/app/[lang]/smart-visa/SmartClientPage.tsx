
'use client';

import React from 'react';
import { Lightbulb, CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const SmartClientPage: React.FC = () => {
    const VISA_CONFIG = {
        name: "SMART Visa",
        type: "Talents & Innovation",
        audience: "Experts Tech, Investisseurs, Dirigeants, Startups",
        duration: "4 ans (ou durée du contrat)",
        work_allowed: true, // Sans Work Permit classique
        risk_level: "low"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={IMAGES.OFFICE || "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Innovation Hub Bangkok"
                title={`${VISA_CONFIG.name} – Thaïlande`}
                subtitle={`Le visa de 4 ans pour les talents et investisseurs (${new Date().getFullYear()})`}
                icon={<Lightbulb className="h-6 w-6" />}
                badge={VISA_CONFIG.type}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{`Qu’est-ce que le ${VISA_CONFIG.name} ?`}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                Le SMART Visa est un visa spécial conçu pour attirer les talents hautement qualifiés, les investisseurs, les dirigeants et les startups dans les industries cibles ("S-Curve Industries") comme la Tech, la Santé, ou l'Environnement. Il offre des avantages exceptionnels comme l'exemption de permis de travail classique et une durée de 4 ans.
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
                                    <li>• <strong>SMART T (Talent)</strong> : Experts earning &gt;100k THB/mois.</li>
                                    <li>• <strong>SMART I (Investor)</strong> : Investisseurs directs (&gt;20M THB).</li>
                                    <li>• <strong>SMART S (Startup)</strong> : Fondateurs de startups tech.</li>
                                    <li>• <strong>SMART E (Executive)</strong> : Cadres supérieurs.</li>
                                </ul>
                            </Card>
                            <Card variant="white" className="p-6 border-l-4 border-slate-300 bg-slate-50/50 opacity-75">
                                <h3 className="font-bold text-slate-700 mb-3">Industries Cibles</h3>
                                <ul className="space-y-2 text-slate-500">
                                    <li>• Digital & Tech, Automatisation.</li>
                                    <li>• Santé & Bien-être, BioTech.</li>
                                    <li>• Énergie verte, Aviation, Agriculture.</li>
                                </ul>
                            </Card>
                        </div>
                    </section>

                    <section id="duration">
                        <SectionTitle>Durée de séjour et validité</SectionTitle>
                        <div className="grid grid-cols-2 gap-4">
                            <Card variant="white" className="p-5 text-center">
                                <Clock className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Durée Standard</div>
                                <div className="text-xl font-bold text-slate-900">4 Ans</div>
                            </Card>
                            <Card variant="white" className="p-5 text-center">
                                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Reporting</div>
                                <div className="text-xl font-bold text-slate-900">1 An (vs 90 jours)</div>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>Conditions et critères principaux</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {[
                                    "Approbation par le BOI (Board of Investment) obligatoire.",
                                    "Salaire minimum de 100 000 THB (Talent) ou 200 000 THB (Executive).",
                                    "Investissement direct de 20 Millions THB (Investor).",
                                    "Entreprise certifiée dans les industries cibles.",
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
                        <Card variant="white" className="p-6 border-l-4 border-green-500 bg-green-50/10">
                            <div className="flex items-start mb-4">
                                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-green-800 mb-1">Pas de Permis de Travail Requis</h3>
                                    <p className="text-slate-700">
                                        Le SMART Visa <strong>remplace le permis de travail</strong>. Vous n'avez pas besoin de demander le livret bleu (Work Permit) séparément. De plus, votre conjoint et vos enfants bénéficient du même statut et peuvent vivre (et travailler, sous conditions) en Thaïlande.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>

                    <section id="renewal">
                        <SectionTitle>Renouvellement et extensions</SectionTitle>
                        <Card variant="white" className="p-6">
                            <p className="text-slate-600 mb-4">
                                Le visa est renouvelable tous les 4 ans (ou à la fin du contrat) tant que vous remplissez les critères du BOI. L'avantage majeur est le reporting à l'immigration qui se fait <strong>une fois par an</strong> au lieu de tous les 90 jours sur les autres visas.
                            </p>
                        </Card>
                    </section>

                    <section id="limitations">
                        <SectionTitle>Limitations et points de vigilance</SectionTitle>
                        <Card variant="white" className="p-6 bg-slate-50 border-slate-200">
                            <div className="flex items-start text-slate-700">
                                <ShieldAlert className="h-6 w-6 mr-3 flex-shrink-0 text-slate-500" />
                                <div>
                                    <h3 className="font-bold mb-2">Processus complexe</h3>
                                    <p className="text-sm leading-relaxed">
                                        L'obtention nécessite une validation technique par le BOI avant la demande de visa. Le processus complet peut prendre 1 à 2 mois. Ce n'est pas un visa "rapide" comme le DTV.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="dark" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-white mb-2">Votre entreprise est éligible ?</h3>
                        <p className="text-slate-400 mb-6 text-sm">Vérifiez si vous pouvez obtenir le SMART Visa.</p>
                        <CTAButton href="https://desk.siamvisapro.com" variant="primary" fullWidth>
                            Faire une simulation
                        </CTAButton>
                    </Card>
                    <Card variant="white" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Comparer les options</h3>
                        <p className="text-slate-500 mb-6 text-sm">SMART Visa vs LTR (Long Term Resident).</p>
                        <a href="/fr/ltr" className="text-amber-600 font-semibold hover:underline flex items-center">
                            Voir le Visa LTR <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

export default SmartClientPage;
