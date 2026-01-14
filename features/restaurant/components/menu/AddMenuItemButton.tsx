"use client"

import React, { useState } from 'react'
import { MenuItemFormDialog } from './MenuForm'

export const AddMenuItemButton = () => {
    const [isAddingItem, setIsAddingItem] = useState(false);
    return (
        <>
            <button
                className="w-full bg-brand-primary text-white py-2 px-4 rounded-md font-medium hover:bg-green-800 cursor-pointer md:w-fit"
                onClick={() => setIsAddingItem(true)}
            >
                + Add Item
            </button>

            <MenuItemFormDialog isOpen={isAddingItem} onClose={() => setIsAddingItem(false)} />
        </>
    )
}
