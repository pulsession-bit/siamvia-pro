
import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import FAQClientPage from './FAQClientPage';
import { generateMetadataWithHreflang } from '@/utils/seo';

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

  // Create JSON-LD for the FAQPage
  // We need to flatten the sections to get all questions for the schema
  const allQuestions = faqPage.sections
    ? faqPage.sections.flatMap((section: any) => section.questions)
    : (faqPage.questions || []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': allQuestions.map((item: any) => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a || "Answer coming soon"
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQClientPage
        data={faqPage}
      />
    </>
  );
}
