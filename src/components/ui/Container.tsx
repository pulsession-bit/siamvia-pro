import React from 'react'
import { cn } from '@/utils/cn'

interface ContainerProps {
    children: React.ReactNode
    className?: string
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const containerSizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
}

/**
 * Responsive container component with consistent padding and max-width
 */
export const Container: React.FC<ContainerProps> = ({
    children,
    className,
    size = 'lg'
}) => {
    return (
        <div className={cn(
            'mx-auto px-4 sm:px-6 lg:px-8',
            containerSizes[size],
            className
        )}>
            {children}
        </div>
    )
}
