import { cn } from "@/shared/lib/utils"
import Link from "next/link"

const d = ["All", "Fast Food", "Pizza", "Sushi", "Mexican", "Italian", "Healthy", "Dessert"]

export const CuisineSelector = ({ cuisine }: { cuisine: string }) => {
    const validCuisine = d.find(item => item === cuisine) || "All"
    return (
        <ul className="flex [&_li]:whitespace-nowrap overflow-x-auto space-x-3 py-3">
            {
                d.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={cn(
                                "py-2 px-3  hover:bg-gray-100 border border-gray-300 rounded-full font-medium",
                                {
                                    "text-white bg-green-700": item === validCuisine
                                }
                            )}
                        >
                            <Link href={`/customer?cuisine=${item}`}>
                                {item}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}