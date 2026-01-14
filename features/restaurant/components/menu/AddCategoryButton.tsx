"use client"

import { cn } from '@/shared/lib/utils'
import { AddCategoryFormDialog } from './AddCategoryForm'
import { useState } from 'react';

export const AddCategoryButton = () => {
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    return (
        <>
            <button
                className={cn("inline-block text-gray-500 font-medium text-sm pb-4 px-2 cursor-pointer")}
                onClick={() => setIsAddingCategory(true)}
            >
                + Add Category
            </button>

            <AddCategoryFormDialog isOpen={isAddingCategory} onClose={() => setIsAddingCategory(false)} />
        </>
    )
}
