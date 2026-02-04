import Link from 'next/link'
import { cn } from '../lib/utils'

type Props = {
    links: string[] | { link: string, label: string }[]
    status: string
    navLink: `/${string}?${string}=`
}
export const NavBar = ({ links, status, navLink }: Props) => {
    return <nav className="space-x-6 overflow-x-auto whitespace-nowrap pb-2 px-2">
        {
            links.map((link) => {
                link = typeof link === 'string' ? { link, label: link } : link

                return <Link
                    key={link.link}
                    href={`${navLink}${link.link}`}
                    className={cn("inline-block text-gray-500 font-medium text-sm pb-3 px-2 capitalize", status === link.link && " text-green-600 border-b-2 border-green-600")}
                >
                    {link.label}
                </Link>
            })
        }
    </nav>
}
