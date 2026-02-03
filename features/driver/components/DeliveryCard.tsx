import { StatusTag } from '@/features/restaurant/components/StatusTag'
import { Clock, MapPin, Phone } from 'lucide-react'

export const DeliveryCard = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className='border hover:border-green-400 p-10 rounded-md grid gap-y-3'>
            <div className='flex gap-x-2 items-center'>
                <h3 className="font-medium text-lg">Sushi Express</h3>
                <StatusTag status='picked up' />
                <span className='text-white bg-green-500 rounded-lg px-3 text-sm font-semibold'>Current</span>
            </div>

            <p className='flex items-center gap-x-1 text-gray-500'>
                <Clock size={18} />
                <span className='text-sm'>Jun 15, 4:45 PM</span>
            </p>

            <p>
                <span className='font-bold'>$11.25</span><br />
                <span className='text-gray-500'>4.1 miles</span>
            </p>

            <div className='grid grid-cols-[auto_1fr] gap-x-2'>
                <MapPin className='row-span-2 text-gray-500' size={20} />
                <p className='font-medium '>Pickup</p>
                <p className='text-gray-500 text-sm'>555 Cherry Ln, Cityville</p>
            </div>

            <div className='grid grid-cols-[auto_1fr] gap-x-2'>
                <MapPin className='row-span-2 text-gray-500' size={20} />
                <p className='font-medium '>Dropoff</p>
                <p className='text-gray-500 text-sm'>555 Cherry Ln, Cityville</p>
            </div>

            <button className='w-full text-green-600 font-medium mt-3'>View Details</button>
            {children}
            <div>

                <div>
                    <h4>Order Items</h4>
                    <ul className='list-disc list-inside'>
                        <li>California Roll (8pc)</li>
                        <li>spicy Tuna Roll (6pc)</li>
                        <li>Miso Soup</li>
                        <li>Green Tea</li>
                    </ul>
                </div>

                <div>
                    <h4>Restaurant Contact</h4>
                    <Phone size={20} className='text-gray-500' />
                    <p className='text-gray-500'>+1 (555) 555-5555</p>
                </div>

                <div>
                    <h4>Customer Contact</h4>
                    <Phone size={20} className='text-gray-500' />
                    <p className='text-gray-500'>+1 (555) 555-5555</p>
                </div>


            </div>
        </div>
    )
}
