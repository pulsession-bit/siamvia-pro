export type Language = 'fr' | 'en' | 'de' | 'es' | 'it' | 'th' | 'ru' | 'zh' | 'ja' | 'ko' | 'ar';

export interface Visa {
    id: string;
    name: { [key in Language]: string };
    duration: string;
    price: string;
    description: { [key in Language]: string };
    category: 'tourist' | 'work' | 'long-term' | 'business' | 'other';
    recommended?: boolean;
    alternative?: boolean;
}

export interface SearchI18N {
    placeholder: string;
    search_btn: string;
    ai_analyzing: string;
    ai_recommendation: string;
    categories_title: string;
    results_found: string;
    no_results: string;
    recommended_badge: string;
    alternative_badge: string;
    view_details: string;
    book_appointment: string;
    ai_error: string;
    suggestions_title: string;
}
