import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface AITechnologySchemaAIProps {
    lang: string;
}

export const AITechnologySchemaAI: React.FC<AITechnologySchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('ai-technology', lang)}`;
    const currentDate = '2026-02-10';

    // 1. FAQPage Schema - AI Technology FAQ
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'How does Siam Visa Pro use AI for visa applications?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Siam Visa Pro uses a proprietary AI scoring engine to analyze visa applications and generate eligibility scores out of 100, a live AI voice agent powered by Google Gemini 2.5 for real-time consultations, and an automated audit report system that creates personalized action plans. The AI covers all Thai visa types including DTV, Tourist, Elite, Retirement, and LTR visas.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is the AI Visa Score and how accurate is it?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The AI Visa Score analyzes your profile across multiple dimensions — financial documentation, professional compatibility, travel history, and document completeness — to generate a score out of 100. It detects refusal risks and provides personalized recommendations. The score is based on official Thai MFA rules and is validated by human immigration experts.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is the live AI voice agent for visa consultation?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The live AI agent is a click-to-call voice system powered by Google Gemini 2.5. Users can start a real-time voice call with an AI specialist trained on Thai immigration law. It supports French and English, is available 24/7, and provides personalized guidance on visa selection, document preparation, and application strategy.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What technologies power Siam Visa Pro\'s AI system?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Siam Visa Pro uses Google Gemini 2.5 for the live voice AI agent, ElevenLabs for natural voice synthesis, a proprietary scoring algorithm for visa eligibility analysis, and Natural Language Processing models for multilingual document understanding. All systems are hosted on GDPR-compliant secure servers.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Is the AI visa audit free?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes, the initial AI audit and visa score are completely free with no commitment. You receive your score /100, a detailed synthesis, and a personalized action plan instantly. Paid services like portfolio preparation and embassy submission assistance are optional.'
                }
            }
        ]
    };

    // 2. Article Schema
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'How Siam Visa Pro Uses Artificial Intelligence for Thailand Visa Applications',
        'description': 'Comprehensive guide to Siam Visa Pro\'s AI-powered visa technology: scoring engine, live AI voice agent (Gemini 2.5), and automated audit reports for all Thai visa types.',
        'author': {
            '@type': 'Organization',
            'name': 'Siam Visa Pro',
            'url': baseUrl
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'Siam Visa Pro',
            'logo': {
                '@type': 'ImageObject',
                'url': `${baseUrl}/logo.png`
            }
        },
        'datePublished': '2025-06-01',
        'dateModified': currentDate,
        'url': pageUrl,
        'keywords': 'AI visa scoring, AI immigration consultant, Gemini visa agent, Thailand visa AI, automated visa audit, DTV visa AI, visa eligibility score, artificial intelligence visa application',
        'about': [
            { '@type': 'Thing', 'name': 'Artificial Intelligence' },
            { '@type': 'Thing', 'name': 'Thailand Visa Application' },
            { '@type': 'Thing', 'name': 'Immigration Technology' },
            { '@type': 'Thing', 'name': 'Google Gemini' }
        ],
        'proficiencyLevel': 'Beginner'
    };

    // 3. SoftwareApplication Schema
    const softwareSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'Siam Visa Pro AI Audit Engine',
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Web',
        'description': 'AI-powered visa eligibility scoring and audit platform for Thailand visa applications. Uses Google Gemini 2.5 for live voice consultations and proprietary algorithms for document analysis.',
        'url': 'https://audit.siamvisapro.com',
        'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'THB',
            'description': 'Free AI visa audit and eligibility score'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'ratingCount': '326',
            'bestRating': '5'
        },
        'featureList': [
            'AI Visa Eligibility Score /100',
            'Live Voice AI Agent (Google Gemini 2.5)',
            'Automated Audit Report (PDF)',
            'Refusal Risk Detection',
            'Personalized Action Plan',
            'Multilingual Support (French, English)',
            '24/7 Availability',
            'All Thai Visa Types Covered'
        ]
    };

    // 4. Service Schema — V2 (user-provided)
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Thailand Visa Eligibility Audit',
        'serviceType': 'AI-powered Thailand Visa Analysis',
        'provider': {
            '@type': 'Organization',
            'name': 'Siam Visa Pro',
            'url': baseUrl
        },
        'description': 'AI-based audit for DTV, Tourist, Retirement, LTR and Non-B Thailand visas, including eligibility scoring and document verification.',
        'url': pageUrl,
        'areaServed': 'Worldwide',
        'availableChannel': {
            '@type': 'ServiceChannel',
            'serviceUrl': 'https://audit.siamvisapro.com',
            'availableLanguage': ['French', 'English']
        },
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'AI Visa Services',
            'itemListElement': [
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'AI Visa Eligibility Score',
                        'description': 'Free eligibility score out of 100 analyzing 120+ consular criteria for DTV, Tourist, Retirement, LTR and Non-B Thailand visas'
                    }
                },
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Live AI Expert Consultation',
                        'description': 'Real-time voice consultation with AI expert trained in Thai immigration law, powered by Google Gemini 2.5, available 24/7'
                    }
                },
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Complete Visa Audit Report',
                        'description': 'Detailed PDF report with annotated eligibility score, recommended visa, document checklist, timeline and legal options comparison, validated by human experts'
                    }
                }
            ]
        }
    };

    // 5. Speakable Schema
    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Siam Visa Pro AI Technology',
        'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': ['h1', 'h2', '.sr-only']
        },
        'url': pageUrl
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
        </>
    );
};
