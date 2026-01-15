import { Navigations } from '@/features/restaurant/components/settings/Navigations'
import React from 'react'

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='px-8 pt-7 pb-3'>
            <h1 className="text-2xl font-semibold mb-7">Restaurant Settings</h1>
            <div className='flex gap-4 flex-col md:flex-row'>
                <Navigations />
                <div className='flex-1 h-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SettingsLayout