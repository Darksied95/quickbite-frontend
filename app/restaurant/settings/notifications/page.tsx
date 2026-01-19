import { BusinessNotifications } from '@/features/restaurant/components/notifications/BusinessNotifications'
import { NotificationsMethods } from '@/features/restaurant/components/notifications/NotificationMethods'
import { OrderNotifications } from '@/features/restaurant/components/notifications/OrderNotifications'
import { Action } from '@/shared/components/Action'

const page = () => {
    return (
        <div className='bg-white px-5 md:px-12 py-8 rounded-md'>
            <h2 className="font-medium text-lg md:text-xl">Notification Preferences</h2>
            <p className='text-gray-600 text-sm font-light mb-5'>Manage how you receive notifications about orders and restaurant activity.</p>
            <OrderNotifications />
            <BusinessNotifications />
            <NotificationsMethods />
            <Action as="button" type="submit" variant="secondary" size="sm" className="ml-auto mt-5 block w-full md:w-auto">  Save Changes</Action>
        </div>
    )
}

export default page