import { z } from "zod"

export const addressValidationSchema = z.object({
    address: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
    zip: z.string().min(1)
})