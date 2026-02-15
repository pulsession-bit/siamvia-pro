import React from 'react';
import TermsClientPage from './TermsClientPage';
import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = getFullDictionary(lang as any) as any;
  const termsPage = t.terms_page || getFullDictionary('en' as any).terms_page;

  return generateMetadataWithHreflang({
    title: termsPage?.title || 'Terms',
    description: termsPage?.subtitle || '',
    pageKey: 'terms',
    lang,
  });
}

export default async function TermsPage({ params }: Props) {
  const { lang } = await params;
  const keys = PAGE_TRANSLATION_KEYS['terms'];
  const dict = getPageDictionary(lang, keys);
  const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

  return (
    <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
      <TermsClientPage />
    </PageTranslations>
  );
}
