import { z } from "zod"

export const editProfileValidationSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.email(),
    phone: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code"),
})