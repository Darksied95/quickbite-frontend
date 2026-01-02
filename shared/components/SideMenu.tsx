"use client"

import { Home, Settings, ShoppingBag, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { cn } from "../lib/utils"
import { usePathname } from "next/navigation"


const iconMap = {
    "home": Home,
    "settings": Settings,
    "shopping-bag": ShoppingBag,
    "shopping-cart": ShoppingCart,
} as const

export type IconName = keyof typeof iconMap

type SideMenuProps = {
    links: Array<{
        name: string
        href: string
        icon: IconName
    }>,
    className?: string
}

export const SideMenu: React.FC<SideMenuProps> = ({ links, className }) => {
    const pathname = usePathname()
    const isActive = (href: string) => pathname === href

    return (
        <aside className={`bg-white pt-4 ${className} `}>
            <nav >
                <ul className="space-y-1">
                    {
                        links.map(({ name, href, icon }, index) => {
                            const Icon = iconMap[icon]
                            return (
                                <li key={index}>
                                    <Link href={href} className={cn("flex items-center gap-2 text-sm py-3 font-medium rounded-sm pl-3", isActive(href) && "bg-green-100 text-green-700")}>
                                        <Icon size={20} />
                                        <span>{name}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </aside>
    )
}
