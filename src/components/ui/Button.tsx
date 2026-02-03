import React from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
    className?: string
    asChild?: boolean
    href?: string
}

const buttonVariants = {
    primary: 'bg-primary text-dark font-bold hover:bg-primary-light shadow-primary active:scale-95',
    secondary: 'bg-dark text-white hover:bg-dark-light shadow-lg active:scale-95',
    outline: 'border-2 border-slate-300 text-slate-700 hover:bg-slate-50 active:scale-95',
    ghost: 'text-slate-700 hover:bg-slate-100 active:scale-95',
}

const buttonSizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        variant = 'primary',
        size = 'md',
        className,
        children,
        href,
        asChild,
        ...props
    }, ref) => {
        const classes = cn(
            'inline-flex items-center justify-center rounded-lg transition-all font-bold',
            buttonVariants[variant],
            buttonSizes[size],
            className
        )

        if (href) {
            return (
                <a href={href} className={classes}>
                    {children}
                </a>
            )
        }

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'
