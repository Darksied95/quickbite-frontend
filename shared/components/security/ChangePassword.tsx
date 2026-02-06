import { Action } from "@/shared/components/Action"

export const ChangePassword = () => {
    return (
        <form className="border-b pb-10">
            <h3 className="text-sm font-medium my-3">Change Password</h3>
            <div className="flex flex-col mb-4">

                <label className="text-sm font-medium">Current Password</label>
                <input type="password" className="border border-gray-300 rounded-md p-2 mt-2" />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-sm font-medium">New Password</label>
                <input type="password" className="border border-gray-300 rounded-md p-2 mt-2" />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-sm font-medium">Confirm New Password</label>
                <input type="password" className="border border-gray-300 rounded-md p-2 mt-2" />
            </div>

            <Action as="button" type="submit" variant="secondary" size="sm" className="ml-auto mt-5 block w-full md:w-auto">Update Password</Action>
        </form>
    )
}
