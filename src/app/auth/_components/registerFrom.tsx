"use client";

import {
  ArrowRight,
  Eye,
  EyeOff,
  HeartPulse,
  LockKeyhole,
  Mail,
  Phone,
  UserRound,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useCreateAuthStore } from "@/store/useAuthStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { HandelCreateUser } from "../_actions/handelAuth";
const bloodGroups = [
  { label: "A+", value: "A_POSITIVE" },
  { label: "A-", value: "A_NEGATIVE" },
  { label: "B+", value: "B_POSITIVE" },
  { label: "B-", value: "B_NEGATIVE" },
  { label: "AB+", value: "AB_POSITIVE" },
  { label: "AB-", value: "AB_NEGATIVE" },
  { label: "O+", value: "O_POSITIVE" },
  { label: "O-", value: "O_NEGATIVE" },
] as const;

const bloodGroupSchema = z.enum([
  "A_POSITIVE",
  "A_NEGATIVE",
  "B_POSITIVE",
  "B_NEGATIVE",
  "AB_POSITIVE",
  "AB_NEGATIVE",
  "O_POSITIVE",
  "O_NEGATIVE",
]);

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(11, "Please enter a valid phone number"),
    bloodGroup: bloodGroupSchema,
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .max(20, { message: "Password cannot exceed 20 characters" })
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*]/,
        "Password must contain at least one special character (!@#$%^&*)",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
type RegisterFormValues = z.infer<typeof registerSchema>;
export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const setStep = useCreateAuthStore((state) => state.setStep);
  const setEmail = useCreateAuthStore((state) => state.setEmail);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true);
    const payload = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      password: data.password,
      bloodGroup: data.bloodGroup,
    };
    setEmail(payload.email);
    try {
      const result = await HandelCreateUser(payload);
      if (result.success) {
        setStep(2);
      } 
    } catch (err) {
      console.error("Registration failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full rounded-2xl border shadow-xl shadow-muted/20">
      <CardHeader className="space-y-4 pb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400">
          <HeartPulse className="h-6 w-6" />
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Create your account
          </CardTitle>

          <CardDescription className="leading-6">
            Join our blood donation community and help save lives.
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <UserRound className="h-4 w-4 text-muted-foreground" />
              </div>

              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                className="h-11 pl-10"
                required
                {...register("name")}
              />
            </div>
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">
                {errors.name.message as string}
              </p>
            )}
          </div>

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
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid Email Address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500">
                {errors.email.message as string}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Phone className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                id="phone"
                type="tel"
                placeholder="+880 1XXX-XXXXXX"
                autoComplete="tel"
                pattern="(\+?880|0)1[3-9][0-9]{8}"
                title="Enter a valid Bangladesh mobile number."
                className="h-11 pl-10"
                required
                {...register("phone", {
                  required: "Phone number is required.",
                  pattern: {
                    value: /(\+?880|0)1[3-9][0-9]{8}/,
                    message: "Please enter a valid Bangladesh mobile number.",
                  },
                })}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-500">
                {errors.phone.message as string}
              </p>
            )}
          </div>

          {/* Blood Group */}
          <div className="space-y-2">
            <Label htmlFor="bloodGroup">Blood Group</Label>
            <Controller
              name="bloodGroup"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    name="bloodGroup"
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    required
                  >
                    <SelectTrigger
                      id="bloodGroup"
                      className={`h-15 w-full  ${errors.bloodGroup ? "border-red-500" : ""}`}
                    >
                      <SelectValue placeholder="Select your blood group" />
                    </SelectTrigger>

                    <SelectContent>
                      {bloodGroups.map((group) => (
                        <SelectItem key={group.value} value={group.value}>
                          {group.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }}
            />
            {errors.bloodGroup && (
              <p className="text-xs text-red-500 mt-1">
                {errors.bloodGroup.message as string}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LockKeyhole className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                autoComplete="new-password"
                minLength={6}
                className="h-11 pl-10 pr-11"
                required
                {...register("password")}
              />

              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password ? (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message as string}
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                Use at least 6 characters.
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm password</Label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LockKeyhole className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                autoComplete="new-password"
                minLength={6}
                className="h-11 pl-10 pr-11"
                {...register("confirmPassword")}
              />

              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">
                {errors.confirmPassword.message as string}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading}
            className="h-11 w-full bg-red-600 text-white hover:bg-red-700"
          >
            {isLoading ? "Creating account..." : "Create account"}
            {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 border-t bg-muted/20 px-6 py-5">
        <div className="flex w-full items-center gap-3">
          <Separator className="flex-1" />
          <span className="whitespace-nowrap text-xs text-muted-foreground">
            ALREADY A MEMBER?
          </span>
          <Separator className="flex-1" />
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Button
            asChild
            variant="link"
            className="h-auto p-0 font-semibold text-red-600 dark:text-red-400"
          >
            <Link href="/auth/login">Sign in</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}
