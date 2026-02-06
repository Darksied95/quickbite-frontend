import { IconName } from "@/shared/components/SideMenu";

export const sideMenuLinks: Array<{ name: string, href: string, icon: IconName }> = [
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