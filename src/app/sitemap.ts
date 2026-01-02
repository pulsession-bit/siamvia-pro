import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];
const pages = ['', '/dtv', '/services', '/tourist-visa', '/retirement-visa', '/faq', '/contact', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siamvisapro.com';
    const currentDate = new Date();

    const urls: MetadataRoute.Sitemap = [];

    // Add root URL
    urls.push({
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 1,
    });

    // Generate URLs for all languages and pages
    languages.forEach(lang => {
        pages.forEach(page => {
            const priority = page === '' ? 0.9 :
                page === '/dtv' ? 0.9 :
                    page === '/services' || page === '/tourist-visa' || page === '/retirement-visa' ? 0.8 :
                        page === '/faq' ? 0.7 :
                            page === '/contact' ? 0.6 :
                                0.3;

            urls.push({
                url: `${baseUrl}/${lang}${page}`,
                lastModified: currentDate,
                changeFrequency: page === '' || page === '/dtv' ? 'weekly' :
                    page === '/terms' ? 'yearly' : 'monthly',
                priority,
            });
        });
    });

    return urls;
}
