import { StatusTag } from '@/features/restaurant/components/StatusTag'
import { Clock } from 'lucide-react'

export const DeliveryCardSummary = () => {
    return (
        <div className='md:grid md:grid-cols-[1fr_auto] '>
            <div className='flex gap-x-2 items-center'>
                <h3 className="font-medium text-lg">Sushi Express</h3>
                <StatusTag status='picked up' />
                <span className='text-white bg-green-500 rounded-lg px-3 text-sm font-semibold'>Current</span>
            </div>

            <p className='flex items-center gap-x-1 text-gray-500 md:row-start-2 mb-3'>
                <Clock size={18} />
                <span className='text-sm'>Jun 15, 4:45 PM</span>
            </p>

            <p>
                <span className='font-bold'>$11.25</span><br />
                <span className='text-gray-500'>4.1 miles</span>
            </p>
        </div>
    )
}
