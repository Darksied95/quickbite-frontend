"use client"

import { Action } from '@/shared/components/Action'
import Input from '@/shared/components/Input'
import { ArrowLeftIcon, Home, Lock, Mail, MapPin, Phone, User } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerCustomerSchema, RegisterCustomerSchema } from '@/features/auth/schemas/register.schema'
import { useRegister } from '../auth.queries'

export const RegisterCustomerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterCustomerSchema>({
        resolver: zodResolver(registerCustomerSchema),
        mode: 'onBlur',
        defaultValues: {
            role: "customer",
            is_default: true
        }
    })

    const { mutate: registerCustomer, isPending } = useRegister();

    const onSubmit = async (data: RegisterCustomerSchema) => {
        registerCustomer(data);
    }

    return (
        <div className='bg-white px-7 py-10 rounded-xl mt-8 mb-8'>
            <Link className='flex gap-2' href='/register'>
                <ArrowLeftIcon className='text-gray-500' size={20} />
                <p className='text-gray-500'>Change role</p>
            </Link>

            <form className=' mt-5' onSubmit={handleSubmit(onSubmit)}>

                {/* Personal Information */}

                <fieldset className='mb-4 grid md:grid-cols-2 md:gap-4'>
                    <legend className='flex items-start  gap-x-2 mb-4'>
                        <User className='text-brand-primary' size={20} />
                        <h2 className='font-semibold'>Personal  Information</h2>
                    </legend>

                    <Input Icon={User} label='First Name' id="firstName" required {...register('first_name')} error={errors.first_name?.message} />
                    <Input Icon={User} label='Last Name' id="lastName" required {...register('last_name')} error={errors.last_name?.message} />
                    <Input Icon={Mail} label='Email' id="email" required {...register('email')} error={errors.email?.message} />
                    <Input Icon={Phone} label='Phone' id="phone" placeholder='(234) 701 2345 679' required {...register('phone')} error={errors.phone?.message} />
                </fieldset>

                {/* Password  */}
                <fieldset className='mb-4 grid md:grid-cols-2 md:gap-4'>
                    <legend className='flex items-start  gap-x-2 mb-4'>
                        <Lock className='text-brand-primary' size={20} />
                        <h2 className='font-bold'>Security</h2>
                    </legend>
                    <Input Icon={Lock} label='Password' id="password" type='password' helperText='At least 8 characters' required  {...register('password')} error={errors.password?.message} />
                    <Input Icon={Lock} label='Confirm Password' id="confirmPassword" type="password" required {...register('confirmPassword')} error={errors.confirmPassword?.message} />
                </fieldset>

                {/* Address  */}
                <fieldset className='mb-4 grid md:grid-cols-3 md:gap-4'>
                    <legend className='flex items-start  gap-x-2 mb-4'>
                        <MapPin className='text-brand-primary' size={20} />
                        <h2 className='font-bold'>Address</h2>
                    </legend>
                    <Input Icon={Home} label='Address Label' id="addressLabel" parentClassName='md:col-span-3' required  {...register('label')} />

                    <Input label='Street Address' id="streetAddress" placeholder='123 Main St' parentClassName='md:col-span-3' required  {...register('street_address')} error={errors.street_address?.message} />
                    <Input label='Apartment, Suite, Unit' id="apartment" placeholder='Apt. #123' parentClassName='md:col-span-3' {...register('apartment_unit')} error={errors.apartment_unit?.message} />
                    <Input label='City' id="city" placeholder='Uyo' required  {...register('city')} error={errors.city?.message} />
                    <Input label='State' id="state" placeholder='Akwa Ibom' required  {...register('state')} error={errors.state?.message} />
                    <Input label='Zip Code' id="zipCode" placeholder='123456' required  {...register('postal_code')} error={errors.postal_code?.message} />
                </fieldset>

                <div className='mb-5'>
                    <Action
                        as="button"
                        className='text-white w-full text-base mb-4'
                        variant='secondary'
                        type='submit'
                        loading={isPending}
                    >
                        Create Account
                    </Action>
                    <p className='text-center text-gray-500 text-sm'>Already have an account? <Link href="/login" className='text-brand-primary'>Sign In</Link></p>
                </div>
            </form>
        </div>
    )
}