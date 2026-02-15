
import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import FAQClientPage from './FAQClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { FAQSchema } from '@/components/FAQSchema';
import { SchemaOrg } from '@/components/SchemaOrg';
import { FAQPageSchemaAI } from '@/components/FAQPageSchemaAI';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getFullDictionary(lang as any) as any;

  const meta = t.faq_page?.meta || {
    title: t.faq_page?.title || 'FAQ',
    description: t.faq_page?.subtitle || ''
  };

  return generateMetadataWithHreflang({
    title: meta.title,
    description: meta.description,
    pageKey: 'faq',
    lang,
  });
}

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const t = getFullDictionary(lang as any) as any;
  const faqPage = t.faq_page;

  const allQuestions = faqPage?.sections
    ? faqPage.sections.flatMap((section: any) => section.questions)
    : (faqPage?.questions || []);

  const keys = PAGE_TRANSLATION_KEYS['faq'];
  const dict = getPageDictionary(lang, keys);
  const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

  return (
    <>
      <SchemaOrg lang={lang} pageKey="faq" title={t.nav?.faq || 'FAQ'} showGlobal={false} />
      <FAQSchema faqs={allQuestions} />
      <FAQPageSchemaAI lang={lang} />
      <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
        <FAQClientPage data={faqPage} />
      </PageTranslations>
    </>
  );
}
