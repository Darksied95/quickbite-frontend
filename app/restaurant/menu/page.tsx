import { AddCategoryButton } from "@/features/restaurant/components/menu/AddCategoryButton"
import { AddMenuItemButton } from "@/features/restaurant/components/menu/AddMenuItemButton"
import { MenuCardList } from "@/features/restaurant/components/menu/MenuCardList"
import { cn } from "@/shared/lib/utils"
import Link from "next/link"

const Page = async ({ searchParams }: PageProps<"/restaurant/menu">) => {

    const links = ["burger", "sides", "drinks", "desserts"]
    const status = (await searchParams).status || links[0] as string
    return (
        <div className="px-5">
            <div className="mt-5 mb-8 md:flex md:items-center md:justify-between">
                <h2 className="text-xl font-semibold mb-3 md:mb-0 md:text-2xl">Menu Management</h2>
                <AddMenuItemButton />
            </div>

            <nav className="space-x-6 overflow-x-auto whitespace-nowrap pb-2 px-2">
                {
                    links.map((link) => (
                        <Link
                            key={link}
                            href={`/restaurant/menu?status=${link}`}
                            className={cn("inline-block text-gray-500 font-medium text-sm pb-3 px-2 capitalize", status === link && " text-green-600 border-b-2 border-green-600")}
                        >
                            {link}
                        </Link>
                    ))
                }

                <AddCategoryButton />
            </nav>

            <MenuCardList />
        </div>
    )
}

export default Page