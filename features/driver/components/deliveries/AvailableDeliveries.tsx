import { AvailableDeliveryCard } from '../deliveries/AvailableDeliveryCard'

export const AvailableDeliveries = () => {
    return (
        <div className='bg-white p-6 mt-7 rounded-md'>
            <p className='font-semibold mb-3'>Available Deliveries</p>
            <ul>
                <AvailableDeliveryCard />
            </ul>
        </div>
    )
}
