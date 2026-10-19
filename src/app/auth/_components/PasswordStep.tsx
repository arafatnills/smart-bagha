import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/useAuthStore";
import { ArrowRight, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { HandleResetPassword } from "../_actions/handelAuth";

export function PasswordStep() {
  const email = useAuthStore((state) => state.email);
  const otp = useAuthStore((state) => state.otp);
  const resetState = useAuthStore((state) => state.resetState);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter()

  const handleResetPassword = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    console.log({otp, email, password})
    if (password === confirmPassword && password.length >= 6) {
      try {
        const result = await HandleResetPassword(email, otp, password);
        if (result.success) {
          toast.success(result.message);
          setIsPending(false);
          router.push('/auth/login')
          resetState();
        } else {
          toast.error(result.message);
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsPending(false);
      }
    }
  };

  return (
    <form onSubmit={handleResetPassword} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="password">New password</Label>
        <div className="relative">
          <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={6}
            className="h-11 pl-10 pr-12"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          Use at least 6 characters.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm new password</Label>
        <div className="relative">
          <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter new password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            minLength={6}
            className="h-11 pl-10 pr-12"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <Button
        type="submit"
        disabled={password.length < 6 || password !== confirmPassword}
        className="h-11 w-full bg-red-600 text-white hover:bg-red-700"
      >
        {isPending ? "Changing..." : "Change password"}

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
