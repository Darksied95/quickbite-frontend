import { ValidStatus } from "@/shared/types"
import { TableRow } from "./TableRow"

type Props = {
    orderItems: Array<{
        orderId: string
        customerName: string
        orderItems: string[],
        status: ValidStatus,
        createdAt: string
    }>
}

export const TableBody: React.FC<Props> = ({ orderItems }) => {

    return (
        <tbody>
            {
                orderItems.map((item) => <TableRow key={item.orderId} {...item} />)
            }
        </tbody>
    )
}
