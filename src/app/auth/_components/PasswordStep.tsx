import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/useAuthStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { HandleResetPassword } from "../_actions/handelAuth";

const changePasswordSchema = z
  .object({
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

type ChangePasswordValue = z.infer<typeof changePasswordSchema>;

export function PasswordStep() {
  const email = useAuthStore((state) => state.email);
  const otp = useAuthStore((state) => state.otp);
  const resetState = useAuthStore((state) => state.resetState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
    mode: "onTouched",
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const password = watch("password") ?? "";
  const confirmPassword = watch("confirmPassword") ?? "";

  const isPasswordValid =
    changePasswordSchema.shape.password.safeParse(password).success;

  const isConfirmPasswordValid =
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const isSubmitDisabled =
    isPending || !isPasswordValid || !isConfirmPasswordValid;


  

  const handleResetPassword = async (data: ChangePasswordValue) => {
    try {
      const result = await HandleResetPassword(email, otp, data.password);
      if (result.success) {
        toast.success(result.message);
        setIsPending(false);
        router.push("/auth/login");
        resetState();
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleResetPassword)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="password">New password</Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <LockKeyhole className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            minLength={6}
            className="h-11 pl-10 pr-12"
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2"
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
        {errors.password && (
          <p className="text-xs text-red-500">
            {errors.password.message as string}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm new password</Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <LockKeyhole className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter new password"
            className="h-11 pl-10 pr-12"
            {...register("confirmPassword")}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2"
          >
            {showConfirmPassword ? (
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
        {errors.confirmPassword && (
          <p className="text-xs text-red-500">
            {errors.confirmPassword?.message as string}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitDisabled}
        className="h-11 w-full bg-red-600 text-white hover:bg-red-700"
      >
        {isPending ? "Changing..." : "Change password"}

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
