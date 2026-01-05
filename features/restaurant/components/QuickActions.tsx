
export const QuickActions = () => {
    return (
        <div className="bg-white px-4 py-2 mt-4">
            <h3 className="font-medium my-3">Quick Actions</h3>
            <div role="group" aria-labelledby="quick-actions" className="grid gap-x-2 gap-y-2 mt-2">

                <button className="bg-green-600 text-white py-2 rounded-sm font-medium text-sm capitalize">
                    Update Menu
                </button>

                <button className="bg-blue-600 text-white py-2 rounded-sm font-medium text-sm capitalize">
                    Set Special Offers
                </button>

                <button className="bg-yellow-600 text-white py-2 rounded-sm font-medium text-sm capitalize">
                    Adjust Operating Hours
                </button>

                <button className="bg-purple-600 text-white py-2 rounded-sm font-medium text-sm capitalize">
                    View Customer Feedback
                </button>
            </div>
        </div>
    )
}
