"use client"
import { LogOut, MenuIcon, X } from "lucide-react"
import { Action } from "./Action"
import { Logo } from "./Logo"
import { SideMenu } from "./SideMenu"
import { sideMenuLinks } from "@/features/restaurant/restaurant.constant"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

export const TopMenu = ({ name }: { name: string }) => {
    return (
        <>
            <div className="bg-white flex items-center py-2 lg:py-4 px-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="lg:hidden mr-4" aria-label="Open menu">
                            <MenuIcon size={20} />
                        </button>
                    </SheetTrigger>

                    <SheetContent side="left" className="w-60 p-0">
                        <SheetHeader className="border-b border-gray-200 py-6 px-3">
                            <SheetTitle className="text-xl font-bold text-brand-primary text-left   ">
                                Menu
                            </SheetTitle>
                        </SheetHeader>
                        <SideMenu links={sideMenuLinks} className="mx-2" />
                    </SheetContent>
                </Sheet>

                <Logo />

                <div className="ml-auto flex items-center gap-4">
                    <span className="text-sm hidden lg:block">Welcome, {name}</span>
                    <Action as="button" size="sm" className="hidden lg:block">
                        Logout
                    </Action>
                    <Action
                        as="button"
                        size="sm"
                        className="lg:hidden border-0 text-gray-500"
                        aria-label="Logout"
                    >
                        <LogOut size={20} />
                    </Action>
                </div>
            </div>
        </>
    )
}