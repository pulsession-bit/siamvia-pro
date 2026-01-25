export type ID = string; // minLength: 4, maxLength: 128
export type ISODateTime = string;
export type Locale = 'fr' | 'en' | 'de' | 'es' | 'it' | 'th' | 'ru' | 'zh' | 'ja' | 'ko' | 'ar';
export type Status = 'draft' | 'in_review' | 'scheduled' | 'published' | 'archived';
export type Stage = 'discover' | 'compare' | 'apply';
export type Intent = 'informational' | 'comparative' | 'transactional';
export type VisaScope = ('TR' | 'DTV' | 'LTR' | 'NON_B' | 'NON_O' | 'ELITE' | 'ED' | 'OTHER')[];
export type Slug = string; // pattern: ^[a-z0-9]+(?:-[a-z0-9]+)*$
export type URL = string;

// --- ARTICLE CORE ---

export interface Article {
    id: ID;
    status: Status;
    canonical_locale: Locale;

    topic: string; // min: 3, max: 200
    summary?: string; // max: 500

    clusters: ID[];
    categories: ID[];
    tags: ID[];

    entities: string[];
    visa_scope: VisaScope;

    intent: Intent;
    stage: Stage;

    author_id: ID;

    sources: Source[];

    featured_media_id?: ID;

    published_at?: ISODateTime | null;
    created_at: ISODateTime;
    updated_at: ISODateTime;

    version: number;
    revision_of?: ID | null;
}

export interface Source {
    name: string; // min: 2, max: 80
    url?: URL;
    type: 'official' | 'internal' | 'news' | 'other';
    retrieved_at?: ISODateTime;
}

// --- ARTICLE LOCALE ---

export interface ArticleLocale {
    article_id: ID;
    locale: Locale;

    seo: ArticleSEO;
    og?: ArticleOG;

    toc?: TOCItem[];
    blocks: Block[];
    internal_links_plan?: InternalLinkPlan;
    schema_overrides?: SchemaOverrides;
    quality: QualityMetrics;

    created_at: ISODateTime;
    updated_at: ISODateTime;
}

export interface ArticleSEO {
    title: string; // min: 10, max: 70
    description: string; // min: 50, max: 160
    slug: Slug;
    canonical_url?: URL;
    hreflang?: HreflangLink[];
    robots?: RobotsTag;
}

export interface HreflangLink {
    locale: Locale;
    url: URL;
}

export interface RobotsTag {
    index: boolean;
    follow: boolean;
}

export interface ArticleOG {
    og_title?: string;
    og_description?: string;
    og_image_media_id?: ID;
}

export interface TOCItem {
    block_id: ID;
    level: 2 | 3;
    title: string;
    anchor: Slug;
}

export interface SchemaOverrides {
    faq_enabled?: boolean;
    breadcrumbs_enabled?: boolean;
}

export interface QualityMetrics {
    word_count: number;
    reading_time_min: number;
    thin_content_flag: boolean;
    fact_gaps: string[];
}

// --- BLOCKS ---

export type BlockType = 'toc' | 'intro' | 'section' | 'table' | 'faq' | 'cta' | 'callout' | 'image' | 'glossary_ref';

export interface Block {
    id: ID;
    type: BlockType;
    data: BlockIntro | BlockSection | BlockTable | BlockFAQ | BlockCTA | BlockCallout | BlockImage | any;
}

export interface BlockIntro {
    content_md: string;
}

export interface BlockSection {
    h2: string;
    h3?: string;
    content_md: string;
    anchor: Slug;
}

export interface BlockTable {
    caption?: string;
    columns: string[];
    rows: string[][];
}

export interface BlockFAQ {
    items: FAQItem[];
}

export interface FAQItem {
    q: string;
    a_md: string;
}

export interface BlockCTA {
    label: string;
    href: URL;
    variant: 'primary' | 'secondary' | 'link';
}

export interface BlockCallout {
    tone: 'info' | 'warning' | 'note';
    title?: string;
    content_md: string;
}

export interface BlockImage {
    media_id: ID;
    alt: string;
    caption?: string;
    placement: 'inline' | 'hero';
}

// --- INTERNAL LINKING ---

export interface InternalLinkPlan {
    generated_at: ISODateTime;
    ruleset_version: string;
    out: InternalLinkSuggestion[];
    constraints: InternalLinkConstraints;
}

export interface InternalLinkSuggestion {
    to_article_id: ID;
    anchor: string;
    context_block_id?: ID;
    reason: 'cluster' | 'next_step' | 'definition' | 'supporting' | 'related';
    score: number;
}

export interface InternalLinkConstraints {
    max_links_per_1000w: number;
    require_next_step: boolean;
    require_glossary: boolean;
    avoid_duplicate_anchors: boolean;
}

// --- MEDIA ---

export interface Media {
    id: ID;
    origin_url: URL;
    mime: 'image/webp' | 'image/avif' | 'image/jpeg' | 'image/png';
    width: number;
    height: number;
    hash: string;
    variants: MediaVariant[];
    alt_by_locale?: Record<string, string>;
    created_at: ISODateTime;
}

export interface MediaVariant {
    url: URL;
    mime: string;
    width?: number;
    height?: number;
}

// --- TAXONOMY ---

export interface Taxon {
    id: ID;
    label_by_locale: Record<string, string>;
    description_by_locale?: Record<string, string>;
}

export interface Taxonomy {
    clusters: Taxon[];
    categories: Taxon[];
    tags: Taxon[];
    glossary: GlossaryTerm[];
}

export interface GlossaryTerm {
    id: ID;
    term_by_locale: Record<string, string>;
    definition_by_locale: Record<string, string>;
    see_also_article_ids?: ID[];
}
