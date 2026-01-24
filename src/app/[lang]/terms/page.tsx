import React from 'react';
import TermsClientPage from './TermsClientPage';
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
  const t = (translations as any)[lang]?.terms_page || translations.en.terms_page;

  return generateMetadataWithHreflang({
    title: t.title,
    description: t.subtitle,
    pageKey: 'terms',
    lang,
  });
}

export default async function TermsPage({ params }: Props) {
  return <TermsClientPage />;
}
