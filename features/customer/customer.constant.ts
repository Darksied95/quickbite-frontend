import { IconKeys } from "@/shared/lib/iconMapper";

export const sideMenuLinks: Array<{ name: string, href: string, icon: IconKeys }> = [
    {
        name: "Dashboard",
        href: "/customer",
        icon: "home",
    },
    {
        name: "My Orders",
        href: "/customer/orders",
        icon: "shopping-cart",
    },
    {
        name: "Favourites",
        href: "/customer/favourites",
        icon: "layers",
    },
    {
        name: "Settings",
        href: "/customer/settings",
        icon: "settings",
    },
]