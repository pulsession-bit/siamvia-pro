import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#f59e0b', // amber-500
                    light: '#fbbf24',   // amber-400
                    dark: '#d97706',    // amber-600
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                },
                dark: {
                    DEFAULT: '#0f172a', // slate-900
                    light: '#1e293b',   // slate-800
                    lighter: '#334155', // slate-700
                },
            },
            borderRadius: {
                'card': '1rem',      // 16px
                'card-lg': '1.5rem', // 24px
            },
            boxShadow: {
                'card': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
                'card-hover': '0 20px 50px -10px rgba(0, 0, 0, 0.15)',
                'primary': '0 10px 30px -5px rgba(245, 158, 11, 0.3)',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in',
                'slide-up': 'slideUp 0.4s ease-out',
                'scale-in': 'scaleIn 0.2s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config
