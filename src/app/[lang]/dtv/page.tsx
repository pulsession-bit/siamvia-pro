import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import { getTranslatedPath } from '@/utils/slugs';
import DTVClientPage from './DTVClientPage';
import PageTranslations from '@/components/PageTranslations';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getFullDictionary(lang as any) as any;

  const meta = t.dtv_page?.meta || {
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

import { SchemaOrg } from '@/components/SchemaOrg';
import { VisaServiceSchemas } from '@/components/ServiceSchema';
import { DTVSchemaAI } from '@/components/DTVSchemaAI';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getFullDictionary(lang as any) as any;
  const keys = PAGE_TRANSLATION_KEYS['dtv'];
  const dict = getPageDictionary(lang, keys);
  const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

  return (
    <>
      <SchemaOrg lang={lang} pageKey="dtv" title={t.nav.dtv} showGlobal={false} />
      {VisaServiceSchemas.dtv(lang)}
      <DTVSchemaAI lang={lang} />
      <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
        <DTVClientPage />
      </PageTranslations>
    </>
  );
}
