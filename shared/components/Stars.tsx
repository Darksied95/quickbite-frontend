import { cn } from "../lib/utils"

export const Stars = ({ num, size = 'lg', className }: { num: number, size?: 'sm' | 'lg', className?: string }) => {
    const maxStar = 5
    return (
        <div className={cn("flex", className)}>
            {
                Array.from({ length: maxStar }, (_, i) => <svg
                    key={i}
                    className={cn("text-gray-300", {
                        "text-yellow-400": i < num,
                        "w-5 h-5": size === "lg",
                        "w-3.5 h-3.5": size === "sm",
                    })}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 15.585l-5.994 3.178 1.146-6.69L.34 7.344l6.685-.973L10 .342l2.975 6.029 6.685.973-4.812 4.729 1.146 6.69L10 15.585z"
                        clipRule="evenodd"
                    />
                </svg>
                )
            }

        </div>
    )
}
