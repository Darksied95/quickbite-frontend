import { QuickActions } from "@/features/restaurant/components/QuickActions"
import { RestaurantOrderCardList } from "@/features/restaurant/components/orderCard/ActiveOrderCardList"
import { RestaurantSummary } from "@/features/restaurant/components/RestaurantSummary"
import { Table } from "@/features/restaurant/components/table/Table"

const page = () => {
    const orderItems = [
        {
            orderId: "Ord-1234",
            customerName: "Rajah",
            orderItems: ["Burger", "Fries"],
            status: "preparing" as const,
            createdAt: "2023-03-01T00:00:00.000Z",
        },
        {
            orderId: "Ord-1236",
            customerName: "Aliyu Efe",
            orderItems: ["Taco Combo", "Nachos"],
            status: "out for delivery" as const,
            createdAt: "2026-01-02T12:20:00.000Z",
        },
    ]

    return (
        <div className="my-5 mx-5 lg:grid lg:grid-cols-2 lg:gap-x-5">
            <h2 className="text-xl font-semibold mb-3 lg:col-span-2">Restaurant Dashboard</h2>
            <div className="bg-white rounded-lg p-4 pb-0 max-h-125 overflow-y-auto lg:col-span-2">
                <h3 className="font-medium">Active Orders</h3>
                <RestaurantOrderCardList orderItems={orderItems} className="lg:hidden" />
                <Table orderItems={orderItems} className="hidden lg:table" />
            </div>
            <RestaurantSummary />
            <QuickActions />

        </div>
    )
}

export default page