import React from 'react';
import { cn } from '@/utils/cn';

interface CTAButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    fullWidth?: boolean;
    className?: string;
}

const ctaVariants = {
    primary: 'bg-primary text-slate-900 hover:bg-primary-light shadow-primary',
    secondary: 'bg-dark text-white hover:bg-dark-light shadow-lg',
    outline: 'bg-transparent border-2 border-slate-400 text-slate-700 hover:bg-slate-50',
};

export const CTAButton: React.FC<CTAButtonProps> = ({
    href,
    children,
    variant = 'primary',
    icon,
    iconPosition = 'right',
    fullWidth = false,
    className = '',
}) => {
    return (
        <a href={href} className={cn(
            'inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all active:scale-95',
            ctaVariants[variant],
            fullWidth && 'w-full',
            className
        )}>
            {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </a>
    );
};

