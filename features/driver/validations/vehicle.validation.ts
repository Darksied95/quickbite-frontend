import { z } from "zod"

export const vehicleValidationSchema = z.object({
    make: z.string(),
    model: z.string(),
    year: z.number(),
    color: z.string(),
    licensePlate: z.string(),
    type: z.enum(["car", "motorcycle", "bicycle"]),
})