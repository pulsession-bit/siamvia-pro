'use client';

import React from 'react';
import Link from 'next/link';
import { Home, SearchCheck, Scale, FileText, LandPlot, Key, CreditCard, AlertOctagon, CheckCircle2, ArrowRight, Building2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/contexts/LanguageContext';
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
                                Real Estate Guide 2026
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Buying Property in Thailand <span className="text-amber-500">(2026)</span>
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed mb-8">
                                In Thailand, the golden rule is simple: Foreigners can own <strong>Condos</strong> (Freehold), but cannot own <strong>Land</strong> directly. For Villas, you secure a right of usage (Leasehold) rather than full ownership of the soil.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#audit" className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors flex items-center">
                                    Start Property Audit <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* 1. What Foreigners Can Buy */}
                <section className="py-16">
                    <Container>
                        <div className="flex items-center mb-10">
                            <div className="bg-blue-100 p-3 rounded-xl mr-4">
                                <Home className="h-8 w-8 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">1. What Foreigners Can Legally Buy</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Condo */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="text-blue-500 mr-2">A.</span> Condominium (Freehold)
                                </h3>
                                <p className="text-slate-600 mb-4">The cleanest and safest option.</p>
                                <div className="space-y-3 text-sm text-slate-700">
                                    <p>You get a Title Deed (Chanote) in your own name, just like a Thai citizen. This is possible as long as the building has available <strong>Foreign Quota</strong> (max 49% of total floor area).</p>
                                    <div className="bg-blue-50 p-3 rounded border border-blue-100 font-semibold text-blue-800">
                                        Must Do: Verify Foreign Quota availability before deposit.
                                    </div>
                                </div>
                            </div>

                            {/* Land/Villa */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-red-200 transition-all opacity-90">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="text-red-500 mr-2">B.</span> Land / Villa / House
                                </h3>
                                <p className="text-slate-600 mb-4">Direct land ownership is prohibited for foreigners.</p>
                                <div className="space-y-3 text-sm text-slate-700">
                                    <p>➡️ You can own the <strong>Building</strong> (House) in your name, but you must <strong>Lease</strong> the land (30 Years) or use Usufruct.</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 2. Rights Options */}
                <section className="py-16 bg-slate-50">
                    <Container>
                        <div className="flex items-center mb-10">
                            <div className="bg-amber-100 p-3 rounded-xl mr-4">
                                <Scale className="h-8 w-8 text-amber-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">2. Legal Structures (For Land/Villas)</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-lg text-slate-900 mb-2">1) Leasehold (30 Years)</h4>
                                <p className="text-sm text-slate-600 mb-4">Updated at the Land Office. The standard for foreigners.</p>
                                <div className="text-xs bg-slate-100 p-2 rounded text-slate-500">
                                    <strong>Real Talk:</strong> "30+30+30" renewals are contractual promises, not guaranteed property rights. Only the current 30-year block is ironclad.
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-lg text-slate-900 mb-2">2) Usufruct</h4>
                                <p className="text-sm text-slate-600">Right of usage (registered on title deed) typically for "Lifetime". Stronger than a lease in some aspects.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-lg text-slate-900 mb-2">3) Superficies</h4>
                                <p className="text-sm text-slate-600">Right to own the <strong>structures</strong> atop the land. Essential if you build a house on leased land.</p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 3. Due Diligence */}
                <section className="py-16 bg-white">
                    <Container>
                        <div className="flex items-center mb-10">
                            <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                                <SearchCheck className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">3. Due Diligence Checklist</h2>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                            <p className="text-slate-600 mb-8 font-medium">Never buy without checking these 4 pillars:</p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-3 flex items-center"><FileText className="h-4 w-4 mr-2 text-indigo-500" /> The Title Deed</h4>
                                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                                        <li><strong>Chanote (Nor Sor 4 Jor):</strong> The only true title deed with GPS plotting. Safe.</li>
                                        <li><strong>Nor Sor 3 Gor:</strong> Less precise. Acceptable but risky.</li>
                                        <li>Avoid anything less than these.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-3 flex items-center"><LandPlot className="h-4 w-4 mr-2 text-indigo-500" /> Encumbrances</h4>
                                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                                        <li>Is the land mortgaged to a bank?</li>
                                        <li>Is there a servitude (legal road access)?</li>
                                        <li>Construction zoning (Height limits?)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-3 flex items-center"><Building2 className="h-4 w-4 mr-2 text-indigo-500" /> Condo Specifics</h4>
                                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                                        <li>Is Foreign Quota full?</li>
                                        <li>Does the Juristic Person (Management) have debt?</li>
                                        <li>Unpaid CAM Fees on the unit?</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-3 flex items-center"><Key className="h-4 w-4 mr-2 text-indigo-500" /> The Money Trail</h4>
                                    <p className="text-sm text-slate-600">
                                        To register a Freehold Condo, you MUST bring funds from abroad in foreign currency. You need a <strong>FET Form</strong> (Foreign Exchange Transaction) from the receiving Thai bank.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 4. Fees */}
                <section className="py-16 bg-slate-50">
                    <Container>
                        <div className="flex items-center mb-6">
                            <CreditCard className="h-8 w-8 text-slate-600 mr-4" />
                            <h2 className="text-2xl font-bold text-slate-900">4. Transfer Fees & Taxes</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-xl font-bold text-slate-800">2%</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wide">Transfer Fee</div>
                                <div className="text-[10px] text-slate-400 mt-1">(Usually shared 50/50)</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-xl font-bold text-slate-800">0.5%</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wide">Stamp Duty</div>
                                <div className="text-[10px] text-slate-400 mt-1">(If no SBT)</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-xl font-bold text-slate-800">3.3%</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wide">Specific Business Tax</div>
                                <div className="text-[10px] text-slate-400 mt-1">(If held &lt; 5 years)</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-xl font-bold text-slate-800">Variable</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wide">Withholding Tax</div>
                                <div className="text-[10px] text-slate-400 mt-1">(Income Tax on seller)</div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 5. Red Flags */}
                <section className="py-12 bg-red-50 border-y border-red-100">
                    <Container>
                        <div className="flex items-start gap-4">
                            <AlertOctagon className="h-8 w-8 text-red-600 flex-shrink-0" />
                            <div>
                                <h2 className="text-xl font-bold text-red-900 mb-4">5. Major Red Flags</h2>
                                <ul className="space-y-2 text-red-800">
                                    <li>• <strong>"Just use a Thai Nominee company"</strong>: Illegal for land holding. The government is cracking down on this.</li>
                                    <li>• <strong>"Guaranteed 90-year lease"</strong>: Not recognized by Thai Civil Code. Automatic renewals are not binding against a new land owner (if land is sold).</li>
                                    <li>• <strong>"No Title Deed yet"</strong>: Do not deposit money on "Sor Kor 1" or un-upgraded land titles without a lawyer.</li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 6. CTA & Internal Links */}
                <section className="py-20 bg-slate-900 text-white" id="audit">
                    <Container>
                        <div className="grid md:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Property & Visa Strategy</h2>
                                <p className="text-slate-300 mb-8">
                                    Buying property connects you to Thailand long-term. Ensure your Visa strategy matches your investment.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <h4 className="font-semibold text-amber-500">Related Visas:</h4>
                                    <ul className="space-y-2">
                                        <li><Link href={langPath('retirement-visa')} className="text-slate-300 hover:text-white hover:underline flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Retirement Visa (Live in your Condo)</Link></li>
                                        <li><Link href={langPath('dtv')} className="text-slate-300 hover:text-white hover:underline flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> DTV Visa (Work from your Condo)</Link></li>
                                        <li><Link href={langPath('family-visa')} className="text-slate-300 hover:text-white hover:underline flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Family Visa (Relocation)</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-amber-500 mb-2">Property Due Diligence Audit</h3>
                                <ul className="space-y-3 mt-6 mb-8 text-sm text-slate-300">
                                    <li className="flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Contract Review (Thai/English)</li>
                                    <li className="flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Title Deed Check (Land Office)</li>
                                    <li className="flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Legality of Structure (Condo/Villa)</li>
                                    <li className="flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Full Tax Calculation</li>
                                </ul>
                                <Link
                                    href={langPath('contact')}
                                    className="w-full block text-center bg-amber-500 text-slate-900 font-bold py-4 rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                                >
                                    Book Property Audit
                                </Link>
                            </div>
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
                            Guide Immobilier 2026
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Acheter un bien en Thaïlande <span className="text-amber-500">(2026)</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            En Thaïlande, la question n’est pas « acheter ou pas », mais <strong>quoi acheter</strong> (condo vs terrain/villa) et quel <strong>droit réel sécuriser</strong> (freehold, leasehold, usufruit).
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#audit" className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors flex items-center">
                                Démarrer l'Audit Immobilier <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </Container>
            </div>

            {/* 1. What Foreigners Can Buy */}
            <section className="py-16">
                <Container>
                    <div className="flex items-center mb-10">
                        <div className="bg-blue-100 p-3 rounded-xl mr-4">
                            <Home className="h-8 w-8 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">1. Ce qu’un étranger peut acheter « en nom propre »</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Condo */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                <span className="text-blue-500 mr-2">A.</span> Condominium (Freehold)
                            </h3>
                            <p className="text-slate-600 mb-4">La voie la plus claire et sécurisée.</p>
                            <div className="space-y-3 text-sm text-slate-700">
                                <p>Un étranger peut acheter une unité dans la limite du Quota Étranger (49% de la surface totale).</p>
                                <div className="bg-blue-50 p-3 rounded border border-blue-100 font-semibold text-blue-800">
                                    Action : Vérifier le foreign quota disponible avant de signer quoi que ce soit.
                                </div>
                            </div>
                        </div>

                        {/* Land/Villa */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-red-200 transition-all opacity-90">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                <span className="text-red-500 mr-2">B.</span> Terrain / Maison / Villa
                            </h3>
                            <p className="text-slate-600 mb-4">Propriété foncière directe très limitée (quasi impossible sauf exceptions BOI majeures).</p>
                            <div className="space-y-3 text-sm text-slate-700">
                                <p>➡️ Dans la pratique, tu sécurises plutôt un <strong>droit d’usage</strong> (long terme) ou un montage encadré, mais pas la pleine propriété du sol en direct.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 2. Rights Options */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="flex items-center mb-10">
                        <div className="bg-amber-100 p-3 rounded-xl mr-4">
                            <Scale className="h-8 w-8 text-amber-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">2. Les 3 options « Droits » (Hors Condo)</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-lg text-slate-900 mb-2">1) Leasehold (Bail 30 ans)</h4>
                            <p className="text-sm text-slate-600 mb-4">Le standard pour les villas. Doit être enregistré au Land Office.</p>
                            <div className="text-xs bg-slate-100 p-2 rounded text-slate-500">
                                <strong>Attention :</strong> Les promesses "30+30+30" sont des contrats privés, seule la période enregistrée est un droit réel garanti.
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-lg text-slate-900 mb-2">2) Usufruit</h4>
                            <p className="text-sm text-slate-600">Droit réel de jouissance ("vie durant" ou durée fixe). Très fort car enregistré sur le titre.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-lg text-slate-900 mb-2">3) Superficies</h4>
                            <p className="text-sm text-slate-600">Droit de propriété sur les <strong>constructions</strong> (la maison) séparé du terrain.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 3. Due Diligence */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="flex items-center mb-10">
                        <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                            <SearchCheck className="h-8 w-8 text-indigo-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">3. Due Diligence Checklist</h2>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                        <p className="text-slate-600 mb-8 font-medium">Cette étape évite 80% des drames immobiliers.</p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-slate-800 mb-3 flex items-center"><FileText className="h-4 w-4 mr-2 text-indigo-500" /> Titre de Propriété (Land Title)</h4>
                                <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                                    <li><strong>Chanote (Nor Sor 4) :</strong> Le "Gold Standard", borné par GPS. Le plus sûr.</li>
                                    <li><strong>Nor Sor 3 Gor :</strong> Bornage aérien, moins précis. Risque de litige bornage.</li>
                                    <li>Éviter les titres inférieurs sans expertise juridique lourde.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-3 flex items-center"><LandPlot className="h-4 w-4 mr-2 text-indigo-500" /> Charges & Servitudes</h4>
                                <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                                    <li>Hypothèques non levées ?</li>
                                    <li>Servitudes de passage (accès à la route publique garanti ?)</li>
                                    <li>Zoning (peut-on construire ?)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-3 flex items-center"><Building2 className="h-4 w-4 mr-2 text-indigo-500" /> Condo Specifics</h4>
                                <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                                    <li>Quota étranger disponible ?</li>
                                    <li>Santé financière de la copropriété (Juristic Person).</li>
                                    <li>Dettes de maintenance sur l'unité (CAM fees).</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-3 flex items-center"><Key className="h-4 w-4 mr-2 text-indigo-500" /> Paiement</h4>
                                <p className="text-sm text-slate-600">
                                    Pour enregistrer un condo étranger, il faut prouver que les fonds viennent de l'étranger (FET Form / Credit Advice bancaire).
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 4. Fees */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="flex items-center mb-6">
                        <CreditCard className="h-8 w-8 text-slate-600 mr-4" />
                        <h2 className="text-2xl font-bold text-slate-900">4. Frais de Transfert (Land Office)</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-xl font-bold text-slate-800">2%</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Transfer Fee</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-xl font-bold text-slate-800">0.5%</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Stamp Duty</div>
                            <div className="text-[10px] text-slate-400 mt-1">(si pas de SBT)</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-xl font-bold text-slate-800">3.3%</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Specific Business Tax</div>
                            <div className="text-[10px] text-slate-400 mt-1">(si vente &lt; 5 ans)</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-xl font-bold text-slate-800">Variable</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Withholding Tax</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 5. Red Flags */}
            <section className="py-12 bg-red-50 border-y border-red-100">
                <Container>
                    <div className="flex items-start gap-4">
                        <AlertOctagon className="h-8 w-8 text-red-600 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-bold text-red-900 mb-4">5. Red Flags à fuir</h2>
                            <ul className="space-y-2 text-red-800">
                                <li>• <strong>« On met un Thai nominee et c’est réglé »</strong> : Illégal et risqué.</li>
                                <li>• <strong>« Lease 90 ans garanti »</strong> : Juridiquement faux. Seul le bail enregistré (30 ans) est opposable aux tiers. Les renouvellements sont contractuels.</li>
                                <li>• <strong>« Titre pas Chanote mais c’est pareil »</strong> : Non. Vérifiez exactement ce que vous achetez (droit d'usage vs possession).</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 6. CTA & Internal Links */}
            <section className="py-20 bg-slate-900 text-white" id="audit">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Expertise Immobilière & Visa</h2>
                            <p className="text-slate-300 mb-8">
                                L'investissement immobilier en Thaïlande va souvent de pair avec une stratégie de visa long terme. Sécurisez les deux avec notre audit.
                            </p>

                            <div className="space-y-4 mb-8">
                                <h4 className="font-semibold text-amber-500">Liens Utiles :</h4>
                                <ul className="space-y-2">
                                    <li><Link href={langPath('retirement-visa')} className="text-slate-300 hover:text-white hover:underline flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Visa Retraite (Pour vivre dans votre condo)</Link></li>
                                    <li><Link href={langPath('dtv')} className="text-slate-300 hover:text-white hover:underline flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Visa DTV (Si vous télétravaillez)</Link></li>
                                    <li><Link href={langPath('family-visa')} className="text-slate-300 hover:text-white hover:underline flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Visa Famille (Relocation)</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-amber-500 mb-2">Audit « Immobilier Thaïlande »</h3>
                            <ul className="space-y-3 mt-6 mb-8 text-sm text-slate-300">
                                <li className="flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Qualification (Condo vs Villa)</li>
                                <li className="flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Choix structure (Leasehold/Usufruit)</li>
                                <li className="flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Checklist Due Diligence</li>
                                <li className="flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Estimation Taxes & Frais</li>
                            </ul>
                            <Link
                                href={langPath('contact')}
                                className="w-full block text-center bg-amber-500 text-slate-900 font-bold py-4 rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                            >
                                Demander mon Audit Immo
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Questions Fréquentes (Immobilier)</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h4 className="font-bold text-slate-900 mb-2">Puis-je acheter une villa ?</h4>
                            <p className="text-slate-600">Vous pouvez acheter la <strong>construction</strong> (la maison) en votre nom, mais la <strong>propriété foncière</strong> (le terrain) est réservée aux Thaïlandais. La solution standard est de louer le terrain (Leasehold 30 ans) tout en possédant la maison.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h4 className="font-bold text-slate-900 mb-2">Le condo est-il plus simple ?</h4>
                            <p className="text-slate-600">Oui. C'est la seule façon pour un étranger d'avoir un titre de propriété en pleine propriété (Freehold) à son nom, identique à un propriétaire thaïlandais, tant que le quota étranger de l'immeuble n'est pas atteint.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default BuyPropertyClientPage;
