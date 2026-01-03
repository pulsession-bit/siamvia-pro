#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Lire le fichier de traductions actuel
const translationsPath = path.join(__dirname, '../src/utils/translations.ts');
const content = fs.readFileSync(translationsPath, 'utf8');

// Extraire l'objet translations
const match = content.match(/export const translations = ({[\s\S]*});/);
if (!match) {
    console.error('❌ Impossible de trouver l\'objet translations');
    process.exit(1);
}

// Évaluer l'objet (dangereux mais OK pour un script one-time)
const translationsCode = match[1];

// Langues à extraire
const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];

console.log('🔄 Extraction des langues...\n');

// Pour chaque langue, extraire sa section
languages.forEach(lang => {
    // Trouver le début et la fin de la section de langue
    const langRegex = new RegExp(`${lang}:\\s*{([\\s\\S]*?)(?=\\n\\s*},\\s*(?:${languages.join('|')}):)|${lang}:\\s*{([\\s\\S]*?)(?=\\n\\s*}\\s*};)`, 'm');
    const langMatch = content.match(langRegex);

    if (!langMatch) {
        console.error(`❌ Impossible de trouver la langue: ${lang}`);
        return;
    }

    const langContent = langMatch[1] || langMatch[2];

    // Créer le fichier pour cette langue
    const fileContent = `export const ${lang} = {\n${langContent}\n};\n`;

    const outputPath = path.join(__dirname, `../src/utils/translations/${lang}.ts`);
    fs.writeFileSync(outputPath, fileContent, 'utf8');

    const size = (fs.statSync(outputPath).size / 1024).toFixed(1);
    console.log(`✅ ${lang}.ts créé (${size} KB)`);
});

// Créer le fichier index.ts
const indexContent = `// Auto-generated index file for translations
${languages.map(lang => `import { ${lang} } from './${lang}';`).join('\n')}

export const translations = {
  ${languages.join(',\n  ')}
};

export type Language = keyof typeof translations;
export type Translation = typeof translations.fr;
`;

const indexPath = path.join(__dirname, '../src/utils/translations/index.ts');
fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('\n✅ index.ts créé');

// Sauvegarder l'ancien fichier
const backupPath = path.join(__dirname, '../src/utils/translations.ts.backup');
fs.copyFileSync(translationsPath, backupPath);
console.log('✅ Backup créé: translations.ts.backup');

console.log('\n🎉 Séparation terminée avec succès !');
console.log('\n📝 Prochaines étapes:');
console.log('1. Vérifier que tout fonctionne');
console.log('2. Supprimer src/utils/translations.ts (ancien fichier)');
console.log('3. Mettre à jour les imports si nécessaire');
