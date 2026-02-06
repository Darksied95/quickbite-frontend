import { CircleAlert } from 'lucide-react'
import React from 'react'

export const ActiveDeliveryAlert = () => {
    return (
        <div className="mb-10 bg-blue-50 border border-blue-200 text-blue-700 text-sm grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 p-3 rounded-md">
            <CircleAlert size={20} className="row-span-3" />
            <p className="font-medium">Active Delivery : DEL-1236</p>
            <p>You have an active delivery in progress.</p>
            <p>Complete it before accepting new orders.</p>
        </div>
    )
}
