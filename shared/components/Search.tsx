import { Search } from 'lucide-react'

export const SearchInput = ({ placeholder }: { placeholder: string }) => {
    return (
        <div className="relative my-3">
            <Search size={16} className="absolute left-3 top-2 text-gray-500" />
            <input type="text" placeholder={placeholder} className="pl-9 border border-gray-300 w-full py-1 rounded-md placeholder:text-sm" />
        </div>
    )
}
