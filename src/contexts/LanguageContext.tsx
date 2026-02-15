'use client';

import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect, useRef } from 'react';
import { translations } from '@/utils/translations';

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
  dictionary: any; // Slim dictionary for SSR (global keys only)
  fallbackDictionary?: any;
}> = ({ children, initialLang, dictionary, fallbackDictionary }) => {
  const [language, setLanguage] = useState<Language>(initialLang);

  // After hydration, use the full dictionary from the client-side bundle
  // This avoids serializing the entire dictionary in the HTML
  const fullDictRef = useRef<any>(null);
  const fullFallbackRef = useRef<any>(null);

  useEffect(() => {
    // Load full dictionaries from client-side bundle (already in JS chunks, not duplicated in HTML)
    fullDictRef.current = translations[language as keyof typeof translations] || translations.en;
    fullFallbackRef.current = language !== 'en' ? translations.en : undefined;
  }, [language]);

  // Sync state if prop changes
  useEffect(() => {
    setLanguage(initialLang);
  }, [initialLang]);

  const t = (path: string): string => {
    const keys = path.split('.');

    // Use full dictionary if available (client-side), otherwise slim SSR dictionary
    const dict = fullDictRef.current || dictionary;
    const fallback = fullFallbackRef.current || fallbackDictionary;

    let current: any = dict;
    for (const key of keys) {
      if (!current || current[key] === undefined) {
        // Fallback to English dictionary if current key is missing
        if (fallback) {
          let fb: any = fallback;
          for (const fbKey of keys) {
            if (fb && fb[fbKey] !== undefined) {
              fb = fb[fbKey];
            } else {
              fb = undefined;
              break;
            }
          }
          if (fb !== undefined) return fb as string;
        }

        // If using slim dict and key is missing, try SSR dictionary prop (may have it)
        if (fullDictRef.current) {
          let ssr: any = dictionary;
          for (const ssrKey of keys) {
            if (ssr && ssr[ssrKey] !== undefined) {
              ssr = ssr[ssrKey];
            } else {
              ssr = undefined;
              break;
            }
          }
          if (ssr !== undefined) return ssr as string;
        }

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
