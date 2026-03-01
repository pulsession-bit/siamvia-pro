const fs = require('fs');
const path = require('path');

const localesPath = path.join(__dirname, '../src/locales');
const locales = ['fr', 'de', 'es', 'it', 'en', 'ar', 'zh', 'ja', 'ko', 'ru', 'th'];

const prices = {
    fr: { cost: '500 000 €', rec: '300 000 €' },
    de: { cost: '500.000 €', rec: '300.000 €' },
    es: { cost: '500 000 €', rec: '300 000 €' },
    it: { cost: '500.000 €', rec: '300.000 €' },
    en: { cost: '$530,000', rec: '$320,000' },
    ar: { cost: '2,000,000 AED', rec: '1,200,000 AED' },
    zh: { cost: '¥4,000,000', rec: '¥2,400,000' },
    ja: { cost: '¥80,000,000', rec: '¥47,000,000' },
    ko: { cost: '₩750,000,000', rec: '₩450,000,000' },
    ru: { cost: '50,000,000 ₽', rec: '30,000,000 ₽' },
    th: { cost: '18,000,000 THB', rec: '11,000,000 THB' }
};

const thb = { cost: '18,000,000 THB', rec: '11,000,000 THB' };

locales.forEach(loc => {
    const file = path.join(localesPath, `${loc}.ts`);
    if (!fs.existsSync(file)) return;

    let content = fs.readFileSync(file, 'utf-8');

    // Calculate replacement strings
    let repCost = loc === 'th' ? `+${prices[loc].cost}` : `${prices[loc].cost}+ (~${thb.cost})`;
    let repRec = loc === 'th' ? prices[loc].rec : `${prices[loc].rec} (~${thb.rec})`;

    // In some languages there are already + signs or € signs. We will replace the whole value.
    // Example: "stat_hospital_cost": "500 000 €+", or "+€500,000",
    content = content.replace(/"stat_hospital_cost":\s*"[^"]*",/g, `"stat_hospital_cost": "${repCost}",`);
    content = content.replace(/"stat_recommended":\s*"[^"]*",/g, `"stat_recommended": "${repRec}",`);

    fs.writeFileSync(file, content);
    console.log(`Updated ${loc}.ts`);
});
