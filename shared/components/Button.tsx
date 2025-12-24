import React from 'react'
import { cn } from '../utils'

interface ButtonProps {
    children: React.ReactNode
    size?: 'sm' | 'md'
    variant?: 'primary' | 'secondary'
    className?: string
}

export const Button: React.FC<ButtonProps> = ({ children, size = "sm", className = "", variant = "primary" }) => {
    return (
        <button
            className={cn(
                'px-3 rounded-md text-sm font-medium',
                {
                    "bg-white text-black border border-black/10": variant === "primary",
                    "bg-brand-primary text-white hover:bg-green-700": variant === "secondary",
                    "h-7.5": size === "sm",
                    "h-12.5": size === "md",
                },
                className
            )}
        >
            {children}
        </button>
    )
}
