"use client"
import { Action } from "@/shared/components/Action"
import { formatDistanceToNow } from "date-fns"
import { RestaurantOrderCardDialog } from "./RestaurantOrderCardDialog"
import { useState } from "react"
import { StatusTag } from "./StatusTag"
import { ValidStatus } from "@/shared/types"

type Props = {
    orderId: string
    customerName: string
    orderItems: string[],
    status: ValidStatus
    createdAt: string
}

export const RestaurantOrderCard: React.FC<Props> = ({ orderId, customerName, orderItems, status, createdAt }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <RestaurantOrderCardDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <div className="relative space-y-px border-b border-gray-200 py-2 pt-5">
                <StatusTag status={status} className="absolute right-0" />
                <p className="text-brand-primary font-medium text-sm">{orderId}</p>
                <p className="text-sm font-medium">{customerName}</p>
                <p className="text-gray-500 text-sm">{orderItems.join(", ")}</p>
                <div className="flex">
                    <p className="text-gray-500 text-xs">{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
                    <Action as="button" size="sm" className="border-none text-brand-primary ml-auto font-normal" onClick={() => setIsOpen(true)}> View</Action>
                </div>
            </div>
        </>
    )
}
