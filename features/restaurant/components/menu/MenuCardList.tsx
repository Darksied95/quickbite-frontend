"use client"

import { initialMenuItems } from '@/shared/lib/mock-data'
import { MenuCard } from './MenuCard'
import { MenuItemFormDialog } from './MenuForm'
import { MenuItemForm } from '../../restaurant.types'
import { useState } from 'react'
import { DeleteMenuDialog } from './DeleteMenuDialog'

export const MenuCardList = () => {
    const [editingItem, setEditingItem] = useState<MenuItemForm | null>(null)
    const [deletingItem, setDeletingItem] = useState<string | null>(null)
    return (
        <>
            <MenuItemFormDialog
                isOpen={!!editingItem}
                onClose={() => setEditingItem(null)}
                item={editingItem}
            />

            <DeleteMenuDialog isOpen={!!deletingItem} onClose={() => setDeletingItem(null)} itemName={deletingItem} />

            <ul className=' space-y-6 py-5 grid grid-cols-(--grid-cols-auto-fit-400) gap-x-5'>
                {
                    initialMenuItems.map((item) => (
                        <MenuCard
                            key={item.id}
                            onEdit={() => setEditingItem(item)}
                            onDelete={() => setDeletingItem(item.name)}
                            {...item}
                        />
                    ))
                }
            </ul>
        </>
    )
}
