'use client';

import React from 'react';
import Link from 'next/link';
import { Home, SearchCheck, Scale, FileText, LandPlot, Key, CreditCard, AlertOctagon, CheckCircle2, ArrowRight, Building2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';

import { useLangPath } from '@/hooks/useLang';

interface BuyPropertyClientPageProps {
    lang: string;
}

const BuyPropertyClientPage: React.FC<BuyPropertyClientPageProps> = ({ lang }) => {
    const langPath = useLangPath();

    // English Content (Default for non-FR)
    if (lang !== 'fr') {
        return (
            <div className="bg-slate-50 pb-20">
                {/* Hero Section */}
                <div className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512918760532-3c7908bf43be?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                    <Container className="relative z-10">
                        <div className="max-w-3xl">
                            <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-4 border border-amber-500/30">
                                Visa & Property Guide 2026
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Visa & Property in Thailand: <span className="text-amber-500">The Visa Drivers the Strategy</span>
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed mb-8">
                                <strong>Core Principle:</strong> Buying property (even Freehold Condo) does <strong>NOT</strong> grant you a right to stay. The Visa sets your legal duration, renewals, and obligations. Real estate follows.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#audit" className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors flex items-center">
                                    Start Visa & Property Audit <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* 1. Choose Visa First */}
                <section className="py-16">
                    <Container>
                        <div className="flex items-center mb-10">
                            <div className="bg-blue-100 p-3 rounded-xl mr-4">
                                <FileText className="h-8 w-8 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">1. Choose Your Visa First (By Lifestyle)</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Short Stay */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-800 mb-2">A. Short Stay / Test (30-60 Days)</h3>
                                <p className="text-slate-600 text-sm mb-4"><strong>Visa Exemption / Tourist:</strong> Good for exploring, not for "settling".</p>
                                <div className="text-xs bg-slate-50 p-3 rounded text-slate-500">
                                    ⚠️ Since May 2025, proof of funds is stricter at some consulates.
                                </div>
                            </div>

                            {/* DTV */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ring-2 ring-blue-500/10">
                                <h3 className="text-lg font-bold text-blue-700 mb-2">B. Remote Work / Digital Nomad (DTV)</h3>
                                <p className="text-slate-600 text-sm mb-4"><strong>5-Year Multi-Entry:</strong> 180 days per entry (+180 extension). Proof of funds ~500k THB. Strictly no working for Thai clients.</p>
                                <div className="text-xs bg-blue-50 p-3 rounded text-blue-800 font-medium">
                                    Vigilance: &gt;180 days/year may trigger Tax Residency.
                                </div>
                            </div>

                            {/* Retirement */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-800 mb-2">C. Retirement (50+)</h3>
                                <p className="text-slate-600 text-sm mb-4"><strong>Non-O Retirement:</strong> Standard path. Requires 800,000 THB in Thai bank (or 65k monthly income).</p>
                            </div>

                            {/* Premium */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-800 mb-2">D. Long Term Premium</h3>
                                <p className="text-slate-600 text-sm mb-4"><strong>LTR (BOI) or Thailand Privilege:</strong> For high net worth. LTR Wealthy typically requires $500k investment (Property can count).</p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 2. Property - What Foreigners Can Buy */}
                <section className="py-16 bg-slate-50">
                    <Container>
                        <div className="flex items-center mb-10">
                            <div className="bg-amber-100 p-3 rounded-xl mr-4">
                                <Home className="h-8 w-8 text-amber-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">2. How Property Connects to Visa</h2>
                        </div>

                        <p className="max-w-3xl text-slate-600 mb-8">
                            Your Visa dictates your "proof of life" requirements (address stability, funds). A Condo or Lease serves as address proof, but never replaces visa eligibility.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Condo */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="text-blue-500 mr-2">A.</span> Condominium (Freehold)
                                </h3>
                                <p className="text-slate-600 mb-4">Foreigners can own 100% in their name (Chanote).</p>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li>• Requires <strong>Foreign Quota</strong> availability.</li>
                                    <li>• <strong>Money Trail:</strong> Funds MUST come from abroad (FET Form) to register.</li>
                                </ul>
                            </div>

                            {/* Land/Villa */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-red-200 transition-all opacity-90">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="text-red-500 mr-2">B.</span> Land / Villa (Leasehold)
                                </h3>
                                <p className="text-slate-600 mb-4">No direct land ownership.</p>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li>• You own the <strong>Building</strong>.</li>
                                    <li>• You <strong>Lease</strong> the land (30 Years registered).</li>
                                    <li>• <strong>Warning:</strong> "90-year lease" is often a contract myth, not a real right.</li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 3. Operational & Red Flags */}
                <section className="py-12 bg-white">
                    <Container>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Operational Plan</h3>
                                <ul className="space-y-3 text-slate-600 text-sm">
                                    <li><strong>Reporting:</strong> 90-day reporting is mandatory if you stay continuously.</li>
                                    <li><strong>TDAC:</strong> New digital entry form (2025) to check before travel.</li>
                                    <li><strong>TM30:</strong> Owner must report your stay (even if it's your own condo).</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center"><AlertOctagon className="h-5 w-5 text-red-600 mr-2" /> Visa Red Flags</h3>
                                <ul className="space-y-2 text-red-800 text-sm">
                                    <li>• <strong>"Buy a condo, get a visa":</strong> FALSE. It only helps with logistics.</li>
                                    <li>• <strong>"Back-to-back Tourist entries":</strong> High risk of denial at border.</li>
                                    <li>• <strong>DTV & Local Work:</strong> Any work for Thai market while on DTV is illegal.</li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* CTA */}
                <section className="py-20 bg-slate-900 text-white" id="audit">
                    <Container>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm max-w-4xl mx-auto text-center">
                            <h3 className="text-3xl font-bold text-amber-500 mb-4">Visa & Property Strategy Audit</h3>
                            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                                Don't buy a property you can't live in. Our audit aligns your <strong>Visa Eligibility</strong> with your <strong>Investment Goals</strong>.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-2xl mx-auto mb-8 text-sm text-slate-300">
                                <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> Visa Qualification</div>
                                <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> Financial Proofs</div>
                                <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> Property Title Check</div>
                                <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> 12-Month Plan</div>
                            </div>
                            <Link
                                href={langPath('contact')}
                                className="inline-block bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors shadow-lg"
                            >
                                Book Audit (Visa + Property)
                            </Link>
                        </div>
                    </Container>
                </section>
            </div>
        );
    }

    // French Content (Default)
    return (
        <div className="bg-slate-50 pb-20">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512918760532-3c7908bf43be?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-4 border border-amber-500/30">
                            Guide Visa & Immo 2026
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Visa & Immobilier en Thaïlande : <span className="text-amber-500">Le visa pilote, l'immobilier suit</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            <strong>Principe de base :</strong> Acheter (même en condo freehold) ne donne <strong>PAS</strong> un droit de séjour. Le visa fixe la durée, les renouvellements et les obligations. L'immobilier s'adapte à votre visa, pas l'inverse.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#audit" className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors flex items-center">
                                Audit Stratégie Visa & Immo <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </Container>
            </div>

            {/* 1. Choisir le Visa d'abord */}
            <section className="py-16">
                <Container>
                    <div className="flex items-center mb-10">
                        <div className="bg-blue-100 p-3 rounded-xl mr-4">
                            <FileText className="h-8 w-8 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">1. Choisir le Visa d'abord (Selon mode de vie)</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* A. Séjour Court */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-800 mb-2">A. Séjour Court / Test (30-60 jours)</h3>
                            <p className="text-slate-600 text-sm mb-4"><strong>Exemption / Touriste :</strong> Utile pour explorer, pas pour "s'installer".</p>
                            <div className="text-xs bg-slate-50 p-3 rounded text-slate-500">
                                ⚠️ Preuve de fonds resserrée depuis mai 2025 selon consulats.
                            </div>
                        </div>

                        {/* B. DTV */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ring-2 ring-blue-500/10">
                            <h3 className="text-lg font-bold text-blue-700 mb-2">B. Télétravail / Nomad (DTV)</h3>
                            <p className="text-slate-600 text-sm mb-4"><strong>Visa 5 ans (Multi-Entrées) :</strong> 180 jours/entrée. Preuve de fonds 500k THB. Interdiction stricte de travailler pour des clients thaïs.</p>
                            <div className="text-xs bg-blue-50 p-3 rounded text-blue-800 font-medium">
                                Vigilance : &gt; 180 jours/an peut déclencher la résidence fiscale.
                            </div>
                        </div>

                        {/* C. Retraite */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-800 mb-2">C. Retraite (50+)</h3>
                            <p className="text-slate-600 text-sm mb-4"><strong>Non-O Retraite :</strong> Schéma classique. 800,000 THB en banque thaï (ou 65k THB/mois de revenu).</p>
                        </div>

                        {/* D. Premium */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-800 mb-2">D. Long Terme Premium</h3>
                            <p className="text-slate-600 text-sm mb-4"><strong>LTR (BOI) ou Thailand Privilege :</strong> LTR Wealthy demande ~$500k d'investissement (l'immobilier peut compter). Privilege est un "pay-to-stay".</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 2. Ce que l'on peut acheter (Le raccordement) */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="flex items-center mb-10">
                        <div className="bg-amber-100 p-3 rounded-xl mr-4">
                            <Home className="h-8 w-8 text-amber-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">2. Comment l'immobilier se raccorde au Visa</h2>
                    </div>

                    <p className="max-w-3xl text-slate-600 mb-8">
                        Le condo ou le bail servent de justificatif d'adresse et de stabilité. Mais attention aux règles de propriété.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Condo */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                <span className="text-blue-500 mr-2">A.</span> Condominium (Freehold)
                            </h3>
                            <p className="text-slate-600 mb-4">Pleine propriété à votre nom (Chanote).</p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>• Limité au <strong>Quota Étranger</strong> (49% de l'immeuble).</li>
                                <li>• <strong>Preuve de fonds :</strong> L'argent DOIT venir de l'étranger pour l'enregistrement.</li>
                            </ul>
                        </div>

                        {/* Land/Villa */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-red-200 transition-all opacity-90">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                <span className="text-red-500 mr-2">B.</span> Terrain / Villa (Leasehold)
                            </h3>
                            <p className="text-slate-600 mb-4">Pas de propriété du sol.</p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>• Vous achetez la <strong>maison</strong> (bâtiment).</li>
                                <li>• Vous louez le <strong>terrain</strong> (Bail 30 ans enregistré).</li>
                                <li>• <strong>Attention :</strong> Le bail "90 ans" est un mythe juridique.</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 3. Opérationnel & Red Flags */}
            <section className="py-12 bg-white">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Plan de Séjour (Opérationnel)</h3>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                <li><strong>Reporting :</strong> Le 90-day reporting reste obligatoire si séjour continu.</li>
                                <li><strong>TDAC :</strong> Nouveau formulaire d'entrée numérique (2025).</li>
                                <li><strong>TM30 :</strong> Le proprio doit déclarer votre présence (même si c'est vous !).</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center"><AlertOctagon className="h-5 w-5 text-red-600 mr-2" /> Red Flags (Spécial Visa)</h3>
                            <ul className="space-y-2 text-red-800 text-sm">
                                <li>• <strong>« Achetez un condo = Visa offert »</strong> : FAUX. Ça aide juste pour l'adresse.</li>
                                <li>• <strong>« Enchaînez les visas touristes »</strong> : Risque de refus d'entrée immédiat.</li>
                                <li>• <strong>DTV & Business Thai :</strong> Toute activité avec le marché thaï est interdite.</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Audit Visa & Property */}
            <section className="py-20 bg-slate-900 text-white" id="audit">
                <Container>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl font-bold text-amber-500 mb-4">Audit Stratégie Visa & Immobilier</h3>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            N'achetez pas un bien que vous ne pourrez pas habiter faute de visa. Notre audit aligne votre <strong>Éligibilité Visa</strong> avec votre <strong>Projet Immo</strong>.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-2xl mx-auto mb-8 text-sm text-slate-300">
                            <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> Qualification Visa</div>
                            <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> Preuves Financières</div>
                            <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> Check Titre (Chanote)</div>
                            <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> Plan 12 mois</div>
                        </div>

                        <Link
                            href={langPath('contact')}
                            className="inline-block bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                        >
                            Démarrer l'Audit (Visa + Immo)
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default BuyPropertyClientPage;
