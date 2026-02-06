import { EarningCard } from '@/features/driver/components/EarningCard'
import { EarningChart } from '@/features/driver/components/EarningChart'
import { EarningList } from '@/features/driver/components/EarningList'
import { EarningTable } from '@/features/driver/components/EarningTable'
import { TimelineFilter } from '@/features/driver/components/TimelineFilter'

const page = () => {
    return (
        <div className='pb-50 flex flex-col gap-y-7'>
            <h2 className="text-xl font-semibold mb-3 md:my-5 md:text-2xl">My Earnings</h2>
            <TimelineFilter className='w-40 ml-auto text-black bg-white' />
            <EarningCard />
            <EarningList />
            <EarningChart />
            <EarningTable />
        </div>
    )
}

export default page