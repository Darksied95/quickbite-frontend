import { Action } from '@/shared/components/Action'
import Input from '@/shared/components/Input'
import { Dialog, DialogContent, DialogTitle } from '@/shared/components/ui/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { XIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { menuValidationSchema } from '../../validations/menu.validation'
import { MenuItemForm } from '../../restaurant.types'

interface FormData {
    onClose: () => void
    item?: MenuItemForm | null
}

export const MenuItemFrom: React.FC<FormData> = ({ onClose, item }) => {
    const arr = ["Burgers", "Sides", "Drinks", "Desert"]

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(menuValidationSchema),
        defaultValues: item ?? {
            name: '',
            description: '',
            price: 0,
            image: '',
            category: '',
            available: true,
            popular: false,
        }
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form className='px-6 pb-8' onSubmit={handleSubmit(onSubmit)}>
            <Input label="Name" placeholder="Name" required  {...register('name')} error={errors.name?.message} />
            <Input label="Description" placeholder="Description" required  {...register('description')} error={errors.description?.message} />
            <Input label="Price" placeholder="Price" required type='number' {...register('price')} error={errors.price?.message} />
            <Input label="Image URL" placeholder="Image" required  {...register('image')} error={errors.image?.message} />
            <div>
                <label className="text-sm font-medium" htmlFor="category">Category</label>
                <select
                    className='w-full bg-gray-200 rounded-md p-2.5 border border-gray-300'
                    {...register('category')}
                >
                    {arr.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div className='my-2 mt-4 flex items-end'>
                <input type="checkbox" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ml-2 text-sm  text-gray-900 dark:text-gray-300">Available</label>
            </div>
            <div className='my-2 flex items-end'>
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ml-2 text-sm  text-gray-900 dark:text-gray-300">Mark as Popular</label>
            </div>

            <Action as='button' onClick={() => { }} className='w-full my-4 h-0 py-5' variant='secondary'>
                Save
            </Action>
            <Action as='button' onClick={onClose} className='w-full h-0 py-5'>
                Cancel
            </Action>
        </form>
    )
}

interface DialogProps {
    isOpen: boolean
    onClose: () => void
    item?: MenuItemForm | null
}
export const MenuItemFormDialog: React.FC<DialogProps> = ({ isOpen, onClose, item }) => {
    return <Dialog open={isOpen} onOpenChange={onClose} >
        <DialogContent showCloseButton={false} className='p-0'>
            <DialogTitle className='border-b border-gray-300 p-4 flex items-center justify-between'>
                {item ? "Edit Item" : "Add Item"}
                <button className='text-gray-500 cursor-pointer' onClick={onClose}>
                    <XIcon size={20} />
                </button>
            </DialogTitle>
            <MenuItemFrom onClose={onClose} item={item} />
        </DialogContent>
    </Dialog>
}