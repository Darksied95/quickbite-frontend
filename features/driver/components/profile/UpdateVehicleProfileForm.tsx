"use client"

import { Action } from "@/shared/components/Action"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { vehicleValidationSchema } from "../../validations/vehicle.validation"

export const UpdateVehicleForm = () => {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(vehicleValidationSchema),
        defaultValues: {
            type: "car" as const,
            make: "Honda",
            model: "Civic",
            year: 2022,
            color: "black",
            licensePlate: "123456",
        }
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 pb-7 md:grid md:grid-cols-2">
            <div className="mb-5 md:col-span-2">
                <label className="text-gray-700 font-medium text-sm block mb-1">Vehicle Type</label>
                <select {...register("type")} className="w-full bg-gray-200 py-2">
                    <option>Car</option>
                    <option>Motorcycle</option>
                    <option>Bicycle</option>
                </select>
            </div>

            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">Make</label>
                <input type="text" placeholder="Make"  {...register("make")} className="w-full" />
            </div>

            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">Model</label>
                <textarea placeholder="Description"  {...register("model")} className="w-full" />
            </div>

            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">Year</label>
                <input type="string"   {...register("year")} />
            </div>

            <div className="mb-5">
                <label className="text-gray-700 font-medium text-sm block mb-1">Color</label>
                <input type="text" {...register("color")} />
            </div>

            <div className="mb-5 col-span-2">
                <label className="text-gray-700 font-medium text-sm block mb-1">License Plate</label>
                <input type="text"   {...register("licensePlate")} />
            </div>

            <Action as="button" type="submit" variant="secondary" size="sm" className="ml-auto block w-full md:w-auto md:col-start-2">  Save Changes</Action>
        </form>
    )
}
