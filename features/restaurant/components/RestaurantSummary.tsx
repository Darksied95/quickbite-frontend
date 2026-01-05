export const RestaurantSummary = () => {
    return (
        <div className="bg-white rounded-lg p-4 mt-4">
            <h2 className="font-medium mb-4">Today's Summary</h2>
            <div className="grid grid-cols-2 gap-3">
                <div className="border border-gray-200 py-2 rounded-md">
                    <p className="text-center text-xs text-gray-500">Total Orders</p>
                    <p className="text-lg font-bold text-center">12</p>
                </div>

                <div className="border border-gray-200 py-2 rounded-md">
                    <p className="text-center text-xs text-gray-500">Revenue</p>
                    <p className=" text-lg font-bold text-center">$120</p>
                </div>

                <div className="border border-gray-200 py-2 rounded-md">
                    <p className="text-center text-xs text-gray-500">Top Item</p>
                    <p className=" text-lg font-bold text-center">Burger</p>
                </div>

                <div className="border border-gray-200 py-2 rounded-md">
                    <p className="text-center text-xs text-gray-500">Avg.Prep Time</p>
                    <p className=" text-lg font-bold text-center">10 mins</p>
                </div>

            </div>
        </div>
    )
}
