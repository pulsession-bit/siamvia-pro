import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import HomeClientPage from './HomeClientPage';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HomeSchemaAI } from '@/components/HomeSchemaAI';
import PageTranslations from '@/components/PageTranslations';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getFullDictionary(lang as any) as any;

  const meta = t.meta || {
    title: "Siam Visa Pro",
    description: "Thailand Visa Expert"
  };

  return generateMetadataWithHreflang({
    title: meta.title,
    description: meta.description,
    pageKey: 'home',
    lang,
  });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const keys = PAGE_TRANSLATION_KEYS['home'];
  const dict = getPageDictionary(lang, keys);
  const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

  return (
    <>
      <SchemaOrg lang={lang} pageKey="home" title="SiamVisa Pro — Thailand Visa Expert" showGlobal={true} />
      <HomeSchemaAI lang={lang} />
      <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
        <HomeClientPage />
      </PageTranslations>
    </>
  );
}
