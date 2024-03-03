"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { userAuthSchema } from "@/lib/validations/auth";
import { useForm } from "react-hook-form";
import * as z from "zod";
import * as React from "react";
import { cn, startRefreshInterval } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type FormData = z.infer<typeof userAuthSchema>;

function Login({ }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isUnAuthorized, setIsUnAuthorized] = React.useState<boolean>(false);
  const [isForbidden, setIsForbidden] = React.useState<boolean>(false);
  const router = useRouter();

  async function onLoginClicked(data: FormData) {
    setIsLoading(true);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setIsLoading(false);

    if (!response.ok) {
      if (response.status === 401) {
        setIsUnAuthorized(true);
        setIsForbidden(false);
        return;
      }
      if (response.status === 403) {
        setIsForbidden(true);
        setIsUnAuthorized(false);
        return;
      }
    }
    const res = await response.json();
    if (res && res.token) {
      startRefreshInterval(data);
      router.replace("/user-workbench");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center"
    style={{
      
      backgroundImage: "url('/images/greenbg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Card className="w-80 mx-auto md:w-96 lg:w-104 max-h-96 p-8 bg-white rounded shadow-md">
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="font-bold text-2xl"> <Image
                      src="/images/logo.png"
                      alt="Logo" 
                      width={150} 
                      height={280} 
                    /></CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onLoginClicked)}>
            <Input
              type="text"
              placeholder="Username"
              disabled={isLoading}
              className="my-5"
              id="username"
              {...register("username")}
            />
            {errors?.username && (
              <p className="px-1 text-xs text-red-600">
                {errors.username.message}
              </p>
            )}
            <Input
              type="password"
              placeholder="Password"
              className="my-2"
              disabled={isLoading}
              id="password"
              {...register("password")}
            />
            {errors?.password && <p className="px-1 text-xs text-red-600"></p>}
            <div className="flex justify-center items-center mt-10">
              <button
                type="submit"
                className={cn(buttonVariants())}
                disabled={isLoading}
              >
                Log in
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
      <div>
        {!isUnAuthorized && isForbidden && (
          <div className="fixed bottom-4 right-4">
            <Alert variant="destructive">
              <AlertTitle>Forbidden Access</AlertTitle>
              <AlertDescription>
                Your account don't have access to the website. Please contact your admin!
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>
      <div>
        {!isForbidden && isUnAuthorized && (
          <div className="fixed bottom-4 right-4">
            <Alert variant="destructive">
              <AlertTitle>Invalid Credentials</AlertTitle>
              <AlertDescription>
                Either username or password is incorrect
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
