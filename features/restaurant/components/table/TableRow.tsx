"use client"

import React, { useState } from 'react'
import { StatusTag } from '../StatusTag'
import { formatDistanceToNow } from 'date-fns'
import { Action } from '@/shared/components/Action'
import { ValidStatus } from '@/shared/types'
import { RestaurantOrderCardDialog } from '../orderCard/RestaurantOrderCardDialog'

type Props = {
    orderId: string
    customerName: string
    orderItems: string[],
    status: ValidStatus
    createdAt: string
}

export const TableRow: React.FC<Props> = ({ orderId, customerName, orderItems, status, createdAt }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <RestaurantOrderCardDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <tr className='[&_td]:py-2 border-b border-gray-200 last:border-none'>
                <td className="text-brand-primary font-medium text-sm text-center">{orderId}</td>
                <td className="text-sm font-medium text-center text-gray-500" >{customerName}</td>
                <td className="text-gray-500 text-xs text-center ">{orderItems.join(", ")}</td>
                <td className="text-center align-middle ">
                    <StatusTag status="preparing" className="py-px inline-block" />
                </td>
                <td className="text-gray-500 text-xs text-center">{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</td>
                <td >
                    <Action as="button" size="sm" className="border-none text-brand-primary ml-auto font-normal" onClick={() => setIsOpen(true)}> View</Action>
                </td>
            </tr>
        </>
    )
}
