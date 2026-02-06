import { LinkProps } from "@/shared/components/Navigations"
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