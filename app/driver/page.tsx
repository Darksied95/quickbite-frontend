import { ActiveOrderCard } from '@/features/driver/components/ActiveOrderCard'
import { AvailableDeliveries } from '@/features/driver/components/AvailableDeliveries'
import { Switch } from '@/shared/components/ui/switch'

const page = () => {
    return (
        <div className=''>
            <div className='flex items-center justify-between'>
                <h2 className="text-xl font-semibold mb-3 md:my-5 md:text-2xl">Driver Dashboard</h2>
                <div className='flex items-center gap-x-3'>
                    <p>Online</p>
                    <Switch />
                </div>
            </div>
            <ActiveOrderCard />
            <AvailableDeliveries />
        </div>
    )
}

export default page