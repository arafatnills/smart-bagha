"use client";

import {
  ArrowRight,
  Eye,
  EyeOff,
  HeartPulse,
  LockKeyhole,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { HandelGoogleLogin, HandelLogin } from "../_actions/handelAuth";
const loginUserZodSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6, "Password Must Minimum 6 Characters Long.")
    .regex(/[a-z]/, "Password must contain atleast 1 Lowercase Letter")
    .regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter")

    .regex(/[0-9]/, "Password must contain atleast 1 Number")
    .regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 Special Character"),
});

type LoginFormValues = z.infer<typeof loginUserZodSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginUserZodSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: LoginFormValues) => {
    const payload = {
      email: data.email.trim().toLowerCase(),
      password: data.password.trim(),
    };

    try {
      setIsLoading(true);

      const result = await HandelLogin(payload);
      if (result.success) {
        toast.success(result.message);
        router.push("/");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: {
    credential?: string;
  }) => {
    const idToken = credentialResponse.credential;

    if (!idToken) {
      toast.error("Google authentication failed. Please try again.");
      return;
    }

    try {
      setIsLoading(true);

      const result = await HandelGoogleLogin(idToken);

      if (result.success) {
        toast.success(result.message);
        router.push("/");
        router.refresh();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Google login failed:", error);
      toast.error("Google login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full rounded-2xl border shadow-xl shadow-muted/20">
      <CardHeader className="space-y-4 pb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950">
          <HeartPulse className="h-6 w-6" />
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Welcome back
          </CardTitle>

          <CardDescription className="leading-6">
            Sign in to your account and be a part of saving lives.
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="h-11 pl-10"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500">
                {errors.email.message as string}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <Label htmlFor="password">Password</Label>

              <Button
                asChild
                type="button"
                variant="link"
                className="h-auto p-0 text-xs text-red-600 dark:text-red-400"
              >
                <Link href="/auth/forgot-password">Forgot password?</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LockKeyhole className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="h-11 pl-10 pr-11"
                {...register("password")}
              />

              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Login button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="h-11 w-full bg-red-600 text-white hover:bg-red-700"
          >
            {isLoading ? "Signing in..." : "Sign in"}
            {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>

       
        <div className="space-y-5 mt-5">
          <div className="relative flex items-center">
            <Separator />
            <span className="absolute left-1/2 -translate-x-1/2 bg-card px-3 text-xs text-muted-foreground">
              OR CONTINUE WITH
            </span>
          </div>

          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              toast.error("Google sign-in was unsuccessful.");
            }}
            useOneTap={false}
            theme="outline"
            ux_mode="popup"
            size="large"
            shape="rectangular"
            text="continue_with"
            width="350"
          />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <div className="flex w-full items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">
            NEW TO OUR COMMUNITY?
          </span>
          <Separator className="flex-1" />
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Button
            asChild
            variant="link"
            className="h-auto p-0 font-semibold text-red-600 dark:text-red-400"
          >
            <Link href="/auth/register">Create account</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}
