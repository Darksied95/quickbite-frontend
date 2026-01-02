import { Action } from "@/shared/components/Action"
import { formatDistanceToNow } from "date-fns"

type Props = {
    orderId: string
    customerName: string
    orderItems: string[],
    status: string
    createdAt: string
}

export const RestaurantOrderCard: React.FC<Props> = ({ orderId, customerName, orderItems, status, createdAt }) => {
    return (
        <div className="relative space-y-px">
            <p className="absolute right-0 py-1 px-1 text-blue-800 bg-blue-200 w-fit rounded-xl text-xs font-medium ">{status}</p>
            <p className="text-brand-primary font-medium text-sm">{orderId}</p>
            <p className="text-sm font-medium">{customerName}</p>
            <p className="text-gray-500 text-sm">{orderItems.join(", ")}</p>
            <div className="flex">
                <p className="text-gray-500 text-xs">{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
                <Action as="button" size="sm" className="border-none text-brand-primary ml-auto font-normal"> View</Action>
                <Action as="button" size="sm" className="border-none text-brand-primary font-normal"> Update</Action>
            </div>
        </div>
    )
}
