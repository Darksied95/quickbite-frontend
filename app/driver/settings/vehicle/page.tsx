import { UpdateVehicleForm } from "@/features/driver/components/profile/UpdateVehicleProfileForm"

const page = () => {
    return (
        <div className="bg-white  px-8 pt-10">
            <h2 className="font-medium text-xl">Vehicle Information</h2>
            <p className="text-gray-500 text-base md:text-sm">Update your vehicle details for delivery tracking.</p>
            <UpdateVehicleForm />
        </div>
    )
}
export default page