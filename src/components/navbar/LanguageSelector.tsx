import React from 'react';
import { Globe } from 'lucide-react';

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
];

interface LanguageSelectorProps {
    currentLang: string;
    onSwitch: (newLang: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onSwitch }) => {
    return (
        <div className="relative group">
            <button className="flex items-center space-x-1 p-2 rounded-lg text-xs font-bold transition text-white/80 hover:bg-white/10">
                <Globe className="h-4 w-4" />
                <span>{currentLang.toUpperCase()}</span>
            </button>

            <div className="absolute right-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                <div className="bg-white rounded-xl shadow-xl py-2 border border-slate-100">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => onSwitch(lang.code)}
                            className={`flex w-full items-center px-4 py-2 text-sm text-left hover:bg-amber-50 hover:text-amber-600 transition ${currentLang === lang.code ? 'bg-amber-50 text-amber-600 font-bold' : 'text-slate-700'}`}
                        >
                            <span className="mr-3 text-lg">{lang.flag}</span>
                            {lang.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
