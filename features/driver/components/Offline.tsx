import { Action } from '@/shared/components/Action'
import { NoSignal } from '@/shared/components/icons/NoSignal'

export const Offline = () => {
    return (
        <div className='bg-white flex  flex-col items-center py-5 rounded-md'>
            <NoSignal />
            <h3 className='text-black font-medium'>You're currently offline</h3>
            <p className='text-sm text-gray-500'>Toggle your status to online to start receiving delivery requests</p>
            <Action as='button' variant='secondary' size='sm' className='mt-6'>Go Online</Action>
        </div>
    )
}
