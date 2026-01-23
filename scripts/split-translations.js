#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Chemins
const sourcePath = path.join(__dirname, '../src/utils/translations.ts');
const localesDir = path.join(__dirname, '../src/locales');

// Créer le dossier locales
if (!fs.existsSync(localesDir)) {
    fs.mkdirSync(localesDir, { recursive: true });
}

// Lire le fichier source
let content = fs.readFileSync(sourcePath, 'utf8');

// Nettoyage pour eval() : supprimer les types TS si présents et l'export
// On ne garde que l'objet JS pur
content = content.replace(/export const translations\s*(:\s*[\w<>\[\]]+)?\s*=\s*/, 'var translations = ');
content = content.replace(/as const;?/, ''); // Supprimer 'as const' si présent
// Supprimer les imports au début
content = content.replace(/import .*?;\n/g, '');

try {
    // Exécuter le code pour avoir l'objet en mémoire
    // C'est "dangereux" en prod, mais ici c'est un script de dev contrôlé
    eval(content);
} catch (e) {
    console.error("❌ Erreur lors du parsing du fichier translations.ts");
    console.error(e);
    process.exit(1);
}

// @ts-ignore (var translations is defined in eval)
const data = translations;
const languages = Object.keys(data);

console.log(`🔍 Langues trouvées : ${languages.join(', ')}\n`);

languages.forEach(lang => {
    const langFilePath = path.join(localesDir, `${lang}.ts`);
    const langContent = `export const ${lang} = ${JSON.stringify(data[lang], null, 2)};`;

    // Ajouter 'export const'
    fs.writeFileSync(langFilePath, langContent, 'utf8');
    console.log(`✅ ${lang}.ts généré`);
});

// Créer le nouveau fichier src/utils/translations.ts qui importe tout
const newTranslationsContent = `import { ${languages.join(', ')} } from '@/locales';

export const translations = {
  ${languages.join(',\n  ')}
};

export type Language = keyof typeof translations;
// Type derived from French as source of truth
export type Translation = typeof translations.fr;
`;

// On ne l'écrase pas tout de suite, on le met à côté pour vérification
const newPath = path.join(__dirname, '../src/utils/translations.new.ts');
fs.writeFileSync(newPath, newTranslationsContent, 'utf8');

// Créer un index.ts dans src/locales pour faciliter l'import
const indexLocalesContent = `${languages.map(lang => `export * from './${lang}';`).join('\n')}`;
fs.writeFileSync(path.join(localesDir, 'index.ts'), indexLocalesContent, 'utf8');

console.log('\n🎉 Fichiers générés dans src/locales/');
console.log('👉 Un fichier src/utils/translations.new.ts a été créé.');
console.log('👉 Renommez-le en translations.ts après vérification.');
