import { MetadataRoute } from 'next';
import { getTranslatedPath, PageKey } from '@/utils/slugs';

export const dynamic = 'force-static';

const pages: PageKey[] = [
    'home',
    'dtv',
    'services',
    'tourist-visa',
    'elite-visa',
    'retirement-visa',
    'ltr',
    'visa-run',
    'search',
    'business-visa',
    'exemption-visa',
    'student-visa',
    'family-visa',
    'smart-visa',
    'volunteer-visa',
    'medical-visa',
    'religious-visa',
    'media-visa',
    'official-visa',
    'scientific-visa',
    'apply',
    'about',
    'ai-technology',
    'faq',
    'contact',
    'terms',
    'sitemap'
];


const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siamvisapro.com';
    const currentDate = new Date();

    const urls: MetadataRoute.Sitemap = [];

    // Generate a single sitemap containing ALL languages and ALL pages
    languages.forEach((lang) => {
        pages.forEach((page) => {
            // Prioritize home and DTV (most popular)
            const priority =
                page === 'home' || page === 'dtv'
                    ? 0.9
                    : ['services', 'tourist-visa', 'elite-visa', 'retirement-visa', 'ltr', 'visa-run'].includes(page)
                        ? 0.8
                        : page === 'search'
                            ? 0.7
                            : page === 'faq'
                                ? 0.6
                                : page === 'contact'
                                    ? 0.5
                                    : 0.3;

            const translatedPath = getTranslatedPath(page, lang);

            // Create alternates map including ALL languages for this page
            const alternates: Record<string, string> = {};
            languages.forEach((l) => {
                alternates[l] = `${baseUrl}${getTranslatedPath(page, l)}`;
            });

            // Add x-default pointing to English
            alternates['x-default'] = `${baseUrl}${getTranslatedPath(page, 'en')}`;

            urls.push({
                url: `${baseUrl}${translatedPath}`,
                lastModified: currentDate,
                changeFrequency:
                    page === 'home' || page === 'dtv' ? 'weekly' : page === 'terms' ? 'yearly' : 'monthly',
                priority,
                alternates: {
                    languages: alternates,
                },
            });
        });
    });

    return urls;
}
