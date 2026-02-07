import { LinkProps } from "@/shared/components/Navigations";
import { IconKeys } from "@/shared/lib/iconMapper";

export const sideMenuLinks: Array<{ name: string, href: string, icon: IconKeys }> = [
    {
        name: "Dashboard",
        href: "/restaurant",
        icon: "home",
    },
    {
        name: "Orders",
        href: "/restaurant/orders",
        icon: "shopping-cart",
    },
    {
        name: "Menu",
        href: "/restaurant/menu",
        icon: "shopping-bag",
    },
    {
        name: "Settings",
        href: "/restaurant/settings",
        icon: "settings",
    },
]

export const SETTINGLINKS: Array<LinkProps> = [
    {
        name: 'Restaurant Profile',
        href: '/restaurant/settings/profile',
        Icon: "user"
    },
    {
        name: "Location  & Hours",
        href: '/restaurant/settings/location',
        Icon: "mapPin"
    },
    {
        name: "Notifications",
        href: '/restaurant/settings/notifications',
        Icon: "bell"
    },
    {
        name: "Security",
        href: '/restaurant/settings/security',
        Icon: "lock"
    }

]

export const OrderNotifications = {
    heading: "Order Notifications",
    lists: [
        {
            title: "New Orders",
            description: "Get notified when a new order is placed.",
        },
        {
            title: "Order Status Updates",
            description: "Get notified when an order status changes.",
        },
        {
            title: "Driver Assignments",
            description: "Get notified when a driver is assigned to an order.",
        }
    ]
}

export const BusinessNotifications = {
    heading: "Business Notifications",
    lists: [
        {
            title: "Daily Summary",
            description: "Receive a daily summary of your restaurant's performance.",
        },
        {
            title: "Customer Reviews",
            description: "Get notified when a customer leaves a review.",
        }
    ]
}