import React from 'react'
import { TableHeader } from './TableHeader'
import { ValidStatus } from '@/shared/types'
import { TableBody } from './TableBody'

type Props = {
    orderItems: Array<{
        orderId: string
        customerName: string
        orderItems: string[],
        status: ValidStatus,
        createdAt: string
    }>
    className?: string
}
export const Table: React.FC<Props> = ({ orderItems, className }) => {
    return (
        <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
            <TableHeader />
            <TableBody orderItems={orderItems} />
        </table>
    )
}
