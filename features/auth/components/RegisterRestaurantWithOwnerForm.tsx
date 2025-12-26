"use client"
import { Action } from '@/shared/components/Action'
import Input from '@/shared/components/Input'
import { ArrowLeftIcon, Home, Lock, Mail, MapPin, Phone, User, Utensils } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { registerRestaurantOwnerSchema, RegisterRestaurantOwnerSchema } from '../schemas/register.schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const RegisterRestaurantWithOwnerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterRestaurantOwnerSchema>({
        resolver: zodResolver(registerRestaurantOwnerSchema),
        mode: 'onBlur',
        defaultValues: {
            role: "restaurant_owner",
            is_default: true,
        }
    })

    const onSubmit = (data: RegisterRestaurantOwnerSchema) => {
        console.log("start");

        console.log(data)
    }

    return (
        <div className='bg-white px-7 py-10 rounded-xl mt-8'>
            <Link className='flex gap-2' href="/register">
                <ArrowLeftIcon className='text-gray-500' size={20} />
                <p className='text-gray-500'>Change role</p>
            </Link>
            <form className=' mt-5 ' onSubmit={handleSubmit(onSubmit)}>

                {/* Personal Information */}

                <fieldset className='mb-4 grid md:grid-cols-2 md:gap-4'>
                    <legend className='flex items-start  gap-x-2 mb-4'>
                        <User className='text-brand-primary' size={20} />
                        <h2 className='font-semibold'>Personal  Information</h2>
                    </legend>

                    <Input Icon={User} label='First Name' id="firstName" required  {...register('first_name')} error={errors.first_name?.message} />
                    <Input Icon={User} label='Last Name' id="lastName" required  {...register('last_name')} error={errors.last_name?.message} />
                    <Input Icon={Mail} label='Email' id="email" required  {...register('email')} error={errors.email?.message} />
                    <Input Icon={Phone} label='Phone' id="phone" placeholder='(234) 701 2345 679' required  {...register('phone')} error={errors.phone?.message} />
                </fieldset>

                {/* Password  */}
                <fieldset className='mb-4 grid md:grid-cols-2 md:gap-4'>
                    <legend className='flex items-start  gap-x-2 mb-4'>
                        <Lock className='text-brand-primary' size={20} />
                        <h2 className='font-bold'>Security</h2>
                    </legend>
                    <Input Icon={Lock} label='Password' id="password" type='password' helperText='At least 8 characters' required  {...register('password')} error={errors.password?.message} />
                    <Input Icon={Lock} label='Confirm Password' type='password' id="confirmPassword" required  {...register('confirmPassword')} error={errors.confirmPassword?.message} />
                </fieldset>

                {/* Address  */}
                <fieldset className='mb-4 grid md:grid-cols-3 md:gap-4'>
                    <legend className='flex items-start  gap-x-2 mb-4'>
                        <MapPin className='text-brand-primary' size={20} />
                        <h2 className='font-bold'>Address</h2>
                    </legend>
                    <Input Icon={Home} label='Address Label' id="addressLabel" parentClassName='col-span-3' required  {...register('label')} error={errors.label?.message} />

                    <Input label='Street Address' id="streetAddress" placeholder='123 Main St' parentClassName='col-span-3' required  {...register('street_address')} error={errors.street_address?.message} />
                    <Input label='City' id="city" placeholder='Uyo' required  {...register('city')} error={errors.city?.message} />
                    <Input label='State' id="state" placeholder='Akwa Ibom' required  {...register('state')} error={errors.state?.message} />
                    <Input label='Zip Code' id="zipCode" placeholder='123456' required  {...register('postal_code')} error={errors.postal_code?.message} />


                </fieldset>

                {/* Restaurant Information  */}

                <fieldset className='mb-4 grid md:grid-cols-2 md:gap-4'>
                    <legend className='flex items-start  gap-x-2 mb-4'>
                        <Utensils className='text-brand-primary' size={20} />
                        <h2 className='font-bold'>Restaurant Information</h2>
                    </legend>

                    <Input label='Restaurant Name' id="restaurantName" placeholder='Your Restaurant Name' parentClassName='col-span-2' required  {...register('restaurant.address.label')} error={errors.restaurant?.address?.label?.message} />

                    <Input label='Restaurant Address' id="restaurantAddress" placeholder='123 Main St' parentClassName='col-span-2' required  {...register('restaurant.address.street_address')} error={errors.restaurant?.address?.street_address?.message} />
                    <Input label='City' id="restaurant-city" placeholder='Uyo' required  {...register('restaurant.address.city')} error={errors.restaurant?.address?.city?.message} />
                    <Input label='State' id="restaurant-state" placeholder='Akwa Ibom' required  {...register('restaurant.address.state')} error={errors.restaurant?.address?.state?.message} />
                    <Input label='Zip Code' id="restaurant-zipCode" placeholder='123456' required  {...register('restaurant.address.postal_code')} error={errors.restaurant?.address?.postal_code?.message} />
                    <Input Icon={Phone} label='Restaurant Phone' id="restaurantPhone" placeholder='(234) 701 2345 679' required  {...register('restaurant.phone')} error={errors.restaurant?.phone?.message} />
                    <Input Icon={Mail} label='Restaurant Email' id="restaurantEmail" placeholder='youremail@restaurant.com' required  {...register('restaurant.email')} error={errors.restaurant?.email?.message} />

                    <div className='col-span-2'>
                        <label className='text-sm font-medium'>Restaurant Description <span className='text-gray-500 text-xs'> (optional)</span></label>

                        <textarea
                            className='w-full h-24 border border-gray-300 rounded-lg p-2'
                            placeholder='Tell customers about your restaurant,cuisine, and specialties.'
                            {...register('restaurant.description')}
                        ></textarea>
                        <p className=' text-gray-500 text-xs'>This will be displayed on your restaurant page.</p>
                    </div>
                </fieldset>

                <div className='mb-5'>
                    <Action as="button" className='text-white w-full text-base mb-4' variant='secondary' type='submit'>
                        Create Account
                    </Action>

                    <p className='text-center text-gray-500 text-sm'>Already have an account? <Link href="/login" className='text-brand-primary'>Sign In</Link></p>
                </div>
            </form>
        </div >
    )
}