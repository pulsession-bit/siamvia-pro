import fs from 'fs';
import path from 'path';

// Load FR as reference manually because imports might be strictly typed or messy
// Actually, let's try to simple regex parse or dynamic require if possible.
// Given ts-node/tsx, dynamic import might work but can be tricky with named exports.
// We'll use a safer regex approach for keys to avoid compilation need of the locales themselves if they import things.
// BUT, the locales seem to be simple objects. Let's try importing 'fr' properly.
import { fr } from '../src/locales/fr';
import { en } from '../src/locales/en';
import { es } from '../src/locales/es';
import { de } from '../src/locales/de';
import { it } from '../src/locales/it';
import { th } from '../src/locales/th';
import { ru } from '../src/locales/ru';
import { zh } from '../src/locales/zh';
import { ja } from '../src/locales/ja';
import { ko } from '../src/locales/ko';
import { ar } from '../src/locales/ar';

const locales: Record<string, any> = { fr, en, es, de, it, th, ru, zh, ja, ko, ar };

// 1. DUPLICATE CHECK (Regex based as before)
function checkDuplicates(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const keys = new Set();
  const duplicates: string[] = [];
  const keyRegex = /^\s*"([a-zA-Z0-9_]+)":\s*{/;

  lines.forEach((line, index) => {
    const match = line.match(keyRegex);
    if (match) {
      const key = match[1];
      if (keys.has(key)) {
        duplicates.push(`${key} (line ${index + 1})`);
      } else {
        keys.add(key);
      }
    }
  });
  return duplicates;
}

// 2. MISSING KEYS CHECK (Recursive comparison)
// 2. MISSING KEYS CHECK (Recursive comparison with Arrays)
function getMissingKeys(refObj: any, targetObj: any, path = ''): string[] {
  const missing: string[] = [];

  // If ref is Array
  if (Array.isArray(refObj)) {
    if (!Array.isArray(targetObj)) {
      missing.push(`${path} (expected Array)`);
      return missing;
    }
    // Check length
    if (targetObj.length < refObj.length) {
      for (let i = targetObj.length; i < refObj.length; i++) {
        missing.push(`${path}[${i}]`);
      }
    }
    return missing;
  }

  // If ref is Object
  if (typeof refObj === 'object' && refObj !== null) {
    const refKeys = Object.keys(refObj);
    for (const key of refKeys) {
      const currentPath = path ? `${path}.${key}` : key;
      if (targetObj === undefined || targetObj === null) {
        missing.push(currentPath); // Only push parent, not children
        continue;
      }
      if (targetObj[key] === undefined) {
        missing.push(currentPath);
      } else if (typeof refObj[key] === 'object' && refObj[key] !== null) {
        missing.push(...getMissingKeys(refObj[key], targetObj[key], currentPath));
      }
    }
  }
  return missing;
}

console.log('=== VERIFICATION REPORT ===');

// Check duplicates
console.log('\n--- DUPLICATE KEYS CHECK ---');
const files = ['fr', 'en', 'es', 'de', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];
files.forEach(lang => {
  const dups = checkDuplicates(`src/locales/${lang}.ts`);
  if (dups.length > 0) {
    console.log(`[FAIL] ${lang}.ts has duplicates:`, dups);
  } else {
    console.log(`[PASS] ${lang}.ts clean`);
  }
});

// Check missing keys vs FR
console.log('\n--- MISSING KEYS CHECK (vs FR) ---');
files.forEach(lang => {
  if (lang === 'fr') return;
  const missing = getMissingKeys(fr, locales[lang]);
  if (missing.length > 0) {
    console.log(`[WARN] ${lang}.ts missing ${missing.length} keys.`);
    // Show first 5 missing to give an idea
    console.log(missing.slice(0, 5).map(k => `  - ${k}`).join('\n'));
    if (missing.length > 5) console.log(`  ...and ${missing.length - 5} more.`);
  } else {
    console.log(`[PASS] ${lang}.ts has all keys from FR`);
  }
});
