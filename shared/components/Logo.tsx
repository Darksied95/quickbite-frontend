"use client"

import React from 'react'
import { motion } from 'motion/react'

interface LogoProps {
    variant?: 'full' | 'icon'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
    animated?: boolean
}
export const Logo: React.FC<LogoProps> = ({
    variant = 'full',
    size = 'md',
    className = '',
    animated = true,
}) => {
    const sizes = {
        sm: {
            height: 24,
            fontSize: 'text-lg',
        },
        md: {
            height: 32,
            fontSize: 'text-2xl',
        },
        lg: {
            height: 40,
            fontSize: 'text-3xl',
        },
        xl: {
            height: 56,
            fontSize: 'text-5xl',
        },
    }
    const { height, fontSize } = sizes[size]
    const iconSize = height
    // Icon component - stylized fork and lightning bolt forming a "Q"
    const LogoIcon = () => (
        <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Circular background */}
            <circle cx="50" cy="50" r="48" fill="#16a34a" />

            {/* Fork tines forming top of Q */}
            <path
                d="M35 25 L35 45 M42 25 L42 45 M49 25 L49 45"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Fork handle with bite mark */}
            <path
                d="M42 45 L42 65 Q42 70 47 70 L53 70 Q58 70 58 65 L58 50"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
            />

            {/* Lightning bolt for speed (Q tail) */}
            <path
                d="M58 55 L68 65 L62 65 L70 80"
                stroke="#fbbf24"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />

            {/* Bite mark circle */}
            <circle cx="65" cy="35" r="8" fill="#16a34a" />
            <path d="M65 27 Q70 30 70 35 Q70 40 65 43" fill="white" />
        </svg>
    )
    if (variant === 'icon') {
        return animated ? (
            <motion.div
                className={className}
                initial={{
                    scale: 0,
                    rotate: -180,
                }}
                animate={{
                    scale: 1,
                    rotate: 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                }}
            >
                <LogoIcon />
            </motion.div>
        ) : (
            <div className={className}>
                <LogoIcon />
            </div>
        )
    }
    const LogoText = () => (
        <div className="flex items-center gap-2">
            <LogoIcon />
            <span className={`font-bold text-gray-900 ${fontSize} tracking-tight`}>
                Quick<span className="text-green-600">Bite</span>
            </span>
        </div>
    )
    return animated ? (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                x: -20,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 0.5,
            }}
        >
            <LogoText />
        </motion.div>
    ) : (
        <div className={className}>
            <LogoText />
        </div>
    )
}
