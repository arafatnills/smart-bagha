"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleLogin } from "@react-oauth/google";
import {
  ArrowRight,
  Eye,
  EyeOff,
  HeartPulse,
  LockKeyhole,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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

import {
  HandelGoogleLogin,
  HandelLogin,
} from "../_actions/handelAuth";

const loginUserZodSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .regex(/[a-z]/, "Password must contain at least 1 lowercase letter.")
    .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter.")
    .regex(/[0-9]/, "Password must contain at least 1 number.")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least 1 special character.",
    ),
});

type LoginFormValues = z.infer<typeof loginUserZodSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [googleButtonWidth, setGoogleButtonWidth] = useState(320);

  const googleContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginUserZodSchema),
    mode: "onTouched",
  });

  // Keep the Google button width synchronized with its container.
  useEffect(() => {
    const container = googleContainerRef.current;

    if (!container) return;

    const updateWidth = () => {
      const availableWidth = Math.floor(
        container.getBoundingClientRect().width,
      );

      if (availableWidth > 0) {
        setGoogleButtonWidth(Math.min(400, availableWidth));
      }
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const onSubmit = async (data: LoginFormValues) => {
    if (isLoading) return;

    const payload = {
      email: data.email.trim().toLowerCase(),
      password: data.password,
    };

    try {
      setIsLoading(true);

      const result = await HandelLogin(payload);

      if (result.success) {
        toast.success(result.message);
        router.push("/");
        router.refresh();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.");
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

    if (isLoading) return;

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
    <Card className="mx-auto w-full min-w-0 max-w-md overflow-hidden rounded-2xl border shadow-xl shadow-muted/20">
      <CardHeader className="space-y-4 px-5 pb-6 pt-6 sm:px-7 sm:pt-7">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950">
          <HeartPulse className="h-6 w-6" />
        </div>

        <div className="min-w-0 space-y-2">
          <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
            Welcome back
          </CardTitle>

          <CardDescription className="text-sm leading-6 sm:text-base">
            Sign in to your account and be a part of saving lives.
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="min-w-0 px-5 sm:px-7">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          {/* Email */}
          <div className="min-w-0 space-y-2">
            <Label htmlFor="email">Email address</Label>

            <div className="relative">
              <Mail
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              />

              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                autoCapitalize="none"
                spellCheck={false}
                className="h-11 w-full min-w-0 pl-10"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
            </div>

            {errors.email && (
              <p role="alert" className="text-xs leading-5 text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="min-w-0 space-y-2">
            <div className="flex min-w-0 items-center justify-between gap-2">
              <Label htmlFor="password">Password</Label>

              <Button
                asChild
                type="button"
                variant="link"
                className="h-auto shrink-0 p-0 text-xs text-red-600 dark:text-red-400"
              >
                <Link href="/auth/forgot-password">
                  Forgot password?
                </Link>
              </Button>
            </div>

            <div className="relative">
              <LockKeyhole
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              />

              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="h-11 w-full min-w-0 pl-10 pr-12"
                aria-invalid={!!errors.password}
                {...register("password")}
              />

              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 touch-manipulation items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {showPassword ? (
                  <EyeOff aria-hidden="true" className="h-4 w-4" />
                ) : (
                  <Eye aria-hidden="true" className="h-4 w-4" />
                )}
              </button>
            </div>

            {errors.password && (
              <p role="alert" className="text-xs leading-5 text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Email/password login */}
          <Button
            type="submit"
            disabled={isLoading}
            className="h-11 w-full bg-red-600 text-white hover:bg-red-700"
          >
            {isLoading ? (
              "Signing in..."
            ) : (
              <>
                Sign in
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {/* Google login */}
        <div className="mt-6 min-w-0 space-y-5">
          <div className="flex min-w-0 items-center gap-3">
            <Separator className="min-w-0 flex-1" />

            <span className="shrink-0 text-[10px] font-medium tracking-wide text-muted-foreground sm:text-xs">
              OR CONTINUE WITH
            </span>

            <Separator className="min-w-0 flex-1" />
          </div>

          <div
            ref={googleContainerRef}
            className={`mx-auto flex min-h-11 w-full min-w-0 justify-center overflow-hidden ${isLoading ? "pointer-events-none opacity-60" : ""
              }`}
          >
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
              width={String(googleButtonWidth)}
             
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex min-w-0 flex-col gap-4 px-5 pb-6 pt-5 sm:px-7">
        <div className="flex w-full min-w-0 items-center gap-3">
          <Separator className="min-w-0 flex-1" />

          <span className="shrink-0 text-center text-[10px] font-medium tracking-wide text-muted-foreground sm:text-xs">
            NEW TO OUR COMMUNITY?
          </span>

          <Separator className="min-w-0 flex-1" />
        </div>

        <p className="flex flex-wrap items-center justify-center gap-x-1 text-center text-sm leading-6 text-muted-foreground">
          Don&apos;t have an account?

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
