import { Phone } from 'lucide-react'

export const DeliveryCardDetails = () => {
    return (
        <div className='border-t border-gray-300 pt-5 md:grid md:grid-cols-2'>

            <div className='mb-5 md:col-span-2'>
                <h4 className='font-medium text-sm'>Order Items</h4>
                <ul className='list-disc list-inside'>
                    <li className='text-gray-500 font-light text-sm'>California Roll (8pc)</li>
                    <li className='text-gray-500 font-light text-sm'>Spicy Tuna Roll (6pc)</li>
                    <li className='text-gray-500 font-light text-sm'>Miso Soup</li>
                    <li className='text-gray-500 font-light text-sm'>Green Tea</li>
                </ul>
            </div>

            <div className='grid grid-cols-[auto_1fr] gap-2 mb-5'>
                <h4 className='font-medium text-sm col-span-2'>Restaurant Contact</h4>
                <Phone size={18} className='text-gray-400' />
                <p className='text-green-600 text-sm'>(555) 555-5555</p>
            </div>

            <div className='grid grid-cols-[auto_1fr] gap-2 mb-5'>
                <h4 className='font-medium text-sm col-span-2'>Customer Contact</h4>
                <Phone size={18} className='text-gray-400' />
                <p className='text-green-600 text-sm'>(555) 555-5555</p>
            </div>

            <div className='grid grid-cols-2 gap-y-2 md:col-span-2'>
                <h4 className='font-medium text-sm col-span-2'>Delivery Summary</h4>

                <div className='flex flex-col '>
                    <span className='text-gray-500 font-light text-sm'>Order Total:</span>
                    <span>$45.75</span>
                </div>

                <div className='flex flex-col '>
                    <span className='text-gray-500 font-light text-sm'>Distance:</span>
                    <span>4.1 miles</span>
                </div>

                <div className='flex flex-col '>
                    <span className='text-gray-500 font-light text-sm'>Base Pay:</span>
                    <span>$6.25</span>
                </div>

                <div className='flex flex-col '>
                    <span className='text-gray-500 font-light text-sm'>Tip:</span>
                    <span>$5.00</span>
                </div>

                <div className='flex flex-col '>
                    <span className='text-gray-500 font-light text-sm'>Total Earnings:</span>
                    <span>$11.25</span>
                </div>

                <div className='flex flex-col '>
                    <span className='text-gray-500 font-light text-sm'>Est. Time:</span>
                    <span>15 mins</span>
                </div>

            </div>
        </div>
    )
}
