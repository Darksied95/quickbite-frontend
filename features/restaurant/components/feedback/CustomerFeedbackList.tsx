import { CustomerFeedback } from "./CustomerFeedback"
import { Stars } from "@/shared/components/Stars"
import { Action } from "@/shared/components/Action"

export const CustomerFeedbackList = ({ onClose }: { onClose: () => void }) => {
    const feedbacks = [
        {
            customerName: "Alex Thompson",
            createdAt: "2023-05-15",
            rating: 5,
            review: "Food was amazing! Best burgers in town",
        },
        {
            customerName: "Rajah Efe",
            createdAt: "2023-05-15",
            rating: 5,
            review: "Food was amazing! Best burgers in town",
        },
        {
            customerName: "Aliyu Efe",
            createdAt: "2023-05-14",
            rating: 4,
            review: "Great food but delivery was a bit late.",
        }
    ]
    return (
        <div className="px-5 pb-5">
            <div className="grid grid-cols-[auto_1fr] grid-rows-2  gap-x-2">
                <p className="text-brand-primary font-semibold text-4xl row-span-2">4.7</p>
                <Stars num={4.7} />
                <p className="text-gray-500 text-sm">Based on 248 reviews</p>
            </div>

            <h3 className="font-semibold text-sm my-5">Recent Reviews</h3>
            <div className="space-y-5">
                {
                    feedbacks.map((feedback) => <CustomerFeedback key={feedback.customerName} {...feedback} />)
                }
            </div>

            <Action as="button" size="sm" variant="secondary" className="block ml-auto" onClick={onClose}> Close</Action>

        </div>
    )
}
