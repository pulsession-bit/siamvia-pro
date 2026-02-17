'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, FileCheck, ShieldAlert, Briefcase, Landmark, CheckCircle2, ArrowRight, AlertTriangle, Scale, Globe } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/contexts/LanguageContext';

interface CompanySetupClientPageProps {
    lang: string;
}

const CompanySetupClientPage: React.FC<CompanySetupClientPageProps> = ({ lang }) => {
    // English Content (Default for non-FR)
    if (lang !== 'fr') {
        return (
            <div className="bg-slate-50 pb-20">
                {/* Hero Section */}
                <div className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559563458-52c676bb91bb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                    <Container className="relative z-10">
                        <div className="max-w-3xl">
                            <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-4 border border-amber-500/30">
                                2026 Business Guide
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Company Registration in Thailand <span className="text-amber-500">(2026)</span>
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed mb-8">
                                Starting a business in Thailand requires navigating the <strong>Foreign Business Act (FBA)</strong>. Whether you need a <strong>Thai Limited Company</strong>, a <strong>BOI Promotion</strong> (for 100% ownership), or an <strong>Amity Treaty</strong> setup (for US citizens), we guide you through the legal maze.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#audit" className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors flex items-center">
                                    Start Company Audit <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* 1. Structure Choice */}
                <section className="py-16">
                    <Container>
                        <div className="flex items-center mb-10">
                            <div className="bg-amber-100 p-3 rounded-xl mr-4">
                                <Building2 className="h-8 w-8 text-amber-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">1. Choose Your Business Structure</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Thai Limited */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-amber-200 transition-all">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="text-amber-500 mr-2">A.</span> Thai Limited Company (Standard)
                                </h3>
                                <p className="text-slate-600 mb-4"><strong>Best for:</strong> Local operations, domestic invoicing, and businesses not eligible for BOI.</p>
                                <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-500 text-sm text-slate-700">
                                    <strong>Key Restriction:</strong> Foreign ownership is capped at 49% unless you have a specific license. A Thai partner (51%) is usually required.
                                </div>
                            </div>

                            {/* BOI */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-500 transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">TECH & EXPORT</div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="text-blue-600 mr-2">B.</span> BOI Company (100% Foreign)
                                </h3>
                                <p className="text-slate-600 mb-4"><strong>Best for:</strong> Tech startups, software, manufacturing, and export-led businesses.</p>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> <strong>100% Foreign Ownership</strong> allowed</li>
                                    <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Visa & Work Permit Fast-Track (Ltr/Smart)</li>
                                    <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Corporate Tax Exemption (up to 8 years)</li>
                                </ul>
                            </div>

                            {/* US Treaty of Amity */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-200 transition-all">
                                <h3 className="text-lg font-bold text-slate-700 mb-2 flex items-center"><Globe className="h-4 w-4 mr-2 text-indigo-500" /> C. US Treaty of Amity</h3>
                                <p className="text-sm text-slate-600 mb-3"><strong>For US Citizens only:</strong> Allows 100% American ownership of a Thai company without BOI status.</p>
                                <p className="text-xs text-slate-500">Requires specific registration with the Ministry of Commerce.</p>
                            </div>

                            {/* Branch/Rep Office */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200 opacity-80 hover:opacity-100 transition-opacity">
                                <h3 className="text-lg font-bold text-slate-700 mb-2">D. Representative Office</h3>
                                <p className="text-sm text-slate-600">For non-revenue generating activities (sourcing, quality control, market research). Cannot invoice Thai clients.</p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 2. FBA */}
                <section className="py-16 bg-slate-100">
                    <Container>
                        <div className="flex items-center mb-8">
                            <div className="bg-red-100 p-3 rounded-xl mr-4">
                                <ShieldAlert className="h-8 w-8 text-red-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">2. The "Foreign Business Act" (FBA)</h2>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <p className="text-slate-700 text-lg mb-6">
                                The FBA restricts foreigners from operating in certain categories (List 1, 2, 3). Most service businesses fall under <strong>List 3</strong>, meaning a foreigner cannot own more than 49% without a <strong>Foreign Business License (FBL)</strong> or <strong>BOI promotion</strong>.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <h4 className="font-bold text-red-800 mb-2">List 1</h4>
                                    <p className="text-sm text-red-700">Strictly prohibited (Media, Farming, Land trading).</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                    <h4 className="font-bold text-blue-800 mb-2">List 3 (Common)</h4>
                                    <p className="text-sm text-blue-700">Services, Accounting, Engineering, Retail. Requires FBL or BOI.</p>
                                </div>
                                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                                    <h4 className="font-bold text-amber-800 mb-2">Solution</h4>
                                    <p className="text-sm text-amber-700">Apply for BOI or strict compliance via Thai partnership.</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 3. Steps */}
                <section className="py-16">
                    <Container>
                        <div className="flex items-center mb-10">
                            <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                                <FileCheck className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">3. Setup Workflow (DBD)</h2>
                        </div>
                        <div className="relative border-l-4 border-indigo-200 ml-6 space-y-12">
                            <div className="relative pl-8">
                                <span className="absolute -left-[14px] top-0 bg-indigo-600 w-6 h-6 rounded-full border-4 border-white"></span>
                                <h4 className="font-bold text-lg text-slate-900 mb-1">Name Reservation</h4>
                                <p className="text-slate-600 text-sm">Check availability with Department of Business Development (DBD).</p>
                            </div>
                            <div className="relative pl-8">
                                <span className="absolute -left-[14px] top-0 bg-indigo-600 w-6 h-6 rounded-full border-4 border-white"></span>
                                <h4 className="font-bold text-lg text-slate-900 mb-1">File MOA</h4>
                                <p className="text-slate-600 text-sm">Memorandum of Association (Capital, Shareholders, Address).</p>
                            </div>
                            <div className="relative pl-8">
                                <span className="absolute -left-[14px] top-0 bg-indigo-600 w-6 h-6 rounded-full border-4 border-white"></span>
                                <h4 className="font-bold text-lg text-slate-900 mb-1">Statutory Meeting</h4>
                                <p className="text-slate-600 text-sm">Appoint directors and auditor.</p>
                            </div>
                            <div className="relative pl-8">
                                <span className="absolute -left-[14px] top-0 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></span>
                                <h4 className="font-bold text-lg text-slate-900 mb-1">Registration & Tax ID</h4>
                                <p className="text-slate-600 text-sm">Get Company Affidavit, Tax ID number, and VAT registration (if revenue &gt; 1.8M THB).</p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 4. Visa & Tax */}
                <section className="py-16 bg-white border-y border-slate-100">
                    <Container>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <div className="flex items-center mb-6">
                                    <Briefcase className="h-6 w-6 text-amber-500 mr-3" />
                                    <h2 className="text-2xl font-bold text-slate-900">4. Visa & Work Permit</h2>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h4 className="font-bold text-slate-800 mb-4">The Requirements:</h4>
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start"><strong>1. Non-Immigrant B Visa:</strong> Required to enter Thailand for business.</li>
                                        <li className="flex items-start"><strong>2. Work Permit:</strong> Must be issued <i>after</i> company registration.</li>
                                        <li className="flex items-start"><strong>3. 4:1 Ratio:</strong> You strictly need 4 Thai employees per 1 foreign work permit (unless BOI).</li>
                                        <li className="flex items-start"><strong>4. 2M THB Capital:</strong> Minimum paid-up capital per work permit.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center mb-6">
                                    <Landmark className="h-6 w-6 text-amber-500 mr-3" />
                                    <h2 className="text-2xl font-bold text-slate-900">5. Taxes (Overview)</h2>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-bold text-slate-800">Corporate Income Tax (CIT)</h4>
                                            <p className="text-2xl font-bold text-amber-600">20%</p>
                                            <p className="text-xs text-slate-500">On net profit.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">VAT</h4>
                                            <p className="text-2xl font-bold text-amber-600">7%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 6. Nominees Risk */}
                <section className="py-12 bg-red-50/50 border-b border-red-100">
                    <Container>
                        <div className="flex items-center gap-6">
                            <ShieldAlert className="h-8 w-8 text-red-600 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-red-900 mb-2">WARNING: Nominee Shareholders</h3>
                                <p className="text-red-800 text-sm">
                                    Do NOT use "Nominee" Thai shareholders (people who hold shares on your behalf but did not invest money) to bypass the 49% foreign limit. This is illegal and strictly audited. Use legitimate structures like BOI or proper partnerships.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* CTA */}
                <section className="py-20 bg-slate-900 text-white" id="audit">
                    <Container>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm max-w-4xl mx-auto text-center">
                            <h3 className="text-3xl font-bold text-amber-500 mb-4">Start Your Company Audit</h3>
                            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                                Confused about BOI vs Thai Limited? Not sure about the 4:1 ratio? Let our experts analyze your business model and recommend the safest structure.
                            </p>
                            <Link
                                href={`/${lang}/contact`}
                                className="inline-block bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors shadow-lg"
                            >
                                Book Free Consultation
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
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559563458-52c676bb91bb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-4 border border-amber-500/30">
                            Guide Business 2026
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Créer une entreprise en Thaïlande <span className="text-amber-500">(2026)</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Créer une entreprise en Thaïlande est simple sur le papier, mais la réussite dépend de 3 décisions : la structure, le niveau d’actionnariat étranger, et le périmètre d’activité au regard du Foreign Business Act (FBA).
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#audit" className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors flex items-center">
                                Démarrer l'Audit Entreprise <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </Container>
            </div>

            {/* 1. Structure Choice */}
            <section className="py-16">
                <Container>
                    <div className="flex items-center mb-10">
                        <div className="bg-amber-100 p-3 rounded-xl mr-4">
                            <Building2 className="h-8 w-8 text-amber-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">1. Quelle structure correspond à ton cas ?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Thai Limited */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-amber-200 transition-all">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                <span className="text-amber-500 mr-2">A.</span> Thai Limited Company (Standard)
                            </h3>
                            <p className="text-slate-600 mb-4"><strong>Idéal si :</strong> tu opères localement (facturation en Thaïlande, équipe locale, bureau), et tu veux une structure « classique ».</p>
                            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-500 text-sm text-slate-700">
                                <strong>Point clé :</strong> Si l’activité tombe dans les listes restreintes du FBA et que la société est « foreign » (&gt;49% étranger), il faut une licence FBA ou BOI.
                            </div>
                        </div>

                        {/* BOI */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-amber-200 transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMANDÉ TECH</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                <span className="text-blue-600 mr-2">D.</span> BOI (Board of Investment)
                            </h3>
                            <p className="text-slate-600 mb-4"><strong>Idéal si :</strong> ton activité est éligible BOI (tech, services qualifiés, industrie) et tu veux sécuriser le cadre 100% étranger.</p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> 100% actionnariat étranger</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Visas & Work Permits facilités</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Exonérations fiscales possibles</li>
                            </ul>
                        </div>

                        {/* Branch Office */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 opacity-80 hover:opacity-100 transition-opacity">
                            <h3 className="text-lg font-bold text-slate-700 mb-2">B. Succursale (Branch Office)</h3>
                            <p className="text-sm text-slate-600">Pour opérer au nom de ta société étrangère. Attention aux exigences de capital et lourdeurs administratives.</p>
                        </div>

                        {/* Rep Office */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 opacity-80 hover:opacity-100 transition-opacity">
                            <h3 className="text-lg font-bold text-slate-700 mb-2">C. Representative Office</h3>
                            <p className="text-sm text-slate-600">Pour activités non-commerciales strictes (études marché, sourcing, contrôle qualité) sans revenus locaux.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 2. FBA - The Hard Part */}
            <section className="py-16 bg-slate-100">
                <Container>
                    <div className="flex items-center mb-8">
                        <div className="bg-red-100 p-3 rounded-xl mr-4">
                            <ShieldAlert className="h-8 w-8 text-red-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">2. Le point dur : Foreign Business Act (FBA)</h2>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <p className="text-slate-700 text-lg mb-6">
                            Le FBA classe les activités en 3 listes strictes. Si ton activité est sur une liste, un étranger ne peut pas la pratiquer sans autorisation.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                <h4 className="font-bold text-red-800 mb-2">Liste 1</h4>
                                <p className="text-sm text-red-700">Activités strictement interdites aux étrangers (ex: médias, agriculture).</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                                <h4 className="font-bold text-amber-800 mb-2">Liste 2</h4>
                                <p className="text-sm text-amber-700">Activités liées à la sécurité nationale ou culture. Licence difficile.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <h4 className="font-bold text-blue-800 mb-2">Liste 3 (Le plus courant)</h4>
                                <p className="text-sm text-blue-700">Services, comptabilité, ingénierie, retail. Requiert Foreign Business License ou BOI.</p>
                            </div>
                        </div>

                        <div className="border-t border-slate-200 pt-6">
                            <h4 className="font-bold text-slate-900 mb-4">Ce que tu dois faire concrètement :</h4>
                            <ol className="list-decimal list-inside space-y-2 text-slate-700 ml-4">
                                <li><strong>Lister</strong> tes activités objectives.</li>
                                <li><strong>Vérifier</strong> si elles entrent dans une liste FBA (Scan Gratuit).</li>
                                <li><strong>Décider :</strong> Thai-majority (si légal), FBL/FBC ou BOI.</li>
                            </ol>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 3. Steps (Workflow) */}
            <section className="py-16">
                <Container>
                    <div className="flex items-center mb-10">
                        <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                            <FileCheck className="h-8 w-8 text-indigo-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">3. Étapes de création (Workflow DBD)</h2>
                    </div>

                    <div className="relative border-l-4 border-indigo-200 ml-6 space-y-12">
                        <div className="relative pl-8">
                            <span className="absolute -left-[14px] top-0 bg-indigo-600 w-6 h-6 rounded-full border-4 border-white"></span>
                            <h4 className="font-bold text-lg text-slate-900 mb-1">Réservation du Nom</h4>
                            <p className="text-slate-600 text-sm">Vérification disponibilité et règles de nommage.</p>
                        </div>
                        <div className="relative pl-8">
                            <span className="absolute -left-[14px] top-0 bg-indigo-600 w-6 h-6 rounded-full border-4 border-white"></span>
                            <h4 className="font-bold text-lg text-slate-900 mb-1">Dépôt du MOA</h4>
                            <p className="text-slate-600 text-sm">Memorandum of Association (Capital, Actionnaires, Siège).</p>
                        </div>
                        <div className="relative pl-8">
                            <span className="absolute -left-[14px] top-0 bg-indigo-600 w-6 h-6 rounded-full border-4 border-white"></span>
                            <h4 className="font-bold text-lg text-slate-900 mb-1">Statutory Meeting</h4>
                            <p className="text-slate-600 text-sm">Approbation des statuts, nomination directeurs et auditeur.</p>
                        </div>
                        <div className="relative pl-8">
                            <span className="absolute -left-[14px] top-0 bg-indigo-600 w-6 h-6 rounded-full border-4 border-white"></span>
                            <h4 className="font-bold text-lg text-slate-900 mb-1">Enregistrement DBD</h4>
                            <p className="text-slate-600 text-sm">Finalisation officielle au Ministère du Commerce.</p>
                        </div>
                        <div className="relative pl-8">
                            <span className="absolute -left-[14px] top-0 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></span>
                            <h4 className="font-bold text-lg text-slate-900 mb-1">Post-Création</h4>
                            <p className="text-slate-600 text-sm">Tax ID, VAT (si &gt;1.8M THB), Banque (KYC), Immigration.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 4 & 5. Visa & Tax */}
            <section className="py-16 bg-white border-y border-slate-100">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Visas */}
                        <div>
                            <div className="flex items-center mb-6">
                                <Briefcase className="h-6 w-6 text-amber-500 mr-3" />
                                <h2 className="text-2xl font-bold text-slate-900">4. Visa & Work Permit</h2>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-800 mb-4">Le Trio Réalité :</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start"><span className="bg-slate-200 text-slate-700 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-0.5">1</span> <span>Visa Non-Immigrant B (Entrée)</span></li>
                                    <li className="flex items-start"><span className="bg-slate-200 text-slate-700 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-0.5">2</span> <span>Work Permit (Autorisation travail)</span></li>
                                    <li className="flex items-start"><span className="bg-slate-200 text-slate-700 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-0.5">3</span> <span>Extension annuelle (Visa long terme)</span></li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-slate-200">
                                    <p className="text-sm font-semibold text-slate-700 mb-2">Règles pratiques standard :</p>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Capital : ~2M THB (paid-up) par permis.</li>
                                        <li>• Ratio : 4 employés thaïs pour 1 étranger (sauf BOI).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Tax */}
                        <div>
                            <div className="flex items-center mb-6">
                                <Landmark className="h-6 w-6 text-amber-500 mr-3" />
                                <h2 className="text-2xl font-bold text-slate-900">5. Fiscalité (Repères)</h2>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold text-slate-800">Corporate Income Tax (CIT)</h4>
                                        <p className="text-2xl font-bold text-amber-600">20%</p>
                                        <p className="text-xs text-slate-500">Taux standard sur les bénéfices nets.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">VAT (TVA)</h4>
                                        <p className="text-2xl font-bold text-amber-600">7%</p>
                                        <p className="text-xs text-slate-500">Taux général actuel.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 flex items-center"><AlertTriangle className="h-4 w-4 text-amber-500 mr-1" /> Obligations</h4>
                                        <p className="text-sm text-slate-600">Audit annuel obligatoire + dépôts DBD (e-filing) et Revenue Department.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 6. Nominees Risk */}
            <section className="py-12 bg-red-50/50 border-b border-red-100">
                <Container>
                    <div className="flex items-start md:items-center flex-col md:flex-row gap-6">
                        <div className="p-4 bg-red-100 rounded-full flex-shrink-0">
                            <ShieldAlert className="h-8 w-8 text-red-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-red-900 mb-2">6. Risque majeur : Nominee Shareholders</h3>
                            <p className="text-red-800 leading-relaxed">
                                Évitez les montages illégaux où des actionnaires thaïs « prêtent leur nom » sans investissement réel pour contourner le FBA.
                                C'est un risque légal majeur (contrôles, sanctions, invalidation de la société).
                                Optez pour des structures conformes (BOI, FBL, ou vrais partenariats).
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 7. Checklist & CTA */}
            <section className="py-20 bg-slate-900 text-white" id="audit">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">7. Checklist Documents</h2>
                            <ul className="space-y-4">
                                {[
                                    "Passeport + Preuves d'adresse",
                                    "Description activité + Business Model",
                                    "Adresse du siège (Bail / Tabien Baan)",
                                    "Répartition du capital & actionnaires",
                                    "Plan immigration (Visa/WP ou BOI)",
                                    "Banque : Source des fonds"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-300">
                                        <CheckCircle2 className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-amber-500 mb-2">Audit « Entreprise Thaïlande »</h3>
                            <p className="text-slate-300 mb-6 font-light">
                                Parlez à nos experts pour valider votre structure et éviter les pièges du FBA.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center text-sm text-slate-400">
                                    <Scale className="h-4 w-4 mr-2" /> Diagnostic FBA & Structure
                                </div>
                                <div className="flex items-center text-sm text-slate-400">
                                    <Briefcase className="h-4 w-4 mr-2" /> Roadmap Visa & Work Permit
                                </div>
                            </div>
                            <Link
                                href="/fr/contact"
                                className="mt-8 w-full block text-center bg-amber-500 text-slate-900 font-bold py-4 rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                            >
                                Demander mon Audit Gratuit
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Questions Fréquentes</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h4 className="font-bold text-slate-900 mb-2">Peut-on créer une société 100% étrangère ?</h4>
                            <p className="text-slate-600">Oui dans certains cas (BOI, licence FBA spécifique, traité US-Thai), sinon cela dépend strictement de l'activité. La règle par défaut est souvent 49% max pour les étrangers.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h4 className="font-bold text-slate-900 mb-2">Combien de temps ça prend ?</h4>
                            <p className="text-slate-600">En pratique : de « rapide » (1-2 semaines) pour une Thai Co simple avec dossier propre, à plusieurs mois pour une approbation BOI complète ou une licence FBA complexe.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default CompanySetupClientPage;
