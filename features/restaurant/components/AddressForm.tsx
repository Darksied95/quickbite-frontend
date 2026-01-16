"use client"
import Input from "@/shared/components/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { addressValidationSchema } from "../validations/address.validation"

export const AddressForm = () => {
    const { register, } = useForm({
        resolver: zodResolver(addressValidationSchema),
        defaultValues: {
            address: "456 Food Ave",
            city: "CityVille",
            state: "CA",
            zip: "123"
        }
    })

    return (
        <form className="border-b border-gray-300">
            <h3 className="font-semibold text-sm my-3 text-gray-700">Address</h3>
            <Input type="text" className="w-full" {...register("address")} label="Street Address" required />
            <Input type="text" className="w-full" {...register("city")} label="City" required />
            <Input type="text" className="w-full" {...register("state")} label="State" required />
            <Input type="text" className="w-full" {...register("zip")} label="Zip/Postal Code" required />
        </form>
    )
}
