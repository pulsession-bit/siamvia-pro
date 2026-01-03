import { fr } from './fr';
import { en } from './en';
import { de } from './de';
import { es } from './es';
import { it } from './it';
import { th } from './th';
import { ru } from './ru';
import { zh } from './zh';
import { ja } from './ja';
import { ko } from './ko';
import { ar } from './ar';

export const translations: Record<string, any> = {
    fr, en, de, es, it, th, ru, zh, ja, ko, ar
};

// Fonction pour charger uniquement la langue demandée (Server Side)
export const getDictionary = (lang: string) => {
    return translations[lang] || translations.en;
};

export type Language = keyof typeof translations;
