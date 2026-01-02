'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../utils/translations';

type Language = 'fr' | 'en' | 'de' | 'it' | 'es' | 'th' | 'ru' | 'zh' | 'ja' | 'ko' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{
  children: ReactNode;
  initialLang?: Language;
}> = ({ children, initialLang = 'fr' }) => {
  const [language, setLanguage] = useState<Language>(initialLang);

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];

    // Fallback to English if translation is missing for specific language (whole object)
    if (!current) {
      current = translations['en'];
    }

    for (const key of keys) {
      if (current[key] === undefined) {
        // Try fallback to English for this specific key
        let fallback: any = translations['en'];
        for (const fbKey of keys) {
          if (fallback && fallback[fbKey]) {
            fallback = fallback[fbKey];
          } else {
            fallback = undefined;
            break;
          }
        }
        if (fallback) return fallback as string;

        console.warn(`Missing translation for key: ${path} in language: ${language}`);
        return path;
      }
      current = current[key];
    }

    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
