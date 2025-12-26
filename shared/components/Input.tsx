import { LucideIcon } from 'lucide-react'
import React, { InputHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils'
import { motion } from 'motion/react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    Icon?: LucideIcon
    label: string
    helperText?: string
    error?: string
    parentClassName?: string
}
const Input: React.FC<Props> = ({ Icon, label, helperText, parentClassName, error, ...props }) => {
    return (
        <div className={cn('mb-4', parentClassName)}>
            <label className='text-sm font-medium' htmlFor={props.id}>
                {label}
                {!props.required && <span className='text-gray-500 text-xs'> (optional)</span>}
            </label>

            <div className='relative mt-1'>
                {
                    Icon && <Icon className='absolute left-2 top-3 text-gray-500' aria-hidden size={20} />
                }
                <input
                    className={cn('border border-gray-300 py-2 pl-4 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-brand-secondary', {
                        'pl-8': Icon
                    })}
                    {...props} />
            </div>

            {error && (
                <motion.p
                    initial={{
                        opacity: 0,
                        y: -5,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="mt-1.5 text-sm text-red-600"
                >
                    {error}
                </motion.p>
            )}
            {helperText && (
                <p className='text-gray-500 text-sm mt-1'>{helperText}</p>
            )}
        </div>
    )
}

export default Input