import React from 'react';

interface PageContainerProps {
    children: React.ReactNode;
    bgColor?: string;
    maxWidth?: string;
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
            <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 py-16 ${negativeMargin ? '-mt-10' : ''} relative z-20`}>
                {children}
            </div>
        </div>
    );
};
