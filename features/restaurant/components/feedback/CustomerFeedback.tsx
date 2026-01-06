import { Stars } from "@/shared/components/Stars"

type Props = {
    customerName: string
    createdAt: string
    rating: number
    review: string
}

export const CustomerFeedback: React.FC<Props> = ({ customerName, createdAt, rating, review }) => {
    return (
        <div className="grid grid-cols-[1fr_auto] gap-x-2 gap-y-1">
            <p className="font-medium text-sm">{customerName}</p>
            <p className="text-xs text-gray-500">{createdAt}</p>
            <Stars num={rating} size="sm" className="col-span-2" />
            <p className="text-sm text-gray-500">{review}</p>
        </div>
    )
}
