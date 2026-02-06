"use client"

import Image from "next/image"
import { Action } from "@/shared/components/Action"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { editProfileValidationSchema } from "../validations/profile.validation"

export const UpdateProfileForm = () => {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(editProfileValidationSchema),
        defaultValues: {
            firstName: "Rajah",
            lastName: "Rajah",
            email: "rajah@quickbite.com",
            phone: "+91 9876543210",
            address: "123 Main Street",
            city: "New York",
            state: "NY",
            zipCode: "10001",
        }
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 pb-7 md:grid md:grid-cols-3">
            <div className="grid md:grid-cols-[auto_1fr] gap-x-4 gap-y-3 mb-6 md:col-span-3">
                <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
                    className="rounded-full w-20 h-20 object-cover row-span-2"
                    alt="profile"
                    width={100}
                    height={100}
                />

                <button className="border w-full md:w-fit px-4 py-2 rounded-md text-xs font-medium text-gray-700 ">Change Photo</button>
                <p className="text-gray-500 text-xs ">JPG or PNG, 1MB max</p>
            </div>

            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">First name</label>
                <input type="text"  {...register("firstName")} className="w-full" />
            </div>

            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">Last name</label>
                <input type="text"  {...register("lastName")} className="w-full" />
            </div>

            <div className="mb-5 md:col-span-3">
                <label className="text-gray-700 font-medium text-sm block mb-1">Email address</label>
                <input type="email"  {...register("email")} className="w-full" />
            </div>

            <div className="mb-5  md:col-span-3">
                <label className="text-gray-700 font-medium text-sm block mb-1">Phone number</label>
                <input type="tel" placeholder="Contact Phone"  {...register("phone")} />
            </div>

            <div className="mb-5  md:col-span-3">
                <label className="text-gray-700 font-medium text-sm block mb-1">Address</label>
                <input type="text" placeholder="Address"  {...register("address")} />
            </div>
            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">City</label>
                <input type="text" placeholder="City"  {...register("city")} />
            </div>
            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">State</label>
                <input type="text"  {...register("state")} />
            </div>
            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">ZIP/Postal code</label>
                <input type="text" {...register("zipCode")} />
            </div>

            <Action as="button" type="submit" variant="secondary" size="sm" className="ml-auto block w-full md:w-auto md:col-start-3">  Save Changes</Action>
        </form>
    )
}
