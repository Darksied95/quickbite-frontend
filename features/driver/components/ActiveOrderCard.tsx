import { StatusTag } from '@/features/restaurant/components/StatusTag'
import { Action } from '@/shared/components/Action'

export const ActiveOrderCard = () => {
    const orderItems = ["Burger", "Sides", "Drinks"]
    return (
        <div className="relative space-y-px pt-5 pb-10 px-5  bg-white rounded-lg">
            <p className='font-semibold mb-3'>Current Delivery</p>
            <StatusTag status="picked up" className="absolute right-4" />
            <p className="text-brand-primary font-medium text-sm">ORD-1235</p>
            <p className='font-medium text-lg my-2'>Pizza Heaven</p>
            <div className='mb-3'>
                <p className='text-gray-500 font-medium text-sm'>Pickup from:</p>
                <address className='not-italic  text-sm'>101 Pizza Blvd, Townsville</address>
            </div>

            <div className='mb-3'>
                <p className='text-gray-500 font-medium text-sm'>Pickup to:</p>
                <p className='not-italic  text-sm'>Jane Smith</p>
                <address className='not-italic  text-sm'>789 Oak St, Townsville</address>
            </div>

            <p className="text-gray-500 font-medium text-sm mb-3">Order Items:</p>
            <ul className='[&>li:not(:last-child)]:border-b border-gray-200 pb-2'>
                {
                    orderItems.map((item, index) => (
                        <li key={index} className="py-2 ">
                            {item}
                        </li>
                    ))
                }
            </ul>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-2 mb-4">
                <Action as="button" size="sm" className='py-5 w-full md:w-fit'>Contact Customer</Action>
                <Action as="button" size="sm" variant='secondary' className='py-5 w-full md:w-fit'>Mark as Delivered</Action>
            </div>

            <div className='grid grid-cols-[1fr_auto]'>
                <div className='flex items-center gap-x-3'>
                    <span className='w-2 h-2 bg-green-600 rounded-full inline-block ' />
                    <p className='font-medium text-sm'>Pizza Heaven</p>
                </div>

                <div className='border-l-2 border-dashed border-gray-400 h-10 ml-1 row-start-2' />

                <div className='flex items-center gap-x-3 row-start-3'>
                    <span className='w-2 h-2 bg-red-600 rounded-full inline-block ' />
                    <p className='font-medium text-sm'>789 Oak St</p>
                </div>

                <div className='row-start-2 row-end-4 self-center'>
                    <p className='font-medium text-sm'>2.5 miles</p>
                    <p className='text-gray-500'>~12 min</p>
                </div>
            </div>
        </div>
    )
}
