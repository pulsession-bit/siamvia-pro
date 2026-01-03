import React from 'react';
import { Search, Sparkles, Loader2, Clock } from 'lucide-react';

interface SearchHeroProps {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    aiHelper: string;
    aiTitle: string;
    suggestions: string[];
    search: string;
    setSearch: (val: string) => void;
    isAiLoading: boolean;
    aiResponse: string | null;
    handleAiSearch: (val?: string) => void;
    setShowAppointment: (val: boolean) => void;
}

export const SearchHero: React.FC<SearchHeroProps> = ({
    title,
    subtitle,
    searchPlaceholder,
    aiHelper,
    aiTitle,
    suggestions,
    search,
    setSearch,
    isAiLoading,
    aiResponse,
    handleAiSearch,
    setShowAppointment
}) => {
    return (
        <section className="bg-gradient-to-r from-blue-900 to-red-900 text-white py-20 px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">{title}</h1>
                <p className="text-xl opacity-90 mb-10 font-light max-w-2xl mx-auto">{subtitle}</p>

                <div className="relative max-w-2xl mx-auto space-y-6">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder={searchPlaceholder}
                            className="w-full pl-12 pr-32 py-4 rounded-2xl bg-white text-gray-900 shadow-2xl focus:ring-4 focus:ring-amber-500/20 focus:outline-none text-lg"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAiSearch()}
                        />
                        <div className="absolute right-2 top-2 bottom-2">
                            <button
                                onClick={() => handleAiSearch()}
                                disabled={isAiLoading || !search.trim()}
                                className="h-full px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                            >
                                {isAiLoading ? (
                                    <Loader2 className="animate-spin h-5 w-5" />
                                ) : (
                                    <>
                                        <Sparkles className="h-5 w-5" />
                                        <span className="hidden sm:inline">{aiHelper}</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {suggestions && (
                        <div className="flex flex-wrap gap-2 justify-center mt-4">
                            {suggestions.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setSearch(s);
                                        handleAiSearch(s);
                                    }}
                                    className="text-[11px] bg-white/10 hover:bg-amber-500 hover:text-slate-900 border border-white/20 text-white px-3 py-1.5 rounded-full transition-all backdrop-blur-sm"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}

                    {aiResponse && (
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-left shadow-2xl animate-in fade-in slide-in-from-top-4">
                            <div className="flex items-center gap-3 mb-3 text-amber-400 font-bold border-b border-white/10 pb-2">
                                <Sparkles className="h-5 w-5" />
                                {aiTitle}
                            </div>
                            <div className="text-slate-100 leading-relaxed whitespace-pre-wrap">
                                {aiResponse}
                            </div>

                            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-amber-500 p-2 rounded-xl">
                                        <Clock className="w-5 h-5 text-slate-900" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Consultation Express (15 min)</h4>
                                        <p className="text-amber-200/70 text-[10px] uppercase font-black tracking-wider">Réponse immédiate</p>
                                    </div>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowAppointment(true);
                                    }}
                                    className="w-full sm:w-auto bg-amber-500 hover:bg-white text-slate-900 px-6 py-2.5 rounded-xl text-xs font-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
                                >
                                    DÉMARRER LE CHAT
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
