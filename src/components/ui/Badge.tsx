import React from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

const badgeVariants = {
    primary: 'bg-primary text-dark',
    secondary: 'bg-slate-100 text-slate-700',
    success: 'bg-green-100 text-green-700 border-green-200',
    warning: 'bg-amber-100 text-amber-700 border-amber-200',
    error: 'bg-red-100 text-red-700 border-red-200',
    info: 'bg-blue-100 text-blue-700 border-blue-200',
}

const badgeSizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
}

/**
 * Badge component for labels, tags, and status indicators
 */
export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className
}) => {
    return (
        <span className={cn(
            'inline-flex items-center justify-center rounded-full font-bold uppercase tracking-wide border',
            badgeVariants[variant],
            badgeSizes[size],
            className
        )}>
            {children}
        </span>
    )
}
