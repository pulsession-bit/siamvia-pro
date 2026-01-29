import { fr } from '../src/locales/fr';
import { en } from '../src/locales/en';

function compareObjects(obj1: any, obj2: any, path = '', missingInObj1: string[] = [], missingInObj2: string[] = []) {
  const keys1 = new Set(Object.keys(obj1));
  const keys2 = new Set(Object.keys(obj2));

  for (const key of keys2) {
    if (!keys1.has(key)) {
      missingInObj1.push(path ? `${path}.${key}` : key);
    } else if (typeof obj2[key] === 'object' && obj2[key] !== null && typeof obj1[key] === 'object' && obj1[key] !== null) {
      compareObjects(obj1[key], obj2[key], path ? `${path}.${key}` : key, missingInObj1, missingInObj2);
    }
  }

  for (const key of keys1) {
    if (!keys2.has(key)) {
      missingInObj2.push(path ? `${path}.${key}` : key);
    }
  }

  return { missingInObj1, missingInObj2 };
}

const { missingInObj1: missingInFr, missingInObj2: missingInEn } = compareObjects(fr, en);

console.log('--- Missing in FR (Source of truth should be complete) ---');
console.log(missingInFr.join('\n'));
console.log('\n--- Missing in EN ---');
console.log(missingInEn.join('\n'));
