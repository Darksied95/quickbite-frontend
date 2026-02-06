import { StatusTag } from '@/features/restaurant/components/StatusTag'

export const ActiveOrderCard = () => {
    const orderItems = ["2x Burger", "1x Sides", "2x Drinks"]
    return (
        <div className="relative space-y-px pt-5 pb-10 px-3  bg-white rounded-lg">
            <StatusTag status="picked up" className="absolute right-4 font-bold" />
            <p className="text-brand-primary font-medium text-sm">ORD-1235</p>
            <p className='font-medium text-lg my-2'>Pizza Heaven</p>
            <p className='text-sm text-gray-500'>
                {orderItems.join(", ")}
            </p>
            <div className='text-sm'>
                <span>ETA:</span>
                <span className='font-extralight text-gray-700'> 10:45 AM</span>
            </div>

            <div className='h-2.5 bg-green-200 rounded-md mt-3'>
                <span className='bg-green-700 h-full rounded-md block' style={{ width: `70%` }}></span>
            </div>
        </div>
    )
}
