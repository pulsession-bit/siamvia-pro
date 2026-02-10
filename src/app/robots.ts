import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siamvisapro.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/api/',
                '/_next/',
                '/private/',
                '*/test-auth',
                '*/test-search-ai',
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
