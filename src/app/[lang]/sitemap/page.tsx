import React from 'react';
import SitemapClientPage from './SitemapClientPage';
import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { generateMetadataWithHreflang } from '@/utils/seo';

type Props = {
    params: Promise<{
        lang: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const t = (translations as any)[lang] || translations.en;

    return generateMetadataWithHreflang({
        title: t.footer?.sitemap || "Sitemap",
        description: t.meta?.description || "Siam Visa Pro Sitemap",
        pageKey: 'sitemap',
        lang,
    });
}

export default async function SitemapPage({ params }: Props) {
    return <SitemapClientPage />;
}
