import { AddCategoryButton } from "@/features/restaurant/components/menu/AddCategoryButton"
import { AddMenuItemButton } from "@/features/restaurant/components/menu/AddMenuItemButton"
import { MenuCardList } from "@/features/restaurant/components/menu/MenuCardList"
import { NavBar } from "@/shared/components/NavBar"

const Page = async ({ searchParams }: PageProps<"/restaurant/menu">) => {

    const links = ["burger", "sides", "drinks", "desserts"]
    const status = ((await searchParams).status || links[0]) as string
    return (
        <div className="px-5">
            <div className="mt-5 mb-8 md:flex md:items-center md:justify-between">
                <h2 className="text-xl font-semibold mb-3 md:mb-0 md:text-2xl">Menu Management</h2>
                <AddMenuItemButton />
            </div>
            <div>
                <NavBar links={links} status={status} navLink="/restaurant/menu?status=" />
                <AddCategoryButton />
            </div>

            <MenuCardList />
        </div>
    )
}

export default Page