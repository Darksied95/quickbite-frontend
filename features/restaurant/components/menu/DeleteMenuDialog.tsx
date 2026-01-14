import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

type Props = {
    isOpen: boolean
    onClose: () => void
    itemName: string | null
}
export const DeleteMenuDialog = ({ isOpen, onClose, itemName }: Props) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent showCloseButton={false} className='p-0'>
                <div className='px-4 py-4 space-y-4'>
                    <div className="p-3 rounded-full bg-red-100 w-fit mx-auto" >
                        <XIcon aria-hidden="true" className='text-red-700' />
                    </div>
                    <DialogTitle className='text-lg text-center font-medium '>Delete Menu Item</DialogTitle>
                    <p className='text-gray-500 text-sm  text-center'>Are you sure you want to delete "{itemName}"? This action cannot be undone.</p>
                    <button className='w-full bg-red-600 text-white py-2 rounded-md font-medium' onClick={onClose}>Delete</button>
                    <button className='w-full border border-gray-300 py-2 rounded-md font-medium' onClick={onClose}>Cancel</button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
