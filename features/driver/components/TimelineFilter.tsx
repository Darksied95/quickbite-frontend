"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select'
import { cn } from '@/shared/lib/utils';
import { Calendar, ChevronDown } from 'lucide-react'
import { useState } from 'react';

export const TimelineFilter = ({ className }: { className?: string }) => {
    const [filter, setFilter] = useState<string>("week");
    const [open, setOpen] = useState(false);

    return (
        <Select value={filter} onValueChange={setFilter} onOpenChange={setOpen} open={open}>

            <SelectTrigger className={cn("[&>svg]:hidden border border-gray-300 w-full py-1 text-gray-700  text-sm rounded-md placeholder:text-sm", className)}>
                <div className="flex w-full rounded-md justify-center items-center gap-x-2   py-1">
                    <Calendar size={16} />
                    <SelectValue />
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
