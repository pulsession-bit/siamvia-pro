import React from 'react';

/**
 * Hero Section Component
 * 
 * Reusable hero section with background image, overlay, and centered content
 */
interface HeroSectionProps {
    /** Background image URL */
    backgroundImage: string;
    /** Alt text for background image */
    imageAlt?: string;
    /** Badge text (optional) */
    badge?: string;
    /** Main title */
    title: string | React.ReactNode;
    /** Subtitle text */
    subtitle: string | React.ReactNode;
    /** Icon to display above title (optional) */
    icon?: React.ReactNode;
    /** Custom overlay opacity (default: 0.5) */
    overlayOpacity?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    backgroundImage,
    imageAlt = 'Hero background',
    badge,
    title,
    subtitle,
    icon,
    overlayOpacity = 0.5,
}) => {
    return (
        <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
            {/* Background Image */}
            <div className={`absolute inset-0 opacity-${Math.round(overlayOpacity * 100)}`}>
                <img src={backgroundImage} alt={imageAlt} className="w-full h-full object-cover" />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/50"></div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                {/* Icon */}
                {icon && <div className="mb-6">{icon}</div>}

                {/* Badge */}
                {badge && (
                    <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-600 text-amber-400 text-xs font-bold tracking-wider mb-8 shadow-lg backdrop-blur-sm">
                        {badge}
                    </span>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

                {/* Subtitle */}
                <p className="text-xl text-slate-200 max-w-2xl mx-auto">{subtitle}</p>
            </div>
        </div>
    );
};

/**
 * Page Container Component
 * 
 * Standard container for page content
 */
interface PageContainerProps {
    children: React.ReactNode;
    /** Background color class (default: bg-slate-50) */
    bgColor?: string;
    /** Max width class (default: max-w-7xl) */
    maxWidth?: string;
    /** Negative margin top for overlapping hero (default: -mt-10) */
    negativeMargin?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
    children,
    bgColor = 'bg-slate-50',
    maxWidth = 'max-w-7xl',
    negativeMargin = false,
}) => {
    return (
        <div className={`${bgColor} min-h-screen`}>
            <div
                className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 py-16 ${negativeMargin ? '-mt-10' : ''} relative z-20`}
            >
                {children}
            </div>
        </div>
    );
};

/**
 * Card Component
 * 
 * Reusable card with consistent styling
 */
interface CardProps {
    children: React.ReactNode;
    /** Card variant */
    variant?: 'white' | 'dark' | 'amber';
    /** Add shadow */
    shadow?: 'sm' | 'md' | 'lg' | 'xl';
    /** Add border */
    border?: boolean;
    /** Custom className */
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    variant = 'white',
    shadow = 'xl',
    border = true,
    className = '',
}) => {
    const variants = {
        white: 'bg-white text-slate-900',
        dark: 'bg-slate-900 text-white',
        amber: 'bg-amber-50 text-slate-900 border-amber-200',
    };

    const shadows = {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
    };

    return (
        <div
            className={`
        ${variants[variant]}
        ${shadows[shadow]}
        ${border ? 'border border-slate-100' : ''}
        rounded-2xl p-8 md:p-12
        ${className}
      `}
        >
            {children}
        </div>
    );
};

/**
 * Section Title Component
 */
interface SectionTitleProps {
    children: React.ReactNode;
    /** Icon to display before title */
    icon?: React.ReactNode;
    /** Text color class */
    color?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    children,
    icon,
    color = 'text-slate-900',
}) => {
    return (
        <h2 className={`text-2xl font-bold ${color} mb-6 flex items-center`}>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </h2>
    );
};

/**
 * CTA Button Component
 */
interface CTAButtonProps {
    href: string;
    children: React.ReactNode;
    /** Button variant */
    variant?: 'primary' | 'secondary' | 'outline';
    /** Icon to display */
    icon?: React.ReactNode;
    /** Icon position */
    iconPosition?: 'left' | 'right';
    /** Full width */
    fullWidth?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
    href,
    children,
    variant = 'primary',
    icon,
    iconPosition = 'right',
    fullWidth = false,
}) => {
    const variants = {
        primary: 'bg-amber-500 text-slate-900 hover:bg-amber-400',
        secondary: 'bg-slate-900 text-white hover:bg-slate-800',
        outline: 'bg-transparent border-2 border-slate-400 text-slate-700 hover:bg-slate-50',
    };

    return (
        <a
            href={href}
            className={`
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        inline-flex items-center justify-center
        px-6 py-3 rounded-lg font-bold
        shadow-lg transition
      `}
        >
            {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </a>
    );
};

/**
 * Highs & Lows Component
 */
interface HighsLowsProps {
    highsTitle: string;
    highs: string[];
    lowsTitle: string;
    lows: string[];
}

import { Check, AlertTriangle } from 'lucide-react';

export const HighsLows: React.FC<HighsLowsProps> = ({
    highsTitle,
    highs,
    lowsTitle,
    lows
}) => {
    return (
        <div className="grid md:grid-cols-2 gap-8 my-16 max-w-6xl mx-auto">
            {/* Highs / Pros */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-green-500 transition hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-900">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                        <Check className="text-green-600 h-6 w-6" />
                    </div>
                    {highsTitle}
                </h3>
                <ul className="space-y-4">
                    {highs.map((item, idx) => (
                        <li key={idx} className="flex items-start text-slate-600">
                            <Check className="text-green-500 mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Lows / Cons */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-red-400 transition hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-900">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                        <span className="text-red-500 font-bold text-xl px-2">!</span>
                    </div>
                    {lowsTitle}
                </h3>
                <ul className="space-y-4">
                    {lows.map((item, idx) => (
                        <li key={idx} className="flex items-start text-slate-600">
                            <span className="text-red-400 mr-2 mt-1 flex-shrink-0 font-bold">-</span>
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

/**
 * FAQ Accordion Component
 */
interface FAQAccordionProps {
    title: string;
    faqs: { q: string; a: React.ReactNode }[];
}

import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ title, faqs }) => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <div className="my-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{title}</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                        <button
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className={`font-bold transition-colors ${openIndex === index ? 'text-amber-600' : 'text-slate-800'}`}>
                                {faq.q}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="h-5 w-5 text-amber-500" />
                            ) : (
                                <ChevronDown className="h-5 w-5 text-slate-400" />
                            )}
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * High Value Feature Block
 * 
 * Premium dark section with blur effects highlighting key value proposition
 */
interface HighValueBlockProps {
    title: string;
    highlight: string;
    description: string;
    listItems: { icon: React.ElementType; text: string }[];
    cardTitle: string;
    cardItems: string[];
}

export const HighValueBlock: React.FC<HighValueBlockProps> = ({
    title,
    highlight,
    description,
    listItems,
    cardTitle,
    cardItems
}) => {
    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden my-16 rounded-3xl mx-4 lg:mx-0 shadow-2xl">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                    <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        {title} <span className="text-amber-500">{highlight}</span>
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        {description}
                    </p>
                    <ul className="space-y-4">
                        {listItems.map((item, i) => (
                            <li key={i} className="flex items-center gap-4">
                                <div className="bg-amber-500/20 p-2 rounded-lg text-amber-500">
                                    <item.icon size={20} />
                                </div>
                                <span className="font-bold">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Card */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl">
                    <h4 className="text-xl font-bold mb-6 text-center border-b border-white/10 pb-4">
                        {cardTitle}
                    </h4>
                    <div className="grid gap-4">
                        {cardItems.map((item, i) => (
                            <div key={i} className="bg-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-amber-500/20 transition cursor-default group">
                                <span className="font-medium group-hover:text-amber-400 transition">{item}</span>
                                <Check className="text-amber-500 w-5 h-5" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
