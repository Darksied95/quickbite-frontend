import { RegisterCustomerForm } from "@/features/auth/components/RegisterCustomerform"
import { RegisterDriverForm } from "@/features/auth/components/RegisterDriverForm"
import { RegisterRestaurantWithOwnerForm } from "@/features/auth/components/RegisterRestaurantWithOwnerForm"
import RegistrationCard from "@/features/auth/components/RegistrationCard"
import { Logo } from "@/shared/components/Logo"
import { Car, Home, Utensils } from "lucide-react"

const Page = async ({ searchParams }: { searchParams: Promise<{ role: string | undefined }> }) => {
    const role = (await searchParams).role
    const validRoles = ["customer", "driver", "restaurant"]

    return (
        <div className="bg-green-100 min-h-screen py-px px-4 md:flex md:flex-col md:items-center md:justify-center outline">
            <div className=" flex flex-col items-center justify-center mt-14">
                <Logo size="lg" className="mb-4" />
                <h1 className="text-4xl font-bold mb-3">Create your account</h1>
                <p className="text-lg text-gray-500">Join QuickBite and start your journey</p>
            </div>

            {
                (!role || !validRoles.includes(role)) && (
                    <ul className="md:flex md:gap-x-4 ">
                        <li className="flex flex-1 ">
                            <RegistrationCard Icon={Utensils} title="Customer" subtitle="Order food from restaurants" href="/register?role=customer" />
                        </li>
                        <li className="flex flex-1">
                            <RegistrationCard Icon={Car} title="Driver" subtitle="Deliver food to customers" href="/register?role=driver" />
                        </li>
                        <li className="flex flex-1">
                            <RegistrationCard Icon={Home} title="Restaurant" subtitle="List your restaurant" href="register?role=restaurant" />
                        </li>
                    </ul>
                )
            }
            {role === "customer" && <RegisterCustomerForm />}
            {role === "restaurant" && <RegisterRestaurantWithOwnerForm />}
            {role === "driver" && <RegisterDriverForm />}

        </div>

    )
}

export default Page