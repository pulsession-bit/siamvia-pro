import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import FAQClientPage from './FAQClientPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations] || translations.en;

  const meta = (t.faq_page as any)?.meta || {
    title: t.faq_page.title,
    description: t.faq_page.subtitle
  };

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function Page() {
  return <FAQClientPage />;
}
