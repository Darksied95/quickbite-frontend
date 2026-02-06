import { Sessions } from "@/features/driver/components/Sessions";
import { ChangePassword } from "@/shared/components/security/ChangePassword";
import { DeleteAccount } from "@/shared/components/security/DeleteAccount";

const page = () => {
    return (
        <div className="bg-white px-5 md:px-12 py-8 rounded-md">
            <h2 className="font-medium text-lg md:text-xl">Security Settings</h2>
            <p className='text-gray-600 text-sm font-light mb-5'>Manage your account security and login preferences.</p>
            <ChangePassword />
            <Sessions />
            <DeleteAccount
                description="Permanently ddeactivate your driver account."
                actionLabel="Deactivate Account"
            />
        </div>
    )
}
export default page