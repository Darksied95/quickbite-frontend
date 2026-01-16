import { DaySchedule, WeekSchedule } from "./OperatingHoursList"

type Props = {
    day: keyof WeekSchedule
    open: string
    close: string
    closed: boolean
    onChange: (day: keyof WeekSchedule, updates: Partial<DaySchedule>) => void
}
export const OperatingHours: React.FC<Props> = ({ day, open, close, closed, onChange }) => {
    return (
        <div className="grid grid-cols-2 mb-3">
            <p className="text-sm font-medium">{day[0].toUpperCase() + day.slice(1)}</p>
            <div className="place-self-end flex items-center justify-center gap-2">
                <input type="checkbox" name={day} checked={closed} className="w-4 h-4" onChange={e => onChange(day, { closed: !closed })} />
                <label htmlFor={day} className=" text-sm">Closed</label>
            </div>

            {
                !closed &&
                <div className="flex justify-between col-span-2 gap-4">
                    <div className="flex-1">
                        <label className="text-xs text-gray-500">Open</label>
                        <select
                            value={open}
                            onChange={e => onChange(day, { open: e.target.value })}
                            className="w-full border border-gray-300 rounded-sm py-2 pl-3 text-sm">
                            {
                                Array.from({ length: 24 }).map((_, i) => (
                                    <option key={i} value={i}>
                                        {`${i}`.padStart(2, '0') + ':00'}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="flex-1">
                        <label className="text-xs text-gray-500">Close</label>
                        <select
                            value={close}
                            className="w-full border border-gray-300 rounded-sm py-2 pl-3 text-sm "
                            onChange={e => onChange(day, { close: e.target.value })}
                        >
                            {
                                Array.from({ length: 24 }).map((_, i) => (
                                    <option key={i} value={i} className="text-sm">
                                        {`${i}`.padStart(2, '0') + ':00'}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            }
        </div>
    )
}
