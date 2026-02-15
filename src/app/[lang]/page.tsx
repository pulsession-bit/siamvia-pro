import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import HomeClientPage from './HomeClientPage';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HomeSchemaAI } from '@/components/HomeSchemaAI';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations] || translations.en;

  const meta = (t as any).meta || {
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
  return (
    <>
      <SchemaOrg lang={lang} pageKey="home" title="SiamVisa Pro — Thailand Visa Expert" showGlobal={true} />
      <HomeSchemaAI lang={lang} />
      <HomeClientPage />
    </>
  );
}
