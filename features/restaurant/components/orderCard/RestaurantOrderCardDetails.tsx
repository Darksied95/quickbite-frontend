import { Action } from "@/shared/components/Action"
import { cn } from "@/shared/lib/utils"
import { StatusTag } from "../StatusTag"
import { type ValidStatus } from "@/shared/types"
import { validStatuses } from "@/shared/constant"

export const RestaurantOrderCardDetails = ({ status, onClose }: { status: ValidStatus, onClose: () => void }) => {
    return (
        <div className="px-4 py-5 flex flex-col gap-3">
            <div >
                <p className="font-semibold text-gray-500 text-sm">Customer</p>
                <p className=" font-medium">Rajah Efe</p>
            </div>

            <div >
                <p className="font-medium text-gray-500 text-sm">Items</p>
                <p>Burger, Fries</p>
            </div>

            <div >
                <p className="font-medium text-gray-500 text-sm">Current Status</p>
                <StatusTag status={status} className="font-medium" />
            </div>

            <div>
                <p className="font-medium text-gray-500 text-sm">Update Status</p>
                <div role="group" aria-labelledby="order-status" className="grid grid-cols-2 gap-x-2 gap-y-2 mt-2">
                    {
                        validStatuses.map((s) => {
                            return (
                                <button key={s} className={cn("bg-gray-100 py-2 rounded-sm font-medium text-sm capitalize", {
                                    "text-green-700 bg-green-100 border border-green-400": s === status,
                                })} >{s}</button>
                            )
                        })
                    }
                </div>
            </div>
            <Action
                as="button"
                size="sm"
                variant="secondary"
                className="ml-auto mt-6"
                onClick={onClose}
            >
                Close
            </Action>
        </div>
    )
}
