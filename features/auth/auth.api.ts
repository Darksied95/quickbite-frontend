import { api } from "@/shared/api/client";
import { LoginCredentials } from "./auth.types";
import { RegisterCustomerSchema, RegisterDriverSchema, RegisterRestaurantOwnerSchema } from "./schemas/register.schema";

export const authApi = {
    login: (credentials: LoginCredentials) => api.post('/auth/login', credentials),
    register: (data: RegisterDriverSchema | RegisterCustomerSchema | RegisterRestaurantOwnerSchema) => {

        const { label, street_address, apartment_unit, city, state, postal_code, is_default, confirmPassword: _, ...rest } = data;
        const payload = {
            address: {
                label,
                street_address,
                apartment_unit,
                city,
                state,
                postal_code,
                is_default
            },
            ...rest,
        }
        return api.post('/auth/register', payload)
    },
}