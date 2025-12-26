import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'

interface BaseProps {
    children: React.ReactNode
    size?: 'sm' | 'md'
    variant?: 'primary' | 'secondary'
    className?: string
}
type ButtonProps = {
    as: 'button'
    loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

type LinkProps = {
    as: "link";
    href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ActionProps = BaseProps & (ButtonProps | LinkProps)

export const Action: React.FC<ActionProps> = (props) => {
    const { as, children, size = "md", variant = "primary", className } = props

    const classes = cn(
        'inline-flex items-center justify-center px-3 rounded-md text-sm font-medium cursor-pointer',
        {
            "bg-white text-black border border-black/10": variant === "primary",
            "bg-brand-primary text-white hover:bg-green-700": variant === "secondary",
            "h-7.5": size === "sm",
            "h-12.5": size === "md",
        },
        className
    )

    if (as === "link") {
        const { href, as: _, ...rest } = props

        return (
            <Link href={href} {...rest} className={`${classes}`}>
                {children}
            </Link>
        )
    }
    const { type = "button", loading, ...rest } = props

    return (
        <button
            type={type}
            {...rest}
            className={classes}
        >
            {loading
                ? <span className={cn("mr-2 h-4 w-4 animate-spin rounded-full border-b-2", {
                    " border-white": variant === "secondary",
                    " border-brand-primary": variant === "primary",
                })} />
                : children
            }
        </button>
    )
}

