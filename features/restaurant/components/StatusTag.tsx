import { cn } from "@/shared/lib/utils"
import { ValidStatus } from "@/shared/types"

export const StatusTag = ({ status, className }: { status: ValidStatus, className?: string }) => {
    return (
        <p className={cn(" py-1 px-2 w-fit rounded-xl text-xs font-medium capitalize",
            {
                "text-purple-700 bg-purple-200": status === "ready for pickup",
                "text-yellow-700 bg-yellow-200": status === "out for delivery",
                "text-red-700 bg-red-200": status === "cancelled",
                "text-blue-700 bg-blue-200": status === "preparing",
                " text-gray-500 bg-gray-200": status === "received",
                "text-green-700 bg-green-200": status === "delivered",
            },
            className
        )}>{status}</p>
    )
}
