import { MapPin } from 'lucide-react'

export const DeliveryCardRoutes = () => {
    return (
        <div className='md:flex'>
            <div className='grid grid-cols-[auto_1fr] gap-x-2 md:mr-50'>
                <MapPin className='row-span-2 text-gray-400' size={20} />
                <p className='font-medium '>Pickup</p>
                <p className='text-gray-500 text-sm'>555 Cherry Ln, Cityville</p>
            </div>

            <div className='grid grid-cols-[auto_1fr] gap-x-2'>
                <MapPin className='row-span-2 text-gray-400' size={20} />
                <p className='font-medium '>Dropoff</p>
                <p className='text-gray-500 text-sm'>555 Cherry Ln, Cityville</p>
            </div>
        </div>
    )
}
