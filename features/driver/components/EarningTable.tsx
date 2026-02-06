import { StatusTag } from "@/features/restaurant/components/StatusTag"
import { Action } from "@/shared/components/Action"

const data = [
    {
        id: "PAY- 123",
        date: "2023-01-01",
        amount: "$352.42",
        status: "Completed"
    },
    {
        id: "PAY- 121",
        date: "2023-01-01",
        amount: "$352.42",
        status: "Completed"
    },
    {
        id: "PAY- 122",
        date: "2023-02-01",
        amount: "$352.42",
        status: "Completed"
    }
]
export const EarningTable = () => {
    return (
        <section className="bg-white grid grid-cols-[1fr_auto] p-12">
            <h3 className="font-medium text-lg mb-3 ">Payment  History</h3>
            <Action as="button" variant="primary" className="w-auto" size="sm">View All</Action>

            <div className="col-span-2 overflow-x-auto mt-5">
                <table className="[&_td]:p-4 [&_td]:text-left [&_th]:px-4 [&_th]:text-left [&_th]:py-1 md:[&_th]:py-4 w-full">
                    <thead>
                        <tr className="text-gray-400 text-xs bg-gray-50 uppercase">
                            <th>Payment ID</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap text-green-600 font-medium text-sm">{item.id}</td>
                                        <td className="whitespace-nowrap text-gray-500 text-sm">{item.date}</td>
                                        <td>{item.amount}</td>
                                        <td><StatusTag status="delivered" /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}