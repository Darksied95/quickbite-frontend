"use client";
import { useState } from "react";
import { OperatingHours } from "./OperatingHours";
import { Action } from "@/shared/components/Action";
import { cn } from "@/shared/lib/utils";

export type DaySchedule = {
    open: string
    close: string
    closed: boolean
}

export type WeekSchedule = {
    monday: DaySchedule
    tuesday: DaySchedule
    wednesday: DaySchedule
    thursday: DaySchedule
    friday: DaySchedule
    saturday: DaySchedule
    sunday: DaySchedule
}

export const OperatingHoursList = ({ onClose, className }: { onClose?: () => void, className?: string }) => {
    const [operatingHours, setOperatingHours] = useState<WeekSchedule>({
        monday: {
            open: "09:00",
            close: "17:00",
            closed: false
        },
        tuesday: {
            open: "09:00",
            close: "17:00",
            closed: false
        },
        wednesday: {
            open: "09:00",
            close: "17:00",
            closed: false
        },
        thursday: {
            open: "09:00",
            close: "17:00",
            closed: false
        },
        friday: {
            open: "09:00",
            close: "17:00",
            closed: false
        },
        saturday: {
            open: "09:00",
            close: "17:00",
            closed: false
        },
        sunday: {
            open: "09:00",
            close: "17:00",
            closed: false
        }

    });

    function handleOperatingHoursChange(day: keyof WeekSchedule, updates: Partial<DaySchedule>) {
        setOperatingHours(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                ...updates
            }
        }))

    }

    return (
        <div className={cn('px-3', className)}>
            {
                Object.entries(operatingHours).map(([day, operatingHour], index) => (
                    <OperatingHours
                        key={index}
                        day={day as keyof WeekSchedule}
                        open={operatingHour.open}
                        close={operatingHour.close}
                        closed={operatingHour.closed}
                        onChange={handleOperatingHoursChange}
                    />
                ))
            }
            {onClose && <Action as="button" onClick={onClose} variant="secondary" size="sm" className="block ml-auto my-5">Save Changes</Action>}
        </div>
    )
}
