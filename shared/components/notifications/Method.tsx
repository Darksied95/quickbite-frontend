export const NotificationMethods = () => {
    return (
        <div className="mt-8">
            <h3 className="text-sm font-medium my-3">Notifications Methods</h3>
            <ul>
                <li className="grid grid-cols-[auto_1fr] gap-x-3 mb-3">
                    <input type="checkbox" id="email" name="email" checked readOnly />
                    <label htmlFor="email" className="font-medium text-sm">Email</label>
                    <p className="col-start-2 text-gray-700 text-sm font-light">Rajah@quickbite.com</p>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-x-3 mb-3">
                    <input type="checkbox" id="sms" name="sms" checked readOnly />
                    <label htmlFor="sms" className="font-medium text-sm">SMS</label>
                    <p className="col-start-2 text-gray-700 text-sm font-light">+1 (555) 555-5555</p>
                </li>

                <li className="grid grid-cols-[auto_1fr] gap-x-3 mb-3">
                    <input type="checkbox" id="in-app" name="in-app" checked readOnly />
                    <label htmlFor="in-app" className="font-medium text-sm">In-App Notifications</label>
                    <p className="col-start-2 text-gray-700 text-sm font-light">Receive notifications within the restaurant dashboard.</p>
                </li>
            </ul>

        </div>
    )
}
