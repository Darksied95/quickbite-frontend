import { Action } from '@/shared/components/Action'
import Input from '@/shared/components/Input'
import { ArrowLeftIcon, Home, Lock, Mail, MapPin, Phone, User, Utensils } from 'lucide-react'
import Link from 'next/link'

export const RegisterRestaurantWithOwnerForm = () => {
    return (
        <div className='bg-white px-7 py-10 rounded-xl mt-8'>
            <Link className='flex gap-2' href="/register">
                <ArrowLeftIcon className='text-gray-500' size={20} />
                <p className='text-gray-500'>Change role</p>
            </Link>
            <form className=' mt-5 '>

                {/* Personal Information */}

                <fieldset className='mb-4 grid md:grid-cols-2 md:gap-4'>
                    <legend className='flex items-start  gap-x-2 mb-4'>
                        <User className='text-brand-primary' size={20} />
                        <h2 className='font-semibold'>Personal  Information</h2>
                    </legend>

                    <Input Icon={User} label='First Name' id="firstName" required />
                    <Input Icon={User} label='Last Name' id="lastName" required />
                    <Input Icon={Mail} label='Email' id="email" required />
                    <Input Icon={Phone} label='Phone' id="phone" placeholder='(234) 701 2345 679' required />
                </fieldset>

                {/* Password  */}
                <fieldset className='mb-4 grid md:grid-cols-2 md:gap-4'>
                    <legend className='flex items-start  gap-x-2 mb-4'>
                        <Lock className='text-brand-primary' size={20} />
                        <h2 className='font-bold'>Security</h2>
                    </legend>
                    <Input Icon={Lock} label='Password' id="password" helperText='At least 8 characters' required />
                    <Input Icon={Lock} label='Confirm Password' id="confirmPassword" required />
                </fieldset>

                {/* Address  */}
                <fieldset className='mb-4 grid md:grid-cols-3 md:gap-4'>
                    <legend className='flex items-start  gap-x-2 mb-4'>
                        <MapPin className='text-brand-primary' size={20} />
                        <h2 className='font-bold'>Address</h2>
                    </legend>
                    <Input Icon={Home} label='Address Label' id="addressLabel" parentClassName='col-span-3' required />

                    <Input label='Street Address' id="streetAddress" placeholder='123 Main St' parentClassName='col-span-3' required />
                    <Input label='City' id="city" placeholder='Uyo' required />
                    <Input label='State' id="state" placeholder='Akwa Ibom' required />
                    <Input label='Zip Code' id="zipCode" placeholder='123456' required />


                </fieldset>

                {/* Restaurant Information  */}
                <fieldset className='mb-4 grid md:grid-cols-2 md:gap-4'>
                    <legend className='flex items-start  gap-x-2 mb-4'>
                        <Utensils className='text-brand-primary' size={20} />
                        <h2 className='font-bold'>Restaurant Information</h2>
                    </legend>

                    <Input label='Restaurant Name' id="restaurantName" placeholder='Your Restaurant Name' parentClassName='col-span-2' required />

                    <Input label='Restaurant Address' id="restaurantAddress" placeholder='123 Main St' parentClassName='col-span-2' required />
                    <Input label='City' id="city" placeholder='Uyo' required />
                    <Input label='State' id="state" placeholder='Akwa Ibom' required />
                    <Input Icon={Phone} label='Restaurant Phone' id="restaurantPhone" placeholder='(234) 701 2345 679' required />
                    <Input Icon={Mail} label='Restaurant Email' id="restaurantEmail" placeholder='youremail@restaurant.com' required />

                    <div className='col-span-2'>
                        <label className='text-sm font-medium'>Restaurant Description <span className='text-gray-500 text-xs'> (optional)</span></label>

                        <textarea className='w-full h-24 border border-gray-300 rounded-lg p-2' placeholder='Tell customers about your restaurant,cuisine, and specialties.'></textarea>
                        <p className=' text-gray-500 text-xs'>This will be displayed on your restaurant page.</p>
                    </div>
                </fieldset>

                <div className='mb-5'>
                    <Action as="button" className='text-white w-full text-base mb-4' variant='secondary'>
                        Create Account
                    </Action>

                    <p className='text-center text-gray-500 text-sm'>Already have an account? <Link href="/login" className='text-brand-primary'>Sign In</Link></p>
                </div>
            </form>
        </div >
    )
}