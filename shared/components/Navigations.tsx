"use client"
import { cn } from '@/shared/lib/utils'
import * as Icons from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { getIcon, IconKeys } from '../lib/iconMapper'


export type LinkProps = {
    name: string;
    href: string;
    Icon: IconKeys;
}


export const SmallScreenNavigations = ({ pathname, links }: { pathname: string, links: Array<LinkProps> }) => {
    const [isOpen, setIsOpen] = useState(false)
    const currentLink = links.find(link => link.href === pathname) || links[0]
    return (
        <nav className='relative md:hidden'>
            <button
                className='flex items-center justify-between w-full bg-gray-200 py-2 rounded-md px-2 cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                {currentLink.name}
                <Icons.ChevronDown className={cn('transition-transform duration-300 transform rotate-180', isOpen ? 'rotate-180' : 'rotate-0')} />
            </button>

            {
                isOpen && <ul className='absolute top-12 bg-white w-full px-4 py-3 rounded-md shadow-md z-10'>
                    {
                        links.map((link, index) => {
                            const Icon = getIcon(link.Icon)
                            return <li key={index}>
                                <Link
                                    href={link.href}
                                    className={cn('flex items-center pl-3 pr-8 py-2 mb-3 rounded-md text-sm font-medium text-gray-800', {
                                        'bg-green-100 text-green-700': pathname === link.href
                                    })}>
                                    <Icon
                                        className={cn('mr-3 h-5 w-5 text-gray-400', {
                                            'text-green-500': pathname === link.href
                                        })}
                                        aria-hidden="true"
                                    />
                                    {link.name}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            }
        </nav>
    )
}

export const LargeScreenNavigations = ({ pathname, links }: { pathname: string, links: Array<LinkProps> }) => {
    return (
        <nav className='hidden md:block'>
            <ul>
                {
                    links.map((link, index) => {
                        const Icon = getIcon(link.Icon)
                        return <li key={index}>
                            <Link
                                href={link.href}
                                className={cn('flex items-center pl-3 pr-8 py-2 mb-3 rounded-md text-sm font-medium text-gray-800', {
                                    'bg-green-100 text-green-700': pathname === link.href
                                })}>
                                <Icon
                                    className={cn('mr-3 h-5 w-5 text-gray-400', {
                                        'text-green-500': pathname === link.href
                                    })}
                                    aria-hidden="true"
                                />
                                {link.name}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}
export const Navigations = ({ links }: { links: Array<LinkProps> }) => {
    const pathname = usePathname()

    return (
        <>
            <SmallScreenNavigations pathname={pathname} links={links} />
            <LargeScreenNavigations pathname={pathname} links={links} />
        </>
    )
}
