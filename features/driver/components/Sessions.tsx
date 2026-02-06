import { Action } from "@/shared/components/Action"

const d = [
    {
        title: "Chrome on Windows",
        active: true,
        lastSeen: "now"
    },
    {
        title: "iPhone 13- Safari",
        active: false,
        lastSeen: "1 hour ago"
    },
]

export const Sessions = () => {
    return (
        <div className="border-b pb-10">
            <h3 className="text-sm font-medium my-3">Login Sessions</h3>
            <p className='text-gray-600 text-sm font-light mb-5'>Manage your account security and login preferences.</p>
            <ul className="pl-5 ">
                {
                    d.map((item) => {
                        return (
                            <li className="grid grid-cols-[1fr_auto] gap-x-3 mb-8" key={item.title}>
                                <label htmlFor={item.title} className="font-medium text-sm">{item.active && "Current Device - "}{item.title}</label>
                                <p className=" text-gray-700 text-sm font-light">Last active: {item.lastSeen}</p>
                                {
                                    item.active
                                        ? <p className=" py-1 px-2 w-fit rounded-xl text-xs font-medium capitalize text-green-700 bg-green-200 col-start-2 row-start-1">Active</p>
                                        : <Action as="button" type="submit" size="sm" className="w-auto px-3 col-start-2 row-start-1 row-span-2 font-normal text-xs">Sign Out</Action>
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <button className="mt-5 block w-full md:w-auto py-2 rounded-md bg-red-700 font-medium text-white px-3 text-xs">Sign Out From All Devices</button>
        </div >
    )
}