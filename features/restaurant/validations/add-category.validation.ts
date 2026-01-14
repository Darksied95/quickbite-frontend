import { z } from "zod";

export const addCategoryValidationSchema = z.object({
    name: z.string().min(3).max(50).trim(),
    description: z.string().min(3).max(50).trim().optional(),
})