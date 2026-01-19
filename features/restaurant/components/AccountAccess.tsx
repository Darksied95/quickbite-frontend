import React from 'react'

export const AccountAccess = () => {
    return (
        <div className='border-b pb-10'>
            <h3 className="text-sm font-medium my-3">Account Access</h3>
            <p className='text-gray-600 font-medium'>Account Email</p>
            <p>Owner@quickbite.com</p>
            <p className='text-xs text-gray-500'>This is the email address used to log in to your account.</p>
            <button className="mt-5 block w-full md:w-auto py-2 rounded-md border border-gray-300">Update Email</button>
        </div>
    )
}
