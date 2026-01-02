import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import HomeClientPage from './HomeClientPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations] || translations.en;

  const meta = (t as any).meta || {
    title: "Siam Visa Pro",
    description: "Thailand Visa Expert"
  };

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function Page() {
  return <HomeClientPage />;
}
