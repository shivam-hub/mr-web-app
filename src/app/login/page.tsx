"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { buttonVariants } from "@/components/ui/button"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod";
import { userAuthSchema } from "@/lib/validations/auth";
import { useForm } from "react-hook-form"
import * as z from "zod"
import * as React from "react"
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> { }
type FormData = z.infer<typeof userAuthSchema>

function Login({ className }: LoginFormProps) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(userAuthSchema),
    })
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const router = useRouter();

    async function onLoginClicked(data: FormData) {

        setIsLoading(true);

        const response = await fetch('/api/auth/login', {
            method : 'POST',
            body: JSON.stringify(data)
        })

        const res = await response.json();

        setIsLoading(false);

        if (res && res.token) {
            router.replace('/user-workbench')
        }
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <Card className="w-80 mx-auto md:w-96 lg:w-104 max-h-96 p-8 bg-white rounded shadow-md">
                <CardHeader className="flex justify-center items-center">
                    <CardTitle className="font-bold text-2xl">Login</CardTitle>
                </CardHeader>
                <CardContent >
                    <form onSubmit={handleSubmit(onLoginClicked)}>
                        <Input type="text" placeholder="Username" disabled={isLoading} className="my-5" id="username" {...register("username")} />
                        {
                            errors?.username && (
                                <p className="px-1 text-xs text-red-600">{errors.username.message}</p>
                            )
                        }
                        <Input type="password" placeholder="Password" className="my-2" disabled={isLoading} id="password" {...register("password")} />
                        {
                            errors?.password && (
                                <p className="px-1 text-xs text-red-600"></p>
                            )
                        }
                        <div className="flex justify-center items-center mt-10">
                            <button type="submit" className={cn(buttonVariants())} disabled={isLoading}>Log in</button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login;