import { Action } from '@/shared/components/Action'
import Input from '@/shared/components/Input'
import { ArrowLeftIcon, Home, Lock, Mail, MapPin, Phone, User } from 'lucide-react'
import Link from 'next/link'

export const RegisterCustomerForm = () => {
    return (
        <div className='bg-white px-7 py-10 rounded-xl mt-8 mb-8'>
            <Link className='flex gap-2' href='/register'>
                <ArrowLeftIcon className='text-gray-500' size={20} />
                <p className='text-gray-500'>Change role</p>
            </Link>
            <form className=' mt-5'>

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
                    <Input Icon={Home} label='Address Label' id="addressLabel" parentClassName='md:col-span-3' required />

                    <Input label='Street Address' id="streetAddress" placeholder='123 Main St' parentClassName='md:col-span-3' required />
                    <Input label='Apartment, Suite, Unit' id="apartment" placeholder='Apt. #123' parentClassName='md:col-span-3' />
                    <Input label='City' id="city" placeholder='Uyo' required />
                    <Input label='State' id="state" placeholder='Akwa Ibom' required />
                    <Input label='Zip Code' id="zipCode" placeholder='123456' required />
                </fieldset>

                <div className='mb-5'>
                    <Action as="button" className='text-white w-full text-base mb-4' variant='secondary' type='submit'>
                        Create Account
                    </Action>

                    <p className='text-center text-gray-500 text-sm'>Already have an account? <Link href="/login" className='text-brand-primary'>Sign In</Link></p>
                </div>
            </form>
        </div>
    )
}