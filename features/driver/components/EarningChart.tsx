"use client"
import { TrendingUp } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';


interface EarningsData {
    day: string;
    earnings: number;
    deliveries: number;
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
        value: number;
        payload: EarningsData;
        dataKey: string;
        color: string;
    }>;
    label?: string;
}


const weekData = [
    { day: 'Mon', earnings: 45.20, deliveries: 4 },
    { day: 'Tue', earnings: 62.80, deliveries: 6 },
    { day: 'Wed', earnings: 38.50, deliveries: 3 },
    { day: 'Thu', earnings: 71.30, deliveries: 7 },
    { day: 'Fri', earnings: 89.20, deliveries: 9 },
    { day: 'Sat', earnings: 45.42, deliveries: 5 },
    { day: 'Sun', earnings: 0, deliveries: 0 },
];

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
                <p className="font-bold text-gray-900">{payload[0].payload.day}</p>
                <p className="text-green-600 font-semibold mt-1">
                    ${payload[0].value.toFixed(2)}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                    {payload[0].payload.deliveries} deliveries
                </p>
            </div>
        );
    }
    return null;
};



export const EarningChart = () => {

    return (
        <section className="grid grid-cols-2 bg-white p-12 pr-0 gap-y-10">
            <h3 className="font-medium text-lg mb-3 ">Daily <br className="md:hidden" /> Earnings</h3>
            <div className="flex items-center gap-x-2 font-light gap-1 text-green-600 md:place-self-end md:pr-10">
                <TrendingUp />
                <p>+12.5% from last week</p>
            </div>
            <ResponsiveContainer width="100%" height={300} className="col-span-2">
                <AreaChart data={weekData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <defs>
                        <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tick={{ fontSize: 14, fill: '#6b7280' }}
                        axisLine={{ stroke: '#d1d5db' }}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fontSize: 14, fill: '#6b7280' }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        type="monotone"
                        dataKey="earnings"
                        stroke="#10b981"
                        strokeWidth={3}
                        fill="url(#colorEarnings)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </section>
    )
}