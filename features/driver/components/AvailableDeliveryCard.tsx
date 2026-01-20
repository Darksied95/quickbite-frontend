import { Action } from '@/shared/components/Action'

export const AvailableDeliveryCard = () => {
    return (
        <li className='grid grid-cols-[1fr_auto] border border-gray-200 rounded-md p-4'>
            <p className="text-brand-primary font-medium text-sm">ORD-1235</p>
            <p className='font-medium text-sm'>$8.50</p>
            <p className='font-medium text-sm my-2 col-span-2'>Taco Town</p>
            <address className='not-italic  text-sm text-gray-500 col-span-2'>789 Oak St, Townsville</address>
            <div className='mt-3 col-span-2 flex items-center justify-between'>
                <p className=' text-sm text-gray-500 '>2.5 miles</p>
                <Action as="button" size="sm" variant='secondary' className='h-0 py-4'>Accept</Action>

            </div>
        </li>
    )
}
