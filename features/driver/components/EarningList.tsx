import { DollarSign, Gift, Truck } from "lucide-react"

const data = [
    {
        Icon: Truck,
        title: "Base Pay",
        value: "$352.42",
        color: "blue"
    },
    {
        Icon: DollarSign,
        title: "Tips",
        value: "$352.42",
        color: "green"
    },
    {
        Icon: Gift,
        title: "Bonuses",
        value: "$352.42",
        color: "purple"

    }
]

let colorStyles: Record<string, { icon: string, bg: string }> = {
    blue: { icon: "text-blue-600", bg: "bg-blue-50" },
    green: { icon: "text-green-600", bg: "bg-green-50" },
    purple: { icon: "text-purple-600", bg: "bg-purple-50" }
}

export const EarningList = () => {
    return (
        <ul className="space-y-5 md:space-y-0 md:flex md:gap-x-5 ">
            {
                data.map((item, index) => {
                    const Icon = item.Icon
                    const color = colorStyles[item.color]
                    return (
                        <li key={index} className="grid grid-cols-[auto_1fr] bg-white p-10 gap-x-5 rounded-md md:flex-1">
                            <div className={`w-10 aspect-square rounded-full grid place-items-center row-span-2 ${color.bg}`}>
                                <Icon size={20} className={`${color.icon}`} />
                            </div>
                            <span className="font-light text-sm">{item.title}</span>
                            <strong className="font-bold col-start-2 row-start-2">{item.value}</strong>
                        </li>
                    )
                })
            }
        </ul>
    )
}