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
  dictionary: any;
  fallbackDictionary?: any;
}> = ({ children, initialLang, dictionary, fallbackDictionary }) => {
  const [language, setLanguage] = useState<Language>(initialLang);

  // Sync state if prop changes (essential for client-side navigation between locales)
  React.useEffect(() => {
    setLanguage(initialLang);
  }, [initialLang]);

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

/**
 * DictionaryExtender merges page-specific translation keys into the
 * LanguageProvider, creating a new nested provider. This allows the outer
 * layout to pass only shared keys (~5 KB) and each page to add its own
 * page-specific keys on top.
 *
 * The t() function will look up keys in both the extended dictionary AND
 * the original (shared) dictionary, so Navbar/Footer/Cart translations
 * continue to work seamlessly.
 *
 * Usage in a Server Component page.tsx:
 *
 *   const full = getFullDictionary(lang);
 *   const pageDictionary = { dtv_page: full.dtv_page, hero: full.hero };
 *   return (
 *     <DictionaryExtender dictionary={pageDictionary} fallbackDictionary={...}>
 *       <DTVClientPage />
 *     </DictionaryExtender>
 *   );
 */
export const DictionaryExtender: React.FC<{
  children: ReactNode;
  dictionary: Record<string, any>;
  fallbackDictionary?: Record<string, any>;
}> = ({ children, dictionary, fallbackDictionary }) => {
  const parent = useContext(LanguageContext);
  if (!parent) throw new Error('DictionaryExtender must be used within a LanguageProvider');

  const { language, setLanguage } = parent;
  const parentT = parent.t;

  const t = useMemo(() => {
    return (path: string): string => {
      // 1. Try the extended (page-specific) dictionary first
      const keys = path.split('.');
      let current: any = dictionary;
      for (const key of keys) {
        if (!current || current[key] === undefined) {
          current = undefined;
          break;
        }
        current = current[key];
      }
      if (current !== undefined) return current as string;

      // 2. Try the page-specific fallback dictionary
      if (fallbackDictionary) {
        let fallback: any = fallbackDictionary;
        for (const key of keys) {
          if (fallback && fallback[key] !== undefined) {
            fallback = fallback[key];
          } else {
            fallback = undefined;
            break;
          }
        }
        if (fallback !== undefined) return fallback as string;
      }

      // 3. Fall through to the parent (layout-level) dictionary (nav, footer, cart)
      return parentT(path);
    };
  }, [dictionary, fallbackDictionary, parentT]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

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
