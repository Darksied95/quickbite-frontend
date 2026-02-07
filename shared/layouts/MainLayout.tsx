import { SideMenu } from '@/shared/components/SideMenu'
import React from 'react'
import { IconKeys } from '../lib/iconMapper'
import { TopMenu } from '../components/TopMenu'

type props = {
    children: React.ReactNode
    sideMenuLinks: Array<{ name: string, href: string, icon: IconKeys }>
}
const MainLayout: React.FC<props> = ({ children, sideMenuLinks }) => {
    return (
        <div>
            <TopMenu name="Rajah" sideMenuLinks={sideMenuLinks} />
            <div className='flex'>

                <SideMenu links={sideMenuLinks} className='min-w-50 pt-4 hidden lg:block' />
                <main className='flex-1'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default MainLayout