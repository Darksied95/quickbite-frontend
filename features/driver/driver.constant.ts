import { LinkProps } from "@/shared/components/Navigations"
import { IconKeys } from "@/shared/lib/iconMapper"
import { Bell, Truck, User, Lock } from "lucide-react"

export const deliveryNotifications = {
    heading: "Delivery Notifications",
    lists: [
        {
            title: "New Delivery Requests",
            description: "Get notified when new delivery requests are available.",
        },
        {
            title: "Delivery Updates",
            description: "Get notified about changes to your active deliveries.",
        },
        {
            title: "Delivery Reminders",
            description: "Get reminders about upcomin scheduled deliveries"
        }
    ]
}

export const earningsNotifications = {
    heading: "Earnings Notifications",
    lists: [
        {
            title: "Earnings Updates",
            description: "Get notified about changes to your earnings."
        },
        {
            title: "Earnings Reminders",
            description: "Get reminders about upcomin scheduled earnings."
        }
    ]
}

export const SETTINGLINKS: Array<LinkProps> = [
    {
        name: 'Personal Information',
        href: '/driver/settings/profile',
        Icon: "user"
    },
    {
        name: "Vehicle Details",
        href: '/driver/settings/vehicle',
        Icon: "truck"
    },
    {
        name: "Notifications",
        href: '/driver/settings/notifications',
        Icon: "bell"
    },
    {
        name: "Security",
        href: '/driver/settings/security',
        Icon: "lock"
    }

]

export const sideMenuLinks: Array<{ name: string, href: string, icon: IconKeys }> = [
    {
        name: "Dashboard",
        href: "/driver",
        icon: "home",
    },
    {
        name: "My Deliveries",
        href: "/driver/deliveries",
        icon: "truck",
    },

    {
        name: "Earnings",
        href: "/driver/earnings",
        icon: "chart-line",
    },
    {
        name: "Settings",
        href: "/restaurant/settings",
        icon: "settings",
    },
]