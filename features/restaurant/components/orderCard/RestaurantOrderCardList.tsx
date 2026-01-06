import { ValidStatus } from "@/shared/types"
import { RestaurantOrderCard } from "./RestaurantOrderCard"

type Props = {
    orderItems: Array<{
        orderId: string
        customerName: string
        orderItems: string[],
        status: ValidStatus,
        createdAt: string
    }>,
    className?: string
}
export const RestaurantOrderCardList: React.FC<Props> = ({ orderItems, className }) => {
    return (
        <div className={className}>
            {
                orderItems.map((item) => {
                    return <RestaurantOrderCard key={item.orderId} {...item} />
                })
            }
        </div>
    )
}
