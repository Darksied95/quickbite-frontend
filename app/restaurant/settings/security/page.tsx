import { AccountAccess } from "@/features/restaurant/components/AccountAccess"
import { ChangePassword } from "@/features/restaurant/components/ChangePassword"
import { DeleteAccount } from "@/features/restaurant/components/DeleteAccount"

const page = () => {
    return (
        <div className="bg-white px-5 md:px-12 py-8 rounded-md">
            <h2 className="font-medium text-lg md:text-xl">Security Settings</h2>
            <p className='text-gray-600 text-sm font-light mb-5'>Manage your restaurant's security settings and password.</p>
            <ChangePassword />
            <AccountAccess />
            <DeleteAccount />
        </div>
    )
}

export default page