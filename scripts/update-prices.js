const fs = require('fs');
const path = require('path');

const localesPath = path.join(__dirname, '../src/locales');
const locales = ['fr', 'de', 'es', 'it', 'en', 'ar', 'zh', 'ja', 'ko', 'ru', 'th'];

const prices = {
    fr: { s: '390 €', e: '590 €', p: '890 €' },
    de: { s: '390 €', e: '590 €', p: '890 €' },
    es: { s: '390 €', e: '590 €', p: '890 €' },
    it: { s: '390 €', e: '590 €', p: '890 €' },
    en: { s: '$410', e: '$620', p: '$940' },
    ar: { s: '1,500 AED', e: '2,280 AED', p: '3,440 AED' },
    zh: { s: '¥2,950', e: '¥4,450', p: '¥6,680' },
    ja: { s: '¥62,500', e: '¥94,500', p: '¥142,500' },
    ko: { s: '₩565,000', e: '₩855,000', p: '₩1,290,000' },
    ru: { s: '39,000 ₽', e: '59,000 ₽', p: '89,000 ₽' },
    th: { s: '฿14,000', e: '฿21,000', p: '฿32,000' }
};

const thb = { s: '14,000 THB', e: '21,000 THB', p: '32,000 THB' };

locales.forEach(loc => {
    const file = path.join(localesPath, `${loc}.ts`);
    if (!fs.existsSync(file)) return;

    let content = fs.readFileSync(file, 'utf-8');

    // Calculate replacement strings
    let repS = loc === 'th' ? prices[loc].s : `${prices[loc].s} (~${thb.s})`;
    let repE = loc === 'th' ? prices[loc].e : `${prices[loc].e} (~${thb.e})`;
    let repP = loc === 'th' ? prices[loc].p : `${prices[loc].p} (~${thb.p})`;

    content = content.replace(/"tier_standard_price":\s*"[^"]*",/g, `"tier_standard_price": "${repS}",`);
    content = content.replace(/"tier_express_price":\s*"[^"]*",/g, `"tier_express_price": "${repE}",`);
    content = content.replace(/"tier_premium_price":\s*"[^"]*",/g, `"tier_premium_price": "${repP}",`);

    fs.writeFileSync(file, content);
    console.log(`Updated ${loc}.ts`);
});

