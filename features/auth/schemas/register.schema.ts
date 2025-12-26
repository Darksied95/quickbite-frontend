import { z } from "zod";

export const registerCustomerSchema = z.object({
    first_name: z.string().min(2).max(50),
    last_name: z.string().min(2).max(50),
    email: z.email().min(5).max(50),
    password: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
    phone: z.string().regex(/^(?:\+234|234|0)(70|80|81|90|91|71|81|91)\d{8}$/, {
        message: "Please enter a valid Nigerian phone number (e.g., 0803... or +234...)",
    }),
    role: z.enum(['customer', 'driver', 'restaurant_owner']),
    label: z.string().min(2).max(50),
    street_address: z.string().min(2).max(50),
    apartment_unit: z.string().min(2).max(50).optional(),
    city: z.string().min(2).max(50),
    state: z.string().min(2).max(50),
    postal_code: z.string().min(2).max(50),
    is_default: z.boolean(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export const registerDriverSchema = registerCustomerSchema.safeExtend({
    vehicle_type: z.enum(['car', 'motorbike', 'bicycle']),
})

export const registerRestaurantOwnerSchema = registerCustomerSchema.safeExtend({
    restaurant: z.object({
        name: z.string().min(2).max(50),
        description: z.string().min(2).max(50),
        phone: z.string().regex(/^(?:\+234|234|0)(70|80|81|90|91|71|81|91)\d{8}$/, {
            message: "Please enter a valid Nigerian phone number (e.g., 0803... or +234...)",
        }),
        email: z.string().min(5).max(50),
        address: z.object({
            label: z.string().min(2).max(50),
            street_address: z.string().min(2).max(50),
            city: z.string().min(2).max(50),
            state: z.string().min(2).max(50),
            postal_code: z.string().min(2).max(50),

        }),
    })
})


export type RegisterCustomerSchema = z.infer<typeof registerCustomerSchema>
export type RegisterDriverSchema = z.infer<typeof registerDriverSchema>
export type RegisterRestaurantOwnerSchema = z.infer<typeof registerRestaurantOwnerSchema>