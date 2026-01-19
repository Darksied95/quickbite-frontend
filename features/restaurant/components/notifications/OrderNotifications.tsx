export const OrderNotifications = () => {
    return (
        <div className="border-b pb-3">
            <h3 className="text-sm font-medium my-3">Order Notifications</h3>
            <ul>
                <li className="grid grid-cols-[auto_1fr] gap-x-3 mb-4">
                    <input type="checkbox" id="new-orders" name="new-orders" checked />
                    <label className="font-medium text-sm" htmlFor="new-orders">New Orders</label>
                    <p className="col-start-2 text-gray-700 text-sm font-light">Get notified when a new order is placed.</p>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-x-3 mb-4">
                    <input type="checkbox" id="order-status" name="order-status" checked />
                    <label className="font-medium text-sm" htmlFor="order-status">Order Status Updates</label>
                    <p className="col-start-2 text-gray-700 text-sm font-light">Get notified when an order status changes.</p>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-x-3 mb-4">
                    <input type="checkbox" id="driver-assignment" name="driver-assignment" checked />
                    <label className="font-medium text-sm" htmlFor="driver-assignment">Driver Assignments</label>
                    <p className="col-start-2 text-gray-700 text-sm font-light">Get notified when a driver is assigned to an order.</p>
                </li>
            </ul>

        </div>
    )
}
