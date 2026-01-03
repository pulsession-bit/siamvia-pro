'use client';

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

type Language = 'fr' | 'en' | 'de' | 'it' | 'es' | 'th' | 'ru' | 'zh' | 'ja' | 'ko' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{
  children: ReactNode;
  initialLang: Language;
  dictionary: any; // On passe le dictionnaire de la langue actuelle uniquement
  fallbackDictionary?: any; // Optionnel : Anglais pour les clés manquantes
}> = ({ children, initialLang, dictionary, fallbackDictionary }) => {
  const [language, setLanguage] = useState<Language>(initialLang);

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = dictionary;

    for (const key of keys) {
      if (!current || current[key] === undefined) {
        // Fallback to English dictionary if current key is missing
        if (fallbackDictionary) {
          let fallback: any = fallbackDictionary;
          for (const fbKey of keys) {
            if (fallback && fallback[fbKey] !== undefined) {
              fallback = fallback[fbKey];
            } else {
              fallback = undefined;
              break;
            }
          }
          if (fallback !== undefined) return fallback as string;
        }

        console.warn(`Missing translation for key: ${path} in language: ${language}`);
        return path;
      }
      current = current[key];
    }

    return current as string;
  };

  const value = useMemo(() => ({ language, setLanguage, t }), [language, dictionary]);

  return (
    <LanguageContext.Provider value={value}>
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
