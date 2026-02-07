import { sideMenuLinks } from '@/features/restaurant/restaurant.constant'
import MainLayout from '@/shared/layouts/MainLayout'
import React from 'react'

const RestaurantLayout = ({ children }: { children: React.ReactNode }) => {
    return <MainLayout sideMenuLinks={sideMenuLinks}>{children}</MainLayout>
}

export default RestaurantLayout