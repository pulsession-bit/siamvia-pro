import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import ContactClientPage from './ContactClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations] || translations.en;

  const meta = (t.contact_page as any)?.meta || {
    title: t.contact_page.title,
    description: t.contact_page.subtitle
  };

  return generateMetadataWithHreflang({
    title: meta.title,
    description: meta.description,
    pageKey: 'contact',
    lang,
  });
}

export default function Page() {
  return <ContactClientPage />;
}
