import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import DTVClientPage from './DTVClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations] || translations.en;

  const meta = (t.dtv_page as any).meta || {
    title: t.dtv_page.hero_title,
    description: t.dtv_page.hero_subtitle
  };

  return generateMetadataWithHreflang({
    title: meta.title,
    description: meta.description,
    pageKey: 'dtv',
    lang,
  });
}

export default function Page() {
  return <DTVClientPage />;
}
