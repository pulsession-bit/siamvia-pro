import React, { useState, FormEvent, KeyboardEvent } from 'react';
import { Search, Sparkles, Loader2, ArrowRight } from 'lucide-react';

interface SearchAIProps {
    onSearch: (query: string) => void;
    placeholder: string;
    buttonLabel: string;
    aiResponse: string | null;
    isAiLoading: boolean;
    suggestions?: string[];
    title?: string;
}

export const SearchAI: React.FC<SearchAIProps> = ({
    onSearch,
    placeholder,
    buttonLabel,
    aiResponse,
    isAiLoading,
    suggestions = [],
    title = "Avis de l'Expert IA"
}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch(query);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto -mt-10 relative z-20 px-4">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
                <form onSubmit={handleSubmit} className="relative flex items-center mb-6">
                    <div className="absolute left-4 text-slate-400">
                        <Search className="w-6 h-6" />
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                        className="w-full py-5 pl-14 pr-32 rounded-xl text-lg bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                    <button
                        type="submit"
                        disabled={isAiLoading || !query.trim()}
                        className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-6 rounded-lg font-bold hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                        {isAiLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                <span className="hidden md:inline mr-2">{buttonLabel}</span>
                                <Sparkles className="w-5 h-5 text-amber-400" />
                            </>
                        )}
                    </button>
                </form>

                {/* Suggestions */}
                {!aiResponse && suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                        {suggestions.map((suggestion, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setQuery(suggestion);
                                    onSearch(suggestion);
                                }}
                                className="text-xs md:text-sm bg-slate-100 hover:bg-amber-50 hover:text-amber-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors border border-transparent hover:border-amber-200"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                )}

                {/* AI Response Area */}
                {aiResponse && (
                    <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Sparkles className="w-24 h-24 text-amber-500" />
                            </div>

                            <div className="flex items-center mb-4 relative z-10">
                                <div className="bg-amber-500 p-2 rounded-lg mr-3 shadow-lg shadow-amber-500/20">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">
                                    {title}
                                </h3>
                            </div>

                            <div className="prose prose-sm md:prose-base text-slate-700 relative z-10 max-w-none">
                                <div className="whitespace-pre-line leading-relaxed">
                                    {aiResponse}
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-amber-200/50 flex justify-end relative z-10">
                                <button
                                    onClick={() => document.getElementById('visa-grid')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-amber-700 font-bold text-sm flex items-center hover:underline"
                                >
                                    Voir les résultats ci-dessous <ArrowRight className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
