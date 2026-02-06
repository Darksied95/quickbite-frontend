import { UpdateProfileForm } from "@/features/driver/components/profile/UpdateDriverProfileForm"

const page = () => {
    return (
        <div className="bg-white  px-8 pt-10">
            <h2 className="font-medium text-xl">Personal Information</h2>
            <p className="text-gray-500 text-base md:text-sm">Update your personal details and how we can contact you.</p>
            <UpdateProfileForm />
        </div>
    )
}

export default page