
'use client';

import React from 'react';
import { Heart, CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, ArrowRight, Baby } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const FamilyClientPage: React.FC = () => {
    const VISA_CONFIG = {
        name: "Visa Famille (Non-O)",
        type: "Regroupement Familial",
        audience: "Conjoints de Thaïlandais, Parents d'enfants Thaï",
        duration: "90 jours (renouvelable 1 an)",
        work_allowed: true, // Avec permis de travail
        risk_level: "low"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={IMAGES.BEACH || "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Famille en Thaïlande"
                title={`${VISA_CONFIG.name} – Thaïlande`}
                subtitle={`Rejoindre son conjoint ou ses enfants (${new Date().getFullYear()})`}
                icon={<Heart className="h-6 w-6" />}
                badge={VISA_CONFIG.type}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{`Qu’est-ce que le ${VISA_CONFIG.name} ?`}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                Le Visa Non-Immigrant O (Option "Thai Family") permet de résider en Thaïlande sur la base de liens familiaux directs avec un(e) ressortissant(e) thaïlandais(e). C'est le visa de référence pour les époux/épouses de Thaïlandais et les parents étrangers dont l'enfant a la nationalité thaïlandaise.
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
                                    <li>• Marié(e) légalement à un(e) Thaï(e).</li>
                                    <li>• Parent légal d'un enfant Thaï.</li>
                                    <li>• Dépendant (enfant/époux) d'un titulaire de visa travail/retraite.</li>
                                </ul>
                            </Card>
                            <Card variant="white" className="p-6 border-l-4 border-slate-300 bg-slate-50/50 opacity-75">
                                <h3 className="font-bold text-slate-700 mb-3">Profils Non Compatibles</h3>
                                <ul className="space-y-2 text-slate-500">
                                    <li>• Concubinage / Union libre (non reconnu).</li>
                                    <li>• "Petite amie" sans certificat de mariage.</li>
                                    <li>• Amis ou cousins éloignés.</li>
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
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Extension Max</div>
                                <div className="text-xl font-bold text-slate-900">1 An (Renouvelable)</div>
                            </Card>
                        </div>
                    </section>

                    <section id="conditions">
                        <SectionTitle>Conditions et critères principaux</SectionTitle>
                        <Card variant="white" className="p-6">
                            <ul className="space-y-3">
                                {[
                                    "Certificat de mariage officiel (Kor Ror 2/3) OU Acte de naissance de l'enfant.",
                                    "Preuve financière (Mariage) : 400 000 THB bloqués en banque ou 40 000 THB revenu mensuel.",
                                    "Preuve de cohabitation (Photos, plan maison, témoignages).",
                                    "Visite possible de l'immigration au domicile."
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
                                    <h3 className="text-lg font-bold text-green-800 mb-1">Travail Autorisé (Sous conditions)</h3>
                                    <p className="text-slate-700">
                                        Contrairement aux visas touristiques, le Visa Non-O Famille <strong>permet de demander un permis de travail</strong> (Work Permit). Une fois le permis obtenu, vous pouvez travailler légalement pour n'importe quelle entreprise thaïlandaise sans avoir besoin d'un Visa Business (Non-B), ce qui facilite grandement l'embauche.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>

                    <section id="renewal">
                        <SectionTitle>Renouvellement et extensions</SectionTitle>
                        <Card variant="white" className="p-6">
                            <p className="text-slate-600 mb-4">
                                L'extension annuelle se fait au bureau de l'immigration. Le processus prend environ 30 jours (une période "sous considération"). Vous devez prouver chaque année que les fonds sont toujours en banque et que la relation maritale est toujours active (photos récentes, entretien conjoint).
                            </p>
                        </Card>
                    </section>

                    <section id="limitations">
                        <SectionTitle>Limitations et points de vigilance</SectionTitle>
                        <Card variant="white" className="p-6 bg-amber-50 border-amber-100">
                            <div className="flex items-start text-amber-800">
                                <ShieldAlert className="h-6 w-6 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-2">Divorce = Annulation</h3>
                                    <p className="text-sm leading-relaxed">
                                        En cas de divorce, le visa est annulé immédiatement (souvent 7 jours pour quitter le territoire). C'est une situation précaire pour ceux qui dépendent entièrement de ce visa.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="dark" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-white mb-2">Besoin d'assistance mariage ?</h3>
                        <p className="text-slate-400 mb-6 text-sm">Nous gérons la paperasse pour l'extension mariage.</p>
                        <CTAButton href="https://desk.siamvisapro.com" variant="primary" fullWidth>
                            Contacter un expert
                        </CTAButton>
                    </Card>
                    <Card variant="white" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Pas encore marié ?</h3>
                        <p className="text-slate-500 mb-6 text-sm">Regardez les visas longue durée individuels.</p>
                        <a href="/fr/elite-visa" className="text-amber-600 font-semibold hover:underline flex items-center">
                            Voir le Visa Elite (Indépendant) <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

export default FamilyClientPage;
