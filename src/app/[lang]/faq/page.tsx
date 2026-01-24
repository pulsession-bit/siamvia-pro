import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import FAQClientPage from './FAQClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations] || translations.en;

  const meta = (t.faq_page as any)?.meta || {
    title: t.faq_page.title,
    description: t.faq_page.subtitle
  };

  return generateMetadataWithHreflang({
    title: meta.title,
    description: meta.description,
    pageKey: 'faq',
    lang,
  });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations] || translations.en;
  const faqs = (t.faq_page as any)?.questions || [];

  return <FAQClientPage faqs={faqs} />;
}
