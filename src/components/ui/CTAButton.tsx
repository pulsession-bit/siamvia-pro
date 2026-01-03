import React from 'react';

interface CTAButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
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
        <a href={href} className={`
            ${variants[variant]}
            ${fullWidth ? 'w-full' : ''}
            inline-flex items-center justify-center
            px-6 py-3 rounded-lg font-bold
            shadow-lg transition
        `}>
            {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </a>
    );
};
