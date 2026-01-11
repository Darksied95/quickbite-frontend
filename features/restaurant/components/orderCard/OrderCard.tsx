"use client"
import { ChevronDown, Clock4Icon } from "lucide-react"
import { StatusTag } from "../StatusTag"
import { OrderCardDetails } from "./OrderCardDetails"
import { useState } from "react"
import { cn } from "@/shared/lib/utils"

export const OrderCard = () => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <div className="bg-white px-10 py-5 rounded-lg mb-5">
            <div className="grid grid-cols-[1fr_auto] gap-y-1">
                <h3 className=" font-medium">Order ORD-1234</h3>
                <div className="flex items-center gap-2">
                    <p className="font-medium ">$37.44</p>
                    <button
                        className="text-gray-500 cursor-pointer"
                        onClick={() => setShowDetails(prev => !prev)}>
                        <ChevronDown size={20} className={cn("transition-transform", showDetails && "rotate-180")} />
                    </button>
                </div>

                <StatusTag status="new" className="col-span-3 font-bold" />

                <p className="col-span-3 flex items-center gap-x-2 text-gray-500">
                    <button><Clock4Icon size={15} /></button>
                    <span className="text-xs">Placed at Jun 15, 4:30 PM</span>
                </p>

                <div className="flex items-center gap-1 text-sm">
                    <p className="font-medium ">John Doe</p>
                    &bull;
                    <p className="text-gray-800">3 items</p>
                </div>

            </div>

            {showDetails && <OrderCardDetails />}

        </div>
    )
}
