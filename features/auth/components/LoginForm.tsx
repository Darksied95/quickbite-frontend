"use client"

import { Action } from '@/shared/components/Action'
import Input from '@/shared/components/Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginSchema } from '../schemas/login.schema'
import { useLogin } from '../auth.queries'

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: 'onBlur',
    })

    const { mutate: login, isPending } = useLogin();


    const onSubmit = (data: LoginSchema) => {
        login(data);
    }

    return (
        <div className=' rounded-xl w-full mb-8 border border-gray-200 p-7 max-w-120 mx-auto'>

            <form className=' mt-5' onSubmit={handleSubmit(onSubmit)}>

                <Input
                    label='Email address'
                    id="email"
                    required {...register('email')}
                    error={errors.email?.message}
                />

                <Input
                    label='Password'
                    id="password"
                    type='password'
                    required {...register('password')}
                    error={errors.password?.message}
                />

                <div className='mb-5'>
                    <Action
                        as="button"
                        className='text-white w-full text-sm mb-4'
                        variant='secondary'
                        type='submit'
                        size='sm'
                        loading={isPending}
                    >
                        Sign in
                    </Action>

                    <div className='flex items-center justify-center gap-3 my-6'>
                        <span className='flex-1 border-t border-gray-300' />
                        <p className='text-gray-500 text-sm'>Don't have an account</p>
                        <span className=' flex-1 border-t border-gray-300' />
                    </div>

                    <Action
                        as="link"
                        className=' w-full text-sm font-medium mb-4 '
                        variant='primary'
                        href="/register"
                        size='sm'
                    >
                        Create account
                    </Action>
                </div>
            </form>
        </div>
    )
}