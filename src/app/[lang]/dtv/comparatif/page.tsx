import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import DTVComparatifClientPage from './DTVComparatifClientPage';
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

  const meta = t.dtv_comparatif_page?.meta || {
    title: 'Comparatif Visa DTV vs autres visas Thaïlande 2026',
    description: 'Comparez le visa DTV avec les visas Touriste, LTR, Elite et ED.',
  };

  return generateMetadataWithHreflang({
    title: meta.title,
    description: meta.description,
    pageKey: 'dtv-comparatif',
    lang,
  });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const keys = PAGE_TRANSLATION_KEYS['dtv-comparatif'];
  const dict = getPageDictionary(lang, keys);
  const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

  return (
    <>
      <SchemaOrg lang={lang} pageKey="dtv-comparatif" title="Comparatif Visa DTV vs autres visas Thaïlande" showGlobal={false} />
      <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
        <DTVComparatifClientPage />
      </PageTranslations>
    </>
  );
}
