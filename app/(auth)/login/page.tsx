import { LoginForm } from "@/features/auth/components/LoginForm"
import { Logo } from "@/shared/components/Logo"

const page = () => {

    return (
        <div className=" min-h-screen py-px px-4 flex flex-col  justify-center">
            <div className=" flex flex-col items-center justify-center mt-14 mb-5">
                <Logo size="lg" className="mb-4" />
                <h1 className="text-3xl font-bold mb-3">Sign in to your account</h1>
            </div>
            <LoginForm />
        </div>
    )
}

export default page