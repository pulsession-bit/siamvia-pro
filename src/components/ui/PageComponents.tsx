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
