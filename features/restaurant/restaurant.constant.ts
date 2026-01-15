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