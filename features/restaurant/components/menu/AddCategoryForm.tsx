import Input from "@/shared/components/Input"
import { Dialog, DialogContent, DialogTitle } from "@/shared/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addCategoryValidationSchema } from "../../validations/add-category.validation";
import { cn } from "@/shared/lib/utils";

export const AddCategoryForm = ({ onClose }: { onClose: () => void }) => {

    const { register, handleSubmit, watch } = useForm({
        resolver: zodResolver(addCategoryValidationSchema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Category Name" placeholder="Category Name" required  {...register("name")} />
            <div>
                <label className="text-sm font-medium" htmlFor="category">Description (optional)</label>
                <textarea className='w-full rounded-md p-2.5 border border-gray-300 bg-white' placeholder="Description"  {...register("description")} />
            </div>
            <button
                className={cn('w-full bg-brand-primary text-white py-3 rounded-md font-medium my-3 hover:bg-green-700', !watch().name && "opacity-40 cursor-not-allowed ")}
                type="submit"
                disabled={!watch().name}
            >
                Save
            </button>
            <button
                className='w-full border border-gray-300 py-2 rounded-md font-medium cursor-pointer'
                onClick={onClose}
            >
                Cancel
            </button>
        </form>
    )
}

export const AddCategoryFormDialog = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent showCloseButton={false} className='p-0'>
                <div className='px-4 py-4 space-y-4'>
                    <DialogTitle className='text-lg text-center font-medium '>Add Category</DialogTitle>
                    <AddCategoryForm onClose={onClose} />
                </div>
            </DialogContent>
        </Dialog>
    )
}