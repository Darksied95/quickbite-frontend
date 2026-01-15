"use client"

import Image from "next/image"
import { Action } from "@/shared/components/Action"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { editProfileValidationSchema } from "../../validations/edit-profile.validation"

export const UpdateProfileForm = () => {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(editProfileValidationSchema),
        defaultValues: {
            name: "Burger Palace",
            description: "We serve the juiciest burgers in town , made with premium ingredients and our special sauce.",
            cuisineType: "American",
            contactPhone: "+91 9876543210",
            contactEmail: "rajah@quickbite.com",
            website: "https://quickbite.com"
        }
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 pb-7">
            <div className="grid md:grid-cols-[auto_1fr] gap-x-4 gap-y-3 mb-6">
                <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
                    className="rounded-full w-20 h-20 object-cover row-span-2"
                    alt="profile"
                    width={100}
                    height={100}
                />

                <button className="border w-full md:w-fit px-4 py-2 rounded-md text-xs font-medium text-gray-700 ">Change Logo</button>
                <p className="text-gray-500 text-xs ">JPG or PNG, 1MB max</p>
            </div>

            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">Restaurant Name</label>
                <input type="text" placeholder="Restaurant Name"  {...register("name")} className="w-full" />
            </div>

            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">Description</label>
                <textarea placeholder="Description"  {...register("description")} className="w-full" />
            </div>

            <p className="text-gray-500 text-sm mb-4">Brief description for your restaurant. This will be displayed on your profile.</p>

            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">Cuisine Type</label>
                <select {...register("cuisineType")} className="w-full bg-gray-200 py-2">
                    <option>American</option>
                    <option>Chinese</option>
                    <option>Indian</option>
                    <option>Italian</option>
                    <option>Japanese</option>
                    <option>Mexican</option>
                    <option>Middle Eastern</option>
                </select>
            </div>

            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">Contact Phone</label>
                <input type="tel" placeholder="Contact Phone"  {...register("contactPhone")} />
            </div>

            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">Contact Email</label>
                <input type="email" placeholder="Contact Email"  {...register("contactEmail")} />
            </div>

            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">Website (optional)</label>
                <input type="url" placeholder="Website"  {...register("website")} />
            </div>

            <Action as="button" type="submit" variant="secondary" size="sm" className="ml-auto block w-full md:w-auto">  Save Changes</Action>
        </form>
    )
}
