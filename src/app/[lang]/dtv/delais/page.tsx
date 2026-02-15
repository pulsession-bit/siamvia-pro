import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import DTVDelaisClientPage from './DTVDelaisClientPage';
import PageTranslations from '@/components/PageTranslations';
import { SchemaOrg } from '@/components/SchemaOrg';
import { generateMetadataWithHreflang } from '@/utils/seo';

// FR uniquement — ne génère pas cette page pour les autres langues
export function generateStaticParams() {
  return [{ lang: 'fr' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getFullDictionary(lang as any) as any;

  const meta = t.dtv_delais_page?.meta || {
    title: 'Délais Visa DTV Thaïlande 2026',
    description: 'Temps de traitement du visa DTV par ambassade.',
  };

  return generateMetadataWithHreflang({
    title: meta.title,
    description: meta.description,
    pageKey: 'dtv-delais',
    lang,
  });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const keys = PAGE_TRANSLATION_KEYS['dtv-delais'];
  const dict = getPageDictionary(lang, keys);
  const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

  return (
    <>
      <SchemaOrg lang={lang} pageKey="dtv-delais" title="Délais Visa DTV Thaïlande" showGlobal={false} />
      <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
        <DTVDelaisClientPage />
      </PageTranslations>
    </>
  );
}
