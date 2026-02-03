import React from 'react'
import { cn } from '@/utils/cn'

interface SectionProps {
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'dark' | 'light'
    spacing?: 'sm' | 'md' | 'lg' | 'xl'
}

const sectionVariants = {
    default: 'bg-white',
    dark: 'bg-slate-900 text-white',
    light: 'bg-slate-50',
}

const sectionSpacing = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
}

/**
 * Section component with consistent vertical spacing
 */
export const Section: React.FC<SectionProps> = ({
    children,
    className,
    variant = 'default',
    spacing = 'lg'
}) => {
    return (
        <section className={cn(
            sectionVariants[variant],
            sectionSpacing[spacing],
            className
        )}>
            {children}
        </section>
    )
}
