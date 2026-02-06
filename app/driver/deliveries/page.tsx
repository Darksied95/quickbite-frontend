import { ActiveDeliveryAlert } from "@/features/driver/components/deliveries/ActiveDeliveryAlert"
import { DeliveryCard } from "@/features/driver/components/deliveries/DeliveryCard"
import { TimelineFilter } from "@/features/driver/components/TimelineFilter"
import { NavBar } from "@/shared/components/NavBar"
import { SearchInput } from "@/shared/components/Search"

const page = async ({ searchParams }: PageProps<"/driver/deliveries">) => {

    const status = ((await searchParams).status || "active") as string
    const links = [{ link: "active", label: "Active Delivery" }, { link: "completed", label: "Completed" }, { link: "all", label: "All Deliveries" }]


    return (
        <div>
            <h2 className="text-xl font-semibold mb-3 md:my-5 md:text-2xl">My Deliveries</h2>

            <div>
                <TimelineFilter />
                <SearchInput placeholder="Search deliveries..." />
            </div>

            <ActiveDeliveryAlert />

            <NavBar links={links} status={status} navLink="/driver/deliveries?status=" />

            <DeliveryCard>
                <button className="bg-green-600 text-white font-medium rounded-md py-1 hover:bg-green-700 px-3 text-sm">Complete Delivery</button>
            </DeliveryCard>
        </div>
    )
}

export default page