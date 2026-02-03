/**
 * Common reusable style patterns for the application.
 * Use with the cn() utility for maximum flexibility.
 */

export const commonStyles = {
    // Cards
    card: 'bg-white rounded-card-lg shadow-card border border-slate-100 p-8',
    cardDark: 'bg-dark text-white rounded-card-lg shadow-card p-8',
    cardHover: 'transition-all hover:shadow-card-hover hover:-translate-y-1',

    // Containers & Layout
    section: 'py-16 md:py-24',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',

    // Typography
    heading: 'text-3xl md:text-4xl font-bold text-slate-900',
    subheading: 'text-xl md:text-2xl font-semibold text-slate-700',
    body: 'text-base text-slate-600 leading-relaxed',

    // Badges & Tags
    badge: 'inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide',
    badgePrimary: 'bg-primary text-dark',
    badgeSecondary: 'bg-slate-100 text-slate-700',

    // Buttons (base styles, use with Button component)
    buttonBase: 'inline-flex items-center justify-center font-bold rounded-lg transition-all shadow-lg',
    buttonPrimary: 'bg-primary text-dark hover:bg-primary-light shadow-primary',
    buttonSecondary: 'bg-dark text-white hover:bg-dark-light',
    buttonOutline: 'bg-transparent border-2 border-slate-300 text-slate-700 hover:bg-slate-50',

    // Inputs
    input: 'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all',

    // Animations
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    scaleIn: 'animate-scale-in',
} as const

/**
 * Color palette constants for programmatic use
 */
export const colors = {
    primary: {
        DEFAULT: '#f59e0b',
        light: '#fbbf24',
        dark: '#d97706',
    },
    dark: {
        DEFAULT: '#0f172a',
        light: '#1e293b',
        lighter: '#334155',
    },
} as const
