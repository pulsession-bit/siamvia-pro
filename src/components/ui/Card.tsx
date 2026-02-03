import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
    children: React.ReactNode;
    variant?: 'white' | 'dark' | 'amber' | 'light';
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'card';
    border?: boolean;
    hover?: boolean;
    className?: string;
}

const cardVariants = {
    white: 'bg-white text-slate-900',
    dark: 'bg-dark text-white',
    amber: 'bg-amber-50 text-slate-900 border-amber-200',
    light: 'bg-slate-50 text-slate-900',
};

const cardShadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    card: 'shadow-card',
};

export const Card: React.FC<CardProps> = ({
    children,
    variant = 'white',
    shadow = 'card',
    border = true,
    hover = false,
    className = '',
}) => {
    return (
        <div className={cn(
            'rounded-card-lg p-8 md:p-12',
            cardVariants[variant],
            cardShadows[shadow],
            border && 'border border-slate-100',
            hover && 'transition-all hover:shadow-card-hover hover:-translate-y-1',
            className
        )}>
            {children}
        </div>
    );
};

