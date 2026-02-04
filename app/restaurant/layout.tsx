import { sideMenuLinks } from '@/features/restaurant/restaurant.constant'
import { SideMenu } from '@/shared/components/SideMenu'
import React from 'react'

const RestaurantLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <SideMenu links={sideMenuLinks} className='min-w-50 pt-4 hidden lg:block' />
            <main className='flex-1'>
                {children}
            </main>
        </div>
    )
}

export default RestaurantLayout