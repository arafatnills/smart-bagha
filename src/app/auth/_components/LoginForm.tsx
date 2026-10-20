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

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const payload = {
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      password: formData.get("password") as string,
    };

    try {
      setIsLoading(true);

      // TODO: Connect your backend login API here.
      console.log("Login payload:", payload);
    } catch (error) {
      console.error("Login failed:", error);
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
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="h-11 pl-10"
                required
              />
            </div>
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
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="h-11 pl-10 pr-11"
                required
              />

              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? (
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <EyeOff className="h-4 w-4" />
                  </div>
                ) : (
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Eye className="h-4 w-4" />
                  </div>
                )}
              </button>
            </div>
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
