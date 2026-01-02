import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import DTVClientPage from './DTVClientPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations] || translations.en;

  const meta = (t.dtv_page as any).meta || {
    title: t.dtv_page.hero_title,
    description: t.dtv_page.hero_subtitle
  };

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function Page() {
  return <DTVClientPage />;
}
