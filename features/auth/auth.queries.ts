import { useMutation } from "@tanstack/react-query";
import { authApi } from "./auth.api";
import { toast } from "react-toastify";

export const useRegister = () => useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
        toast.success("Account created successfully");
    },
})

export const useLogin = () => useMutation({
    mutationFn: authApi.login,
    onSuccess: () => {
        toast.success("Login Successful");
    },
})