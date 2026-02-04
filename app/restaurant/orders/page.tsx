import { OrderCardList } from "@/features/restaurant/components/orderCard/OrderCardList"
import { NavBar } from "@/shared/components/NavBar"

const page = async ({ searchParams }: PageProps<"/restaurant/orders">) => {
    const status = ((await searchParams).status || "active") as string
    const links = [{ link: "active", label: "New Orders" }, { link: "preparing", label: "Preparing" }, { link: "ready", label: "Ready" }, { link: "history", label: "History" }]

    return (
        <div className="my-5 mx-5 lg">
            <h2 className="text-xl font-semibold mb-3">Orders</h2>
            <NavBar links={links} status={status} navLink="/restaurant/orders?status=" />
            <OrderCardList />

        </div>
    )
}

export default page