import { SeoAuditResult } from '../types';

export const analyzePage = (content: string, keywords: string[]): SeoAuditResult => {
  // Mock logic to simulate an SEO bot analysis
  const wordCount = content.split(' ').length;
  const keywordHits = keywords.reduce((acc, k) => acc + (content.toLowerCase().match(new RegExp(k.toLowerCase(), 'g')) || []).length, 0);
  const density = (keywordHits / wordCount) * 100;

  const suggestions = [];
  if (wordCount < 300) suggestions.push("Contenu trop court (min 300 mots).");
  if (density < 1) suggestions.push("Densité de mots-clés faible (< 1%).");
  if (density > 3) suggestions.push("Attention au bourrage de mots-clés (> 3%).");

  return {
    score: Math.min(100, Math.floor((wordCount / 10) + (density * 20))),
    keywordDensity: parseFloat(density.toFixed(2)),
    missingMeta: Math.random() > 0.7 ? ['og:image', 'twitter:card'] : [],
    suggestions: suggestions.length > 0 ? suggestions : ["Page optimisée parfaitement."]
  };
};

export const generateSocialPost = (platform: string, visaName: string, lang: string) => {
  const hashtags = ['#Thailand', '#Visa', `#${visaName.replace(/\s/g, '')}`, '#Expats'];
  
  let content = "";
  switch(platform) {
    case 'TikTok':
      content = `🇹🇭 Want to live in Thailand with the ${visaName}? Here is how! ✨ #ThailandLife`;
      break;
    case 'LinkedIn':
      content = `Expanding your professional horizons to Asia? The ${visaName} offers unique tax advantages for global professionals. #GlobalMobility #ThailandBusiness`;
      break;
    case 'Instagram':
      content = `Paradise is calling! 🌴 Secure your ${visaName} today. Link in bio! ✈️`;
      break;
    case 'Facebook':
      content = `Are you eligible for the ${visaName}? Take our free audit today and find out. Trusted by 10,000+ expats.`;
      break;
  }
  
  return { platform, content, hashtags };
};