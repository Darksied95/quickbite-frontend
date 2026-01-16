import { UpdateProfileForm } from "@/features/restaurant/components/UpdateProfileForm"

const page = () => {
    return (
        <div className="bg-white  px-8 pt-10">
            <h2 className="font-medium text-xl">Restaurant Profile</h2>
            <p className="text-gray-500 text-base md:text-sm">Update your restaurant information and how it appears to customers.</p>
            <UpdateProfileForm />
        </div>

    )
}

export default page