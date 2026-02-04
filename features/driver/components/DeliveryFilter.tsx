"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select'
import { ChevronDown, Filter } from 'lucide-react'
import { useState } from 'react';

export const DeliveryFilter = () => {
    const [filter, setFilter] = useState<undefined | string>();
    const [open, setOpen] = useState(false);

    return (
        <Select value={filter} onValueChange={setFilter} onOpenChange={setOpen} open={open}>

            <SelectTrigger className="[&>svg]:hidden border border-gray-300 w-full py-1 rounded-md placeholder:text-sm" >
                <div className="flex w-full rounded-md justify-center items-center gap-x-2 text-gray-700 text-sm py-1">
                    <Filter size={16} />
                    <SelectValue placeholder="Filter" />
                    <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
                    />
                </div>
            </SelectTrigger>

            <SelectContent
                side='top'
                align='start'
                position='popper'
            >
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
        </Select>
    )
}
