"use client"
import { cn } from '@/shared/lib/utils'
import { Bell, ChevronDown, CreditCard, Lock, MapPin, Truck, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const LINKS = [
    {
        name: 'Restaurant Profile',
        href: '/restaurant/settings/profile',
        Icon: User
    },
    {
        name: "Location  & Hours",
        href: '/restaurant/settings/location',
        Icon: MapPin
    },
    {
        name: "Notifications",
        href: '/restaurant/settings/notifications',
        Icon: Bell
    },
    {
        name: "Security",
        href: '/restaurant/settings/security',
        Icon: Lock
    }

]

export const SmallScreenNavigations = ({ pathname }: { pathname: string }) => {
    const [isOpen, setIsOpen] = useState(false)
    const currentLink = LINKS.find(link => link.href === pathname) || LINKS[0]
    return (
        <nav className='relative md:hidden'>
            <button
                className='flex items-center justify-between w-full bg-gray-200 py-2 rounded-md px-2 cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                {currentLink.name}
                <ChevronDown className={cn('transition-transform duration-300 transform rotate-180', isOpen ? 'rotate-180' : 'rotate-0')} />
            </button>

            {
                isOpen && <ul className='absolute top-12 bg-white w-full px-4 py-3 rounded-md shadow-md z-10'>
                    {
                        LINKS.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className={cn('flex items-center pl-3 pr-8 py-2 mb-3 rounded-md text-sm font-medium text-gray-800', {
                                        'bg-green-100 text-green-700': pathname === link.href
                                    })}>
                                    <link.Icon
                                        className={cn('mr-3 h-5 w-5 text-gray-400', {
                                            'text-green-500': pathname === link.href
                                        })}
                                        aria-hidden="true"
                                    />
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            }
        </nav>
    )
}

export const LargeScreenNavigations = ({ pathname }: { pathname: string }) => {
    return (
        <nav className='hidden md:block'>
            <ul>
                {
                    LINKS.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                className={cn('flex items-center pl-3 pr-8 py-2 mb-3 rounded-md text-sm font-medium text-gray-800', {
                                    'bg-green-100 text-green-700': pathname === link.href
                                })}>
                                <link.Icon
                                    className={cn('mr-3 h-5 w-5 text-gray-400', {
                                        'text-green-500': pathname === link.href
                                    })}
                                    aria-hidden="true"
                                />
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
export const Navigations = () => {
    const pathname = usePathname()

    return (
        <>
            <SmallScreenNavigations pathname={pathname} />
            <LargeScreenNavigations pathname={pathname} />
        </>
    )
}
