
'use client';

import React from 'react';
import { Briefcase, CheckCircle2, AlertTriangle, Clock, Globe, ShieldAlert, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES, URLS } from '@/constants';
import {
    HeroSection,
    PageContainer,
    SectionTitle,
    Card,
    CTAButton
} from '@/components/ui/PageComponents';

const BusinessVisaClientPage: React.FC = () => {
    const { t } = useLanguage();

    const VISA_CONFIG = {
        name: "Visa Business (Non-B)",
        type: "Travail & Affaires",
        audience: "Employés, Enseignants, Investisseurs actifs",
        duration: "90 jours (extensible 1 an)",
        work_allowed: true,
        risk_level: "high"
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <HeroSection
                backgroundImage={IMAGES.OFFICE || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"}
                imageAlt="Bureau Bangkok"
                title={`${VISA_CONFIG.name} – Thaïlande`}
                subtitle={`Conditions, permis de travail et durée de séjour (${new Date().getFullYear()})`}
                icon={<Briefcase className="h-6 w-6" />}
                badge={VISA_CONFIG.type}
            />

            <PageContainer maxWidth="max-w-4xl" negativeMargin>
                <div className="grid grid-cols-1 gap-10">

                    <section id="definition">
                        <SectionTitle>{`Qu’est-ce que le ${VISA_CONFIG.name} ?`}</SectionTitle>
                        <Card variant="white" className="p-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                Le Visa Non-Immigrant B (Business) est le visa obligatoire pour tout étranger souhaitant <strong>travailler légalement en Thaïlande</strong> pour une entreprise locale ou y exercer une activité commerciale active. Contrairement aux visas touristiques, il est lié à un employeur spécifique et constitue la première étape indispensable avant l'obtention du Permis de Travail (Work Permit).
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
                                    <li>• Employés recrutés par une société thaïlandaise.</li>
                                    <li>• Enseignants dans des écoles thaïlandaises.</li>
                                    <li>• Investisseurs exerçant une fonction de direction.</li>
                                </ul>
                            </Card>
                            <Card variant="white" className="p-6 border-l-4 border-slate-300 bg-slate-50/50 opacity-75">
                                <h3 className="font-bold text-slate-700 mb-3">Profils Non Compatibles</h3>
                                <ul className="space-y-2 text-slate-500">
                                    <li>• Télétravailleurs (voir Visa DTV).</li>
                                    <li>• Nomades digitaux sans employeur local.</li>
                                    <li>• Recherche d'emploi (interdit de travailler sans le visa).</li>
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
                                    "Passeport valide au moins 6 mois.",
                                    "Lettre d'invitation ou contrat de travail d'une entreprise thaïlandaise.",
                                    "Documents corporatifs de l'entreprise (DBD, liste des actionnaires).",
                                    "Quota d'employés thaïlandais respecté par l'entreprise (Ratio 4:1).",
                                    "Salaire minimum respecté selon la nationalité."
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
                        <Card variant="white" className="p-6 border-l-4 border-amber-500 bg-amber-50/10">
                            <div className="flex items-start mb-4">
                                <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-amber-800 mb-1">Avertissement Important</h3>
                                    <p className="text-slate-700">
                                        Ce visa seul <strong>ne vous autorise PAS à travailler</strong>. Vous devez obtenir votre <strong>Work Permit</strong> (Permis de Travail) auprès du Ministère du Travail immédiatement après votre arrivée. Travailler avec le visa seul est illégal.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-green-100/50 p-4 rounded border border-green-200">
                                    <div className="font-bold text-green-800 mb-1">✅ Autorisé (avec Work Permit)</div>
                                    <div className="text-green-700 text-sm">Travail salarié pour l'entreprise sponsor, gestion, signatures officielles.</div>
                                </div>
                                <div className="bg-red-100/50 p-4 rounded border border-red-200">
                                    <div className="font-bold text-red-800 mb-1">❌ Interdit</div>
                                    <div className="text-red-700 text-sm">Travail pour une autre entreprise, travail manuel réservé aux Thaïlandais.</div>
                                </div>
                            </div>
                        </Card>
                    </section>

                    <section id="renewal">
                        <SectionTitle>Renouvellement et extensions</SectionTitle>
                        <Card variant="white" className="p-6">
                            <p className="text-slate-600 mb-4">
                                Le visa initial de 90 jours peut être étendu à <strong>1 an</strong> auprès du bureau de l'immigration en Thaïlande. Cette extension est renouvelable chaque année tant que vous êtes employé et que l'entreprise respecte les critères fiscaux et sociaux.
                            </p>
                            <p className="text-sm text-slate-500 italic">
                                Note : L'extension nécessite souvent de présenter des preuves de paiement des impôts et de sécurité sociale.
                            </p>
                        </Card>
                    </section>

                    <section id="limitations">
                        <SectionTitle>Limitations et points de vigilance</SectionTitle>
                        <Card variant="white" className="p-6 bg-red-50 border-red-100">
                            <div className="flex items-start text-red-700">
                                <ShieldAlert className="h-6 w-6 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-2">Risque de perte de visa</h3>
                                    <p className="text-sm leading-relaxed">
                                        Si vous quittez votre emploi ou êtes licencié, votre visa est <strong>annulé immédiatement</strong> (parfois le jour même). Vous devez quitter le pays ou trouver un nouvel emploi capable de sponsoriser un nouveau visa sous 7 jours (selon les cas).
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="dark" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-white mb-2">Besoin d'aide pour ce visa ?</h3>
                        <p className="text-slate-400 mb-6 text-sm">Nous accompagnons les entreprises et les employés dans la procédure.</p>
                        <CTAButton href="https://desk.siamvisapro.com" variant="primary" fullWidth>
                            Vérifier mon éligibilité
                        </CTAButton>
                    </Card>
                    <Card variant="white" className="p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Comparer les options</h3>
                        <p className="text-slate-500 mb-6 text-sm">Non-B, LTR ou DTV ? Trouvez le meilleur visa.</p>
                        <a href="/fr/dtv" className="text-amber-600 font-semibold hover:underline flex items-center">
                            Voir le Visa DTV (Alternative) <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

export default BusinessVisaClientPage;
