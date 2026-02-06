import { ActiveOrderCard } from "@/features/customer/components/ActiveOrderCard"
import { CuisineSelector } from "@/features/customer/components/CuisineSelector"
import { RestaurantList } from "@/features/customer/components/RestaurantList"
import { SearchInput } from "@/shared/components/Search"



const page = async ({ searchParams }: PageProps<"/customer">) => {
    const cuisine = (await searchParams).cuisine as string
    return (
        <div className="my-5 mx-5">
            <h2 className="text-xl font-semibold mb-3 lg:col-span-2">Find Food</h2>
            <ActiveOrderCard />
            <SearchInput placeholder="Search for restaurants or cuisines..." />
            <CuisineSelector cuisine={cuisine} />
            <RestaurantList />
        </div>
    )
}
export default page