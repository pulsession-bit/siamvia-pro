import { MetadataRoute } from 'next';
import { SLUG_MAP, getTranslatedPath, PageKey } from '@/utils/slugs';

export const dynamic = 'force-static';

const pages: PageKey[] = ['home', 'dtv', 'services', 'tourist-visa', 'elite-visa', 'retirement-visa', 'ltr', 'visa-run', 'search', 'faq', 'contact', 'terms', 'sitemap'];

export async function generateSitemaps() {
    const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];
    return languages.map(lang => ({ id: lang }));
}

export default async function sitemap(props: any): Promise<MetadataRoute.Sitemap> {
    // Handling Next.js 15 async params correctly
    const resolvedProps = await props;
    const id = await resolvedProps.id;

    // Safety check
    if (typeof id !== 'string') {
        console.error('Sitemap ID is not a string:', id);
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siamvisapro.com';
    const currentDate = new Date();

    // 'id' corresponds to the language code returned by generateSitemaps
    const lang = id;
    const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];

    const urls: MetadataRoute.Sitemap = [];

    // Generate URLs for this specific language
    pages.forEach(page => {
        const priority = page === 'home' || page === 'dtv' ? 0.9 :
            ['services', 'tourist-visa', 'elite-visa', 'retirement-visa', 'ltr', 'visa-run'].includes(page) ? 0.8 :
                page === 'search' ? 0.7 :
                    page === 'faq' ? 0.6 :
                        page === 'contact' ? 0.5 :
                            0.3;

        const translatedPath = getTranslatedPath(page, lang);

        // Create alternates map including ALL languages for this page
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

    return urls;
}
