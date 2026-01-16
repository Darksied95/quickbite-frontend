import { AddressForm } from "@/features/restaurant/components/AddressForm"
import { OperatingHoursList } from "@/features/restaurant/components/operatingHours/OperatingHoursList"
import { Action } from "@/shared/components/Action"

const page = () => {
    return (
        <div className="bg-white  px-8 pt-10 pb-5 rounded-md">
            <h2 className="font-medium text-lg md:text-xl">Location & Hours</h2>
            <p className="text-gray-500 text-base md:text-sm">Manage your restaurant's address and operating hours.</p>
            <AddressForm />
            <div>
                <h3 className="font-semibold text-sm my-3 text-gray-700">Operating Hours</h3>
                <OperatingHoursList className="px-0" />
            </div>
            <Action as="button" type="submit" variant="secondary" size="sm" className="ml-auto mt-5 block w-full md:w-auto">  Save Changes</Action>

        </div>
    )
}

export default page