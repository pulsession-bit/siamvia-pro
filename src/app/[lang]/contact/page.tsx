import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import ContactClientPage from './ContactClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getFullDictionary(lang as any) as any;

  const meta = t.contact_page?.meta || {
    title: t.contact_page?.title || 'Contact',
    description: t.contact_page?.subtitle || ''
  };

  return generateMetadataWithHreflang({
    title: meta.title,
    description: meta.description,
    pageKey: 'contact',
    lang,
  });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const keys = PAGE_TRANSLATION_KEYS['contact'];
  const dict = getPageDictionary(lang, keys);
  const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

  return (
    <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
      <ContactClientPage />
    </PageTranslations>
  );
}
