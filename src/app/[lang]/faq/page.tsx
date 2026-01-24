
import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import FAQClientPage from './FAQClientPage';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { FAQSchema } from '@/components/FAQSchema';
import { SchemaOrg } from '@/components/SchemaOrg';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations] || translations.en;

  const meta = (t.faq_page as any).meta || {
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

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  console.log(`[FAQPage DEBUG] Loading language: ${lang}`);

  const tr = translations[lang as keyof typeof translations] || translations.en;
  // Explicitly cast to any to bypass potential type mismatches during dev
  const faqPage = (tr.faq_page as any);

  // Debug log
  if (faqPage.sections) {
    console.log(`[FAQPage DEBUG] Found ${faqPage.sections.length} sections for ${lang}`);
  } else {
    console.error(`[FAQPage DEBUG] NO SECTIONS FOUND for ${lang}! Data:`, Object.keys(faqPage));
  }

  const allQuestions = faqPage.sections
    ? faqPage.sections.flatMap((section: any) => section.questions)
    : (faqPage.questions || []);

  return (
    <>
      <SchemaOrg lang={lang} pageKey="faq" title={tr.nav.faq} showGlobal={false} />
      <FAQSchema faqs={allQuestions} />
      <FAQClientPage
        data={faqPage}
      />
    </>
  );


}
