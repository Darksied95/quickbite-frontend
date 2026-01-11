import React from 'react'

export const OrderCardDetails = () => {
    const details = [
        {
            name: "double cheeseburger",
            price: "$10.00",
            quantity: 1,
        },
        {
            name: "french fries",
            price: "$3.99",
            quantity: 1,
        },
        {
            name: "chicken nuggets",
            price: "$4.99",
            quantity: 2,
        },

    ]
    return (
        <div className='border-t border-gray-200 pt-3 mt-3 text-sm'>
            <div className='mb-4'>

                <h3 className='font-semibold text-gray-500'>Customer Information</h3>
                <p className='font-medium text-gray-700'>John Doe</p>
                <p>(555) 123-4567</p>
                <p>123 Main Street, Anytown USA</p>
            </div>

            <div className='mb-3'>
                <h3 className='font-semibold text-gray-500'>Order Items</h3>
                {details.map((item, index) => (
                    <div key={index} className='text-black font-semibold capitalize flex items-center justify-between py-3 border-b border-gray-200'>
                        <p>{item.quantity}x {item.name}</p>
                        <p className='text-gray-500 font-medium'>{item.price}</p>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-between font-bold text-black text-base'>
                <p>Total</p>
                <p>$37.44</p>
            </div>

            <div className='grid mt-4 md:grid-cols-[auto_auto_1fr] gap-4'>
                <button className='bg-green-600 text-white mb-3 py-2 px-3 rounded-md font-semibold'>Start Preparing</button>
                <button className='bg-red-600 text-white mb-3 py-2 px-3 rounded-md font-semibold'>Cancel Order</button>
                <button className='bg-white border border-gray-300 mb-3 py-2 rounded-md font-semibold row-start-2 col-span-3'>Print Receipt</button>
            </div>
        </div>
    )
}
