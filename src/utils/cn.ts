import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes intelligently.
 * Combines clsx for conditional classes and tailwind-merge to resolve conflicts.
 * 
 * @example
 * cn('px-4 py-2', 'px-6') // Returns: 'px-6 py-2'
 * cn('text-red-500', condition && 'text-blue-500') // Conditional classes
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
