import { OrderCardList } from "@/features/restaurant/components/orderCard/OrderCardList"
import { cn } from "@/shared/lib/utils"
import Link from "next/link"

const page = async ({ searchParams }: PageProps<"/restaurant/orders">) => {
    const status = (await searchParams).status || "active" as string

    return (
        <div className="my-5 mx-5 lg">
            <h2 className="text-xl font-semibold mb-3">Orders</h2>
            <nav className="space-x-6 overflow-x-auto whitespace-nowrap pb-2 px-2">
                <Link
                    href={"/restaurant/orders?status=active"}
                    className={cn("inline-block text-gray-500 font-medium text-sm pb-4 px-2", status === "active" && " text-green-600 border-b-2 border-green-600")}
                >
                    New  Orders
                    <span className="bg-green-200 px-2 py-1 rounded-full text-xs font-bold ml-2">2</span>
                </Link>

                <Link
                    href={"/restaurant/orders?status=preparing"}
                    className={cn("inline-block text-gray-500 font-medium text-sm pb-4 px-2", status === "preparing" && " text-green-600 border-b-2 border-green-600")}
                >
                    Preparing
                    <span className="bg-yellow-100 px-2 py-1 rounded-full text-xs font-bold ml-2">1</span>
                </Link>

                <Link
                    href={"/restaurant/orders?status=ready"}
                    className={cn("inline-block text-gray-500 font-medium text-sm pb-4 px-2", status === "ready" && " text-green-600 border-b-2 border-green-600")}
                >
                    Ready
                    <span className="bg-green-200 px-2 py-1 rounded-full text-xs font-bold ml-2">2</span>
                </Link>

                <Link
                    href={"/restaurant/orders?status=history"}
                    className={cn("inline-block text-gray-500 font-medium text-sm pb-4 px-2", status === "history" && " text-green-600 border-b-2 border-green-600")}>History</Link>
            </nav>

            <OrderCardList />

        </div>
    )
}

export default page