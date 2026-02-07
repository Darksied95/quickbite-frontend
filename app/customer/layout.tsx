import { sideMenuLinks } from '@/features/customer/customer.constant'
import MainLayout from '@/shared/layouts/MainLayout'
import React from 'react'

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
    return <MainLayout sideMenuLinks={sideMenuLinks}>{children}</MainLayout>
}

export default CustomerLayout