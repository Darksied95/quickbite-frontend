import { Dialog, DialogContent, DialogTitle } from "@/shared/components/ui/dialog"
import { OperatingHoursList } from "./OperatingHoursList"
import { XIcon } from "lucide-react"

export const OperatingHoursDialog = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent showCloseButton={false} className='p-0'>
                <DialogTitle className='border-b border-gray-300 p-4 flex items-center justify-between'>
                    Adjust Operating Hours
                    <button className='text-gray-500 cursor-pointer' onClick={onClose}>
                        <XIcon size={20} />
                    </button>
                </DialogTitle>
                <OperatingHoursList onClose={onClose} />
            </DialogContent>
        </Dialog>
    )
}
