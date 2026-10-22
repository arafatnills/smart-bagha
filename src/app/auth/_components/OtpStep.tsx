import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForgotAuthStore } from "@/store/useAuthStore";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { HandleVerifyOtp } from "../_actions/handelAuth";

export function OtpStep() {
  const email = useForgotAuthStore((state) => state.email);
  const otp = useForgotAuthStore((state) => state.otp);
  const setOtp = useForgotAuthStore((state) => state.setOtp);
  const setStep = useForgotAuthStore((state) => state.setStep);
  const [isPending, setIsPending] = useState(false);

  const handleVerifyOtp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (otp.length === 6) {
      try {
        const result = await HandleVerifyOtp(otp, email);
        if (result.success) {
          toast.success(result.message);
          setIsPending(false);
          setStep(3);
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
    <form onSubmit={handleVerifyOtp} className="space-y-5">
      <div className="flex justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400">
          <ShieldCheck className="h-7 w-7" />
        </div>
      </div>

      <div className="space-y-1 text-center">
        <h3 className="font-semibold">Check your email</h3>
        <p className="text-sm text-muted-foreground">
          Enter the 6-digit code sent to
        </p>
        <p className="break-all text-sm font-medium">{email}</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="otp">Verification code</Label>
        <Input
          id="otp"
          type="text"
          inputMode="numeric"
          placeholder="000000"
          value={otp}
          onChange={(event) =>
            setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))
          }
          maxLength={6}
          className="h-14 text-center text-2xl font-semibold tracking-[0.5em]"
          required
        />
        <p className="text-xs text-muted-foreground">Enter all 6 digits.</p>
      </div>

      <Button
        type="submit"
        disabled={otp.length !== 6}
        className="h-11 w-full bg-red-600 text-white hover:bg-red-700"
      >
        {isPending ? "Verifying..." : "Verify OTP"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        className="w-full"
        onClick={() => setStep(1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Change email
      </Button>
    </form>
  );
}
