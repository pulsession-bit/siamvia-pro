'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

export const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'th', label: 'ไทย', flag: '🇹🇭' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
] as const;

interface LanguageSelectorProps {
    currentLang: string;
    onSwitch: (lang: string) => void;
    align?: 'left' | 'right';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onSwitch, align = 'right' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentFlag = languages.find(l => l.code === currentLang)?.flag || '🇬🇧';

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 bg-slate-800/80 hover:bg-slate-700 text-white px-3 py-2 rounded-lg transition-colors border border-slate-700/50 backdrop-blur-sm"
            >
                <span className="text-lg leading-none">{currentFlag}</span>
                <span className="uppercase text-sm font-semibold">{currentLang}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-slate-100 animate-in fade-in zoom-in-95 duration-100 z-50`}>
                    <div className="max-h-64 overflow-y-auto custom-scrollbar">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    onSwitch(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center space-x-3 px-4 py-2.5 text-sm hover:bg-amber-50 transition-colors ${currentLang === lang.code ? 'bg-amber-50/50 text-amber-600 font-semibold' : 'text-slate-700'
                                    }`}
                            >
                                <span className="text-xl leading-none">{lang.flag}</span>
                                <span>{lang.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
