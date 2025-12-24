"use client"
import { useForm } from "react-hook-form"

type Inputs = {
    email: string
    password: string
}
const page = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    return (
        <section>
            <h1>Sign in to QuickBite</h1>

            <form>
                <input {...register("email")} type="email" placeholder="Email" />
                <input {...register("password")} type="password" placeholder="Password" />
                <button type="submit">Sign in</button>
            </form>
        </section>
    )
}

export default page