import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { VISAS_DATA } from '../data/visas';
import { Language } from '@/types/index';

export const useVisaSearch = (globalLang: string) => {
    const [lang, setLang] = useState<Language>(
        (['fr', 'en', 'th', 'zh', 'ja', 'de', 'es', 'it', 'ru', 'ko', 'ar'].includes(globalLang)
            ? globalLang
            : 'fr') as Language
    );

    // Sync local widget lang with global context
    useEffect(() => {
        if (['fr', 'en', 'th', 'zh', 'ja', 'de', 'es', 'it', 'ru', 'ko', 'ar'].includes(globalLang)) {
            setLang(globalLang as Language);
        }
    }, [globalLang]);

    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [selectedVisa, setSelectedVisa] = useState<any | null>(null);

    const [aiResponse, setAiResponse] = useState<string | null>(null);
    const [isAiLoading, setIsAiLoading] = useState(false);
    const [recommendedVisaId, setRecommendedVisaId] = useState<string | null>(null);
    const [alternativeVisaIds, setAlternativeVisaIds] = useState<string[]>([]);
    const [showAppointment, setShowAppointment] = useState(false);

    const searchParams = useSearchParams();
    const urlQuery = searchParams.get('q');

    const handleAiSearch = async (overrideQuery?: string) => {
        const queryToUse = overrideQuery || search;
        if (!queryToUse.trim()) return;

        setIsAiLoading(true);
        setAiResponse(null);

        try {
            const res = await fetch('/api/search-ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: queryToUse, lang })
            });
            const data = await res.json();

            if (data.explanation) {
                setAiResponse(data.explanation);
                setRecommendedVisaId(data.recommendationId);
                setAlternativeVisaIds(data.alternativeIds || []);

                if (data.recommendationId) {
                    setTimeout(() => {
                        document.getElementById('visa-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 800);
                }
            } else {
                setAiResponse("Sorry, I couldn't process your request. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setAiResponse("An error occurred. Please try again later.");
        } finally {
            setIsAiLoading(false);
        }
    };

    // Effect for handling initial search from URL
    useEffect(() => {
        if (urlQuery && !aiResponse && !isAiLoading) {
            setSearch(urlQuery);
            handleAiSearch(urlQuery);
        }
    }, [urlQuery, lang]);

    const filteredVisas = useMemo(() => {
        let list = VISAS_DATA.filter(visa => {
            const matchesSearch = visa.name[lang].toLowerCase().includes(search.toLowerCase());
            const matchesCategory = activeCategory ? visa.category === activeCategory : true;

            if (recommendedVisaId === visa.id) return true;
            if (alternativeVisaIds.includes(visa.id)) return true;

            return matchesSearch && matchesCategory;
        });

        return [...list].sort((a, b) => {
            if (a.id === recommendedVisaId) return -1;
            if (b.id === recommendedVisaId) return 1;
            if (alternativeVisaIds.includes(a.id) && !alternativeVisaIds.includes(b.id)) return -1;
            if (!alternativeVisaIds.includes(a.id) && alternativeVisaIds.includes(b.id)) return 1;
            return 0;
        });
    }, [lang, search, activeCategory, recommendedVisaId, alternativeVisaIds]);

    return {
        lang,
        search,
        setSearch,
        activeCategory,
        setActiveCategory,
        selectedVisa,
        setSelectedVisa,
        aiResponse,
        setAiResponse,
        isAiLoading,
        recommendedVisaId,
        alternativeVisaIds,
        showAppointment,
        setShowAppointment,
        handleAiSearch,
        filteredVisas
    };
};
