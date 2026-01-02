export type Language = 'fr' | 'en' | 'de' | 'cn' | 'ru';

export interface Translation {
  nav: {
    home: string;
    catalog: string;
    contact: string;
    auditBtn: string;
  };
  hero: {
    auditBtn: string;
  };
  features: {
    title: string;
  };
  profiles: {
    title: string;
  };
  form: {
    title: string;
    subtitle: string;
    date: string;
    slot1: string;
    slot2: string;
    contactMethod: string;
    submit: string;
  };
  footer: {
    navigation: string;
    legal: string;
    contact: string;
  };
}

export interface VisaFeature {
  icon: 'shield' | 'trending' | 'rocket' | 'clock' | 'document';
  title: string;
  description: string;
}

export interface VisaProfile {
  title: string;
}

export interface VisaType {
  slug: string; // e.g., 'visa-ltr'
  name: string;
  shortDesc: string;
  heroImage: string;
  features: VisaFeature[];
  profiles: VisaProfile[];
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
}

export interface ContentStore {
  [lang: string]: {
    common: Translation;
    visas: VisaType[];
  };
}

export interface SeoAuditResult {
  score: number;
  keywordDensity: number;
  missingMeta: string[];
  suggestions: string[];
}

export interface SocialCampaign {
  platform: 'TikTok' | 'LinkedIn' | 'Instagram' | 'Facebook';
  content: string;
  hashtags: string[];
}