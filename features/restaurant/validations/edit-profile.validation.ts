import { z } from "zod"

export const editProfileValidationSchema = z.object({
    name: z.string().min(3).max(50).optional(),
    description: z.string().min(3).max(500).optional(),
    cuisineType: z.string().min(3).max(50).optional(),
    contactPhone: z.string().min(3).max(50).optional(),
    contactEmail: z.email().min(3).max(50).optional(),
    website: z.url().min(3).max(50).optional(),
})