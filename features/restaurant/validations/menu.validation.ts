import { z } from "zod"

export const menuValidationSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().max(50).nullable().optional(),
    price: z.number().min(1).max(1000),
    image: z.string().min(3).max(50),
    category: z.string().min(3).max(50),
    available: z.boolean(),
    popular: z.boolean(),
})