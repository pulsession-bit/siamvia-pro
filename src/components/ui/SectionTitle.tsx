import React from 'react';

interface SectionTitleProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
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
