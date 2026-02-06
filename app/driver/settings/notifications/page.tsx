import { deliveryNotifications, earningsNotifications } from "@/features/driver/driver.constant"
import { Action } from "@/shared/components/Action"
import { Notification } from "@/shared/components/notifications"
import { NotificationMethods } from "@/shared/components/notifications/Method"

const page = () => {
    return (
        <form className='bg-white px-5 md:px-12 py-8 rounded-md'>
            <h2 className="font-medium text-lg md:text-xl">Notification Preferences</h2>
            <p className='text-gray-600 text-sm font-light mb-5'>Manage how you receive notifications about deliveries and earnings.</p>
            <Notification heading={deliveryNotifications.heading} lists={deliveryNotifications.lists} />
            <Notification heading={earningsNotifications.heading} lists={earningsNotifications.lists} />
            <NotificationMethods />
            <Action as="button" type="submit" variant="secondary" size="sm" className="ml-auto mt-5 block w-full md:w-auto">  Save Changes</Action>
        </form>
    )
}
export default page