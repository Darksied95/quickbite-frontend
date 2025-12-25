import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

type Props = {
    title: string
    subtitle: string
    Icon: LucideIcon
    href: string
}
const RegistrationCard: React.FC<Props> = ({ Icon, subtitle, title, href }) => {
    return (
        <Link
            href={href}
            className='block w-full bg-white rounded-xl p-8 my-4 shadow-xl border-2 border-transparent translate-y-0 hover:border-green-600 hover:-translate-y-2 group transition-all'
        >
            <div className='flex flex-col items-center'>
                <Icon aria-hidden="true" className='text-brand-primary mb-4 group-hover:scale-110 transition-transform' size={32} />
                <h2 className='font-bold mb-2 text-center'>{title}</h2>
                <p className='text-gray-500 text-sm text-center'>{subtitle}</p>
            </div>
        </Link>
    )
}

export default RegistrationCard