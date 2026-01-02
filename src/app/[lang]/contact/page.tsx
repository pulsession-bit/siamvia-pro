import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import ContactClientPage from './ContactClientPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations] || translations.en;

  const meta = (t.contact_page as any)?.meta || {
    title: t.contact_page.title,
    description: t.contact_page.subtitle
  };

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function Page() {
  return <ContactClientPage />;
}
