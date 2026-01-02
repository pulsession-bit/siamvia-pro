import { MetadataRoute } from 'next';
import { SLUG_MAP, getTranslatedPath, PageKey } from '@/utils/slugs';

export const dynamic = 'force-static';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];
const pages: PageKey[] = ['home', 'dtv', 'services', 'tourist-visa', 'retirement-visa', 'faq', 'contact', 'terms'];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://siamvisapro.com';
    const currentDate = new Date();

    const urls: MetadataRoute.Sitemap = [];

    // Generate URLs for all languages and pages
    pages.forEach(page => {
        languages.forEach(lang => {
            const priority = page === 'home' || page === 'dtv' ? 0.9 :
                page === 'services' || page === 'tourist-visa' || page === 'retirement-visa' ? 0.8 :
                    page === 'faq' ? 0.7 :
                        page === 'contact' ? 0.6 :
                            0.3;

            const translatedPath = getTranslatedPath(page, lang);

            // Create alternates map for this specific page
            const alternates: Record<string, string> = {};
            languages.forEach(l => {
                alternates[l] = `${baseUrl}${getTranslatedPath(page, l)}`;
            });

            urls.push({
                url: `${baseUrl}${translatedPath}`,
                lastModified: currentDate,
                changeFrequency: page === 'home' || page === 'dtv' ? 'weekly' :
                    page === 'terms' ? 'yearly' : 'monthly',
                priority,
                alternates: {
                    languages: alternates
                }
            });
        });
    });

    return urls;
}
