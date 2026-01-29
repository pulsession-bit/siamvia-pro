import fs from 'fs';
import path from 'path';
import { fr } from '../src/locales/fr';
import { en } from '../src/locales/en';
import { de } from '../src/locales/de';
import { es } from '../src/locales/es';
import { it as itLang } from '../src/locales/it';
import { th } from '../src/locales/th';
import { ru } from '../src/locales/ru';
import { zh } from '../src/locales/zh';
import { ja } from '../src/locales/ja';
import { ko } from '../src/locales/ko';
import { ar } from '../src/locales/ar';

const locales = { fr, en, de, es, it: itLang, th, ru, zh, ja, ko, ar };
const localeNames = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];

// Helper to deep merge/backfill
function fillMissing(target: any, source: any, fallback: any, keyPath: string = ''): any {
    if (source === null || source === undefined) return source;

    // Initialize result
    let result: any;
    if (target !== undefined && target !== null) {
        result = Array.isArray(target) ? [...target] : { ...target };
    } else {
        // If target is missing, use fallback or source
        return fallback ?? source;
    }

    // If Types mismatch, overwrite
    if (typeof source !== typeof result || Array.isArray(source) !== Array.isArray(result)) {
        return fallback ?? source;
    }

    // Iterate source keys (or indices)
    for (const key in source) {
        const currentPath = keyPath ? `${keyPath}.${key}` : key;
        const srcVal = source[key];
        const fallbackVal = fallback?.[key];
        const targetVal = result[key];

        if (typeof srcVal === 'object' && srcVal !== null) {
            // Check array specifics
            if (Array.isArray(srcVal)) {
                if (!Array.isArray(targetVal)) {
                    result[key] = fallbackVal ?? srcVal;
                    console.log(`[FIX] Overwrote non-array with array at: ${currentPath}`);
                } else {
                    // Both are arrays. Ensure length matches source (FR)
                    const sArr = srcVal as any[];
                    const rArr = targetVal as any[];
                    const fArr = (Array.isArray(fallbackVal) ? fallbackVal : srcVal) as any[];

                    if (rArr.length < sArr.length) {
                        for (let i = rArr.length; i < sArr.length; i++) {
                            // Use fallback (EN) value if available, else Source (FR)
                            rArr.push(fArr[i] ?? sArr[i]);
                            console.log(`[FIX] Added missing array item at: ${currentPath}[${i}]`);
                        }
                    }
                }
            } else {
                // Normal object recursion
                result[key] = fillMissing(targetVal, srcVal, fallbackVal, currentPath);
            }
        } else {
            // Primitive value
            if (result[key] === undefined) {
                result[key] = fallbackVal ?? srcVal;
                console.log(`[FIX] Added missing key: ${currentPath}`);
            }
        }
    }
    return result;
}

console.log("Starting translation fix...");

// Iterate all languages
for (const lang of localeNames) {
    console.log(`Processing ${lang}...`);
    const original = locales[lang as keyof typeof locales];

    // For FR, source is itself (no change needed usually, but we standardize format)
    // For EN, fallback is FR
    // For others, fallback is EN

    // If lang is FR, we just format it.
    let fixed;
    if (lang === 'fr') {
        fixed = original;
    } else {
        const fallback = lang === 'en' ? locales.fr : locales.en;
        fixed = fillMissing(original, locales.fr, fallback);
    }

    // Write back
    const filePath = path.join(process.cwd(), 'src', 'locales', `${lang}.ts`);
    const fileContent = `export const ${lang} = ${JSON.stringify(fixed, null, 2)};\n`;

    fs.writeFileSync(filePath, fileContent);
    console.log(`Saved ${lang}.ts`);
}

console.log("All files processed and saved.");
