import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import HomeClientPage from './HomeClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

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
    alternates: {
      canonical: `https://siamvisapro.com${getTranslatedPath('home', lang)}`,
      languages: languages.reduce((acc, l) => {
        acc[l] = `https://siamvisapro.com${getTranslatedPath('home', l)}`;
        return acc;
      }, {} as Record<string, string>),
    },
  };
}

export default function Page() {
  return <HomeClientPage />;
}
