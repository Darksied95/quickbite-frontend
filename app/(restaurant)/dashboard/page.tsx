import { RestaurantOrderCard } from "@/features/restaurant/components/RestaurantOrderCard"

const page = () => {
    return (
        <div>
            <h2>Restaurant Dashboard</h2>

            <RestaurantOrderCard
                orderId="Ord-1234"
                customerName="Rajah"
                orderItems={["Burger", "Fries"]}
                status="Delivered"
                createdAt="2023-03-01T00:00:00.000Z"
            />
        </div>
    )
}

export default page