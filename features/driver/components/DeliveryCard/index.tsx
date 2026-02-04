"use client"
import { DeliveryCardSummary } from './DeliveryCardSummary'
import { DeliveryCardRoutes } from './DeliveryCardRoutes'
import { DeliveryCardDetails } from './DeliveryCardDetails'
import { useState } from 'react';

export const DeliveryCard = ({ children }: { children?: React.ReactNode }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className='border hover:border-green-400 p-10 rounded-md grid gap-y-3'>
            <DeliveryCardSummary />

            <DeliveryCardRoutes />

            <div className='flex flex-col md:flex-row md:justify-between'>
                <button
                    className='w-full text-green-600 font-medium mt-3 md:w-auto'
                    onClick={() => setShowDetails(!showDetails)}
                >
                    {showDetails ? "Hide Details" : "View Details"}
                </button>
                {children}
            </div>

            {showDetails && <DeliveryCardDetails />}
        </div>
    )
}
