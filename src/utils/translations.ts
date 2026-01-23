import { fr, en, de, es, it, th, ru, zh, ja, ko, ar } from '@/locales';

export const translations = {
  fr,
  en,
  de,
  es,
  it,
  th,
  ru,
  zh,
  ja,
  ko,
  ar
};

export type Language = keyof typeof translations;
// Type derived from French as source of truth
export type Translation = typeof translations.fr;
