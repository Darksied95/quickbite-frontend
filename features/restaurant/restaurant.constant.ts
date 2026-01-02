import { IconName } from "@/shared/components/SideMenu";

export const sideMenuLinks: Array<{ name: string, href: string, icon: IconName }> = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: "home",
    },
    {
        name: "Orders",
        href: "/orders",
        icon: "shopping-cart",
    },
    {
        name: "Menu",
        href: "/menu",
        icon: "shopping-bag",
    },
    {
        name: "Settings",
        href: "/settings",
        icon: "settings",
    },
]