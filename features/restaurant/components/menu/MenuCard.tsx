import { Switch } from "@/shared/components/ui/switch"
import { Pencil, Trash } from "lucide-react"
import Image from "next/image"
import { MenuItem } from "../../restaurant.types"
import { cn } from "@/shared/lib/utils"

export const MenuCard: React.FC<MenuItem & { onEdit: () => void, onDelete: () => void }> = ({ name, description, price, image, category, available, popular, onEdit, onDelete }) => {

    return (
        <li className={cn("relative flex flex-col gap-y-3 rounded-md border p-6 ", { "opacity-60": !available })}>
            <Image src={image} alt={name} width={250} height={250} className="w-full aspect-video object-cover mb-5" unoptimized />
            {popular && <span className="text-white text-sm bg-yellow-500 font-semibold rounded-md px-2  py-1 absolute top-10 left-9">POPULAR</span>}
            <div className="grid grid-cols-[1fr_auto] px-4 gap-y-3">
                <p className="font-medium">{name}</p>
                <p className="justify-self-end font-medium">${price}</p>
                <p className="text-sm text-gray-500 col-span-2">{description}</p>

                <div className="flex gap-x-2 col-span-2 items-center">
                    <Switch checked={available} className="" />
                    <p className="text-sm font-medium ">{available ? "Available" : "Unavailable"}</p>
                </div>

                <div className="flex col-start-2 text-gray-400 gap-4">
                    <button onClick={onEdit} className="cursor-pointer">
                        <Pencil size={20} className="hover:text-black hover:bg-gray-100 hover:rounded-md  " />
                    </button>
                    <button onClick={onDelete} className="cursor-pointer">
                        <Trash size={20} className="hover:text-red-600 hover:bg-gray-100 hover:rounded-md  " />
                    </button>
                </div>
            </div>
        </li>
    )
}
