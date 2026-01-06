import { Dialog, DialogContent, DialogTitle } from "@/shared/components/ui/dialog"
import { CustomerFeedbackList } from "./CustomerFeedbackList"
import { XIcon } from "lucide-react"

export const CustomerFeedbackDialog = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent showCloseButton={false} className='p-0'>
                <DialogTitle className='border-b border-gray-300 p-4 flex items-center justify-between'>
                    Customer Feedback
                    <button className='text-gray-500 cursor-pointer' onClick={onClose}>
                        <XIcon size={20} />
                    </button>
                </DialogTitle>
                <CustomerFeedbackList onClose={onClose} />
            </DialogContent>
        </Dialog>
    )
}
