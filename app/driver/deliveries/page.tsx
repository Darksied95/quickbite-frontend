import { DeliveryCard } from "@/features/driver/components/DeliveryCard"
import { cn } from "@/shared/lib/utils"
import { ChevronDown, CircleAlert, Filter, Search } from "lucide-react"
import Link from "next/link"

const page = async ({ searchParams }: PageProps<"/driver/deliveries">) => {
    const status = (await searchParams).status || "active"
    const links = [{ link: "active", text: "Active Delivery" }, { link: "completed", text: "Completed" }, { link: "all", text: "All Deliveries" }]

    return (
        <div>
            <h2 className="text-xl font-semibold mb-3 md:my-5 md:text-2xl">My Deliveries</h2>
            <div>
                <button className="flex border border-gray-300 w-full rounded-md justify-center items-center gap-x-2 text-gray-700 text-sm py-1">
                    <Filter size={16} />
                    <span className="font-medium"> Filter </span>
                    <ChevronDown size={16} />
                </button>

                <div className="relative my-3">
                    <Search size={16} className="absolute left-3 top-2 text-gray-500" />
                    <input type="text" placeholder="Search deliveries..." className="pl-9 border border-gray-300 w-full py-1 rounded-md placeholder:text-sm" />
                </div>
            </div>

            <div className="mb-10 bg-blue-50 border border-blue-200 text-blue-700 text-sm grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 p-3 rounded-md">
                <CircleAlert size={20} className="row-span-3" />
                <p className="font-medium">Active Delivery : DEL-1236</p>
                <p>You have an active delivery in progress.</p>
                <p>Complete it before accepting new orders.</p>
            </div>

            <nav className="space-x-6 overflow-x-auto whitespace-nowrap pb-2 px-2">
                {
                    links.map(({ link, text }) => (
                        <Link
                            key={link}
                            href={`/restaurant/menu?status=${link}`}
                            className={cn("inline-block text-gray-500 font-medium text-sm pb-3 px-2 capitalize", status === link && " text-green-600 border-b-2 border-green-600")}
                        >
                            {text}
                        </Link>
                    ))
                }
            </nav>
            <DeliveryCard>
                <button className="bg-green-600 text-white font-medium rounded-md py-1 hover:bg-green-700 px-3 text-sm">Complete Delivery</button>
            </DeliveryCard>
        </div>
    )
}

export default page