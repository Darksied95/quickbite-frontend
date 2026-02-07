import { sideMenuLinks } from '@/features/driver/driver.constant'
import MainLayout from '@/shared/layouts/MainLayout'
import React from 'react'

const DriverLayout = ({ children }: { children: React.ReactNode }) => {
    return <MainLayout sideMenuLinks={sideMenuLinks}>{children}</MainLayout>
}

export default DriverLayout