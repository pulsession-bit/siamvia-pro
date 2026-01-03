'use client';

import React, { useState } from 'react';
import { Sparkles, Send, Loader2, CheckCircle, AlertCircle, RefreshCcw } from 'lucide-react';

export default function SearchAiTestPage() {
    const [query, setQuery] = useState('I am a 55 year old retiree from France with 1 million THB');
    const [lang, setLang] = useState('en');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const runTest = async () => {
        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const res = await fetch('/api/search-ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query, lang })
            });

            const data = await res.json();

            if (res.ok) {
                setResult(data);
            } else {
                setError(data.details || data.error || 'Erreur inconnue');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erreur de connexion');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white p-8 font-sans">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-amber-500 rounded-2xl shadow-lg shadow-amber-500/20">
                        <Sparkles className="w-8 h-8 text-slate-900" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black tracking-tight">AI SEARCH TESTER</h1>
                        <p className="text-slate-400 text-sm">Validation de l'API Gemini 2.0 Flash</p>
                    </div>
                </div>

                <div className="grid gap-6 bg-slate-800/50 border border-slate-700 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">User Query</label>
                            <textarea
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white focus:ring-2 focus:ring-amber-500 outline-none transition min-h-[100px]"
                                placeholder="Simulez une question utilisateur..."
                            />
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Language</label>
                                <select
                                    value={lang}
                                    onChange={(e) => setLang(e.target.value)}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-amber-500 outline-none transition"
                                >
                                    <option value="fr">Français</option>
                                    <option value="en">English</option>
                                    <option value="de">Deutsch</option>
                                    <option value="es">Español</option>
                                    <option value="it">Italiano</option>
                                    <option value="th">Thai</option>
                                </select>
                            </div>
                            <div className="flex items-end">
                                <button
                                    onClick={runTest}
                                    disabled={isLoading}
                                    className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-8 py-3 rounded-xl transition flex items-center gap-2 disabled:opacity-50"
                                >
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                                    RUN TEST
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-slate-700 pt-8">
                        <label className="block text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Execution Result</label>

                        {!result && !error && !isLoading && (
                            <div className="text-center py-12 border-2 border-dashed border-slate-700 rounded-3xl text-slate-600">
                                En attente d'exécution...
                            </div>
                        )}

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-2xl flex items-start gap-4">
                                <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-red-500">API Error</h3>
                                    <p className="text-sm text-red-200/70 mt-1 font-mono">{error}</p>
                                </div>
                            </div>
                        )}

                        {result && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                                <div className="bg-green-500/10 border border-green-500/50 p-6 rounded-2xl flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-green-500 capitalize">Response Received ({result.recommendationId || 'No Specific Visa'})</h3>
                                        <p className="text-slate-200 mt-2 leading-relaxed">{result.explanation}</p>
                                    </div>
                                </div>

                                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Raw JSON Data</p>
                                    <pre className="text-xs text-amber-400 font-mono overflow-x-auto">
                                        {JSON.stringify(result, null, 2)}
                                    </pre>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center px-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase">System Status: Online</span>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="text-slate-500 hover:text-white transition flex items-center gap-1 text-[10px] font-bold uppercase"
                    >
                        <RefreshCcw className="w-3 h-3" /> Reset Page
                    </button>
                </div>
            </div>
        </div>
    );
}
