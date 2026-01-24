
'use client';

import React from 'react';
import { GraduationCap, CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const StudentClientPage: React.FC = () => {
    const VISA_CONFIG = {
        name: "Visa Étudiant (Non-ED)",
        type: "Études & Formation",
        audience: "Étudiants universitaires, Apprenants en langue, Stagiaires",
        duration: "90 jours (renouvelable jusqu'à 1 an)",
        work_allowed: false,
        risk_level: "medium"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={IMAGES.OFFICE || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Université Thaïlande"
                title={`${VISA_CONFIG.name} – Thaïlande`}
                subtitle={`Étudier à l'université ou apprendre le Thaï (${new Date().getFullYear()})`}
                icon={<GraduationCap className="h-6 w-6" />}
                badge={VISA_CONFIG.type}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{`Qu’est-ce que le ${VISA_CONFIG.name} ?`}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                Le Visa Non-Immigrant ED (Education) est destiné aux étrangers souhaitant poursuivre des études à temps plein en Thaïlande. Cela inclut les cursus universitaires, les stages obligatoires, mais aussi les cours de langue (Thaï, Anglais) ou les formations culturelles (Muay Thai, Cuisine) dans des écoles certifiées.
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
                                    <li>• Étudiants en échange universitaire.</li>
                                    <li>• Personnes apprenant le Thaï (écoles privées).</li>
                                    <li>• Élèves de Muay Thai (camps certifiés).</li>
                                </ul>
                            </Card>
                            <Card variant="white" className="p-6 border-l-4 border-slate-300 bg-slate-50/50 opacity-75">
                                <h3 className="font-bold text-slate-700 mb-3">Profils Non Compatibles</h3>
                                <ul className="space-y-2 text-slate-500">
                                    <li>• "Faux étudiants" ne fréquentant pas les cours.</li>
                                    <li>• Travailleurs déguisés (illégal).</li>
                                    <li>• Touristes cherchant long séjour facile.</li>
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
                        <SectionTitle>Conditions et critères principaux</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {[
                                    "Être inscrit dans une école ou université reconnue par le Ministère de l'Éducation.",
                                    "Lettre d'acceptation officielle de l'établissement.",
                                    "Assiduité aux cours (contrôles fréquents).",
                                    "Preuve de paiement des frais de scolarité.",
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
                                        Le Visa Étudiant <strong>interdit formellement de travailler</strong> en Thaïlande. Cela inclut le travail en freelance ou le "Digital Nomadisme" s'il est découvert.
                                        <em>Exception : Certains stages universitaires officiels ou emplois sur le campus peuvent être autorisés sous conditions strictes.</em>
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>

                    <section id="renewal">
                        <SectionTitle>Renouvellement et extensions</SectionTitle>
                        <Card variant="white" className="p-6">
                            <p className="text-slate-600 mb-4">
                                Le visa est généralement délivré pour 90 jours. Il doit être étendu tous les 90 jours à l'immigration (1 900 THB) sur présentation d'une lettre de l'école confirmant votre assiduité. La durée maximale totale est souvent de 1 an pour les écoles de langue.
                            </p>
                        </Card>
                    </section>

                    <section id="limitations">
                        <SectionTitle>Limitations et points de vigilance</SectionTitle>
                        <Card variant="white" className="p-6 bg-amber-50 border-amber-100">
                            <div className="flex items-start text-amber-800">
                                <ShieldAlert className="h-6 w-6 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-2">Contrôles de l'immigration</h3>
                                    <p className="text-sm leading-relaxed">
                                        L'immigration effectue des tests de langue aléatoires lors des extensions. Si vous possédez un visa ED "Langue Thaï" mais ne parlez pas un mot de Thaï, votre extension sera refusée et votre visa annulé.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="dark" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-white mb-2">Vous cherchez une école ?</h3>
                        <p className="text-slate-400 mb-6 text-sm">Nos partenaires éducatifs peuvent vous aider.</p>
                        <CTAButton href="https://desk.siamvisapro.com" variant="primary" fullWidth>
                            Trouver une école
                        </CTAButton>
                    </Card>
                    <Card variant="white" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Comparer les options</h3>
                        <p className="text-slate-500 mb-6 text-sm">Étudiant vs DTV (si vous travaillez en ligne).</p>
                        <a href="/fr/dtv" className="text-amber-600 font-semibold hover:underline flex items-center">
                            Voir le Visa DTV <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

export default StudentClientPage;
