import { IconName } from "./components/SideMenu"

export type SideMenuLink = {
    name: string
    href: string
    icon: IconName
}


export type ValidStatus = "received" | "preparing" | "ready for pickup" | "out for delivery" | "cancelled" | "delivered"