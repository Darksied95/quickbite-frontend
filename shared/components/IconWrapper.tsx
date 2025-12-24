import { LucideIcon } from 'lucide-react'

const IconWrapper = ({ Icon, className, ...props }: { Icon: LucideIcon, className?: string }) => {
    return (
        <div className={`p-3 bg-brand-secondary/90 rounded-md text-white w-fit ${className}`}>
            <Icon {...props} aria-hidden="true" size={20} />
        </div>
    )
}

export default IconWrapper