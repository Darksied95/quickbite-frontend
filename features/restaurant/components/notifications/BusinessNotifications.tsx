export const BusinessNotifications = () => {
    return (
        <div className="border-b pb-3 mt-8">
            <h3 className="text-sm font-medium my-3">Business Notifications</h3>
            <ul>
                <li className="grid grid-cols-[auto_1fr] gap-x-3 mb-4">
                    <input type="checkbox" id="daily-summary" name="daily-summary" checked />
                    <label htmlFor="daily-summary" className="font-medium text-sm">Daily Summary</label>
                    <p className="col-start-2 text-gray-700 text-sm font-light">Receive a daily summary of your restaurant's performance.</p>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-x-3 mb-4">
                    <input type="checkbox" id="customer-reviews" name="customer-reviews" checked />
                    <label htmlFor="customer-reviews" className="font-medium text-sm">Customer Reviews</label>
                    <p className="col-start-2 text-gray-700 text-sm font-light">Get notified when a customer leaves a review.</p>
                </li>
            </ul>

        </div>
    )
}
