import React from 'react';

interface CardProps {
    children: React.ReactNode;
    variant?: 'white' | 'dark' | 'amber';
    shadow?: 'sm' | 'md' | 'lg' | 'xl';
    border?: boolean;
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
        <div className={`
            ${variants[variant]}
            ${shadows[shadow]}
            ${border ? 'border border-slate-100' : ''}
            rounded-2xl p-8 md:p-12
            ${className}
        `}>
            {children}
        </div>
    );
};
