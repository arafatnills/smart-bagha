"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { useCreateAuthStore } from "@/store/useAuthStore";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { ArrowLeft, Loader2, MailCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { HandelConfirmCreateUser } from "../_actions/handelAuth";

export default function OtpVerificationStep() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const router = useRouter();

  const email = useCreateAuthStore((state) => state.email);
  const setStep = useCreateAuthStore((state) => state.setStep);

  const handleVerifyOtp = async () => {
    setError("");

    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    const payload = {
      email,
      otp,
    };

    try {
      setIsLoading(true);
      const result = await HandelConfirmCreateUser(payload);
      if (result.success) {
        toast.success(result.message);
        router.push("/");
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("OTP verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setError("");

    try {
      setIsResending(true);

      // TODO: Call your resend OTP action here.
      console.log("Resend OTP for:", email);
    } catch {
      setError("Failed to resend OTP. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <Card className="w-full max-w-md border shadow-sm">
      <CardContent className="space-y-6 p-6 sm:p-8">
        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-red-50 text-red-600">
            <MailCheck className="size-7" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Verify your email
            </h2>

            <p className="text-sm text-muted-foreground">
              We sent a 6-digit verification code to
            </p>

            <p className="break-all text-sm font-medium text-foreground">
              {email}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="otp-0">Verification code</Label>

          <div className="flex justify-center">
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
              value={otp}
              onChange={setOtp}
              disabled={isLoading}
              autoFocus
            >
              <div className="flex gap-2 sm:gap-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPGroup key={index}>
                    <InputOTPSlot
                      index={index}
                      className="h-12 w-12 text-lg sm:h-14 sm:w-14 sm:text-xl rounded-md border"
                    />
                  </InputOTPGroup>
                ))}
              </div>
            </InputOTP>
          </div>

          {error && (
            <p role="alert" className="text-center text-sm text-destructive">
              {error}
            </p>
          )}
        </div>

        <Button
          type="button"
          className="h-11 w-full"
          onClick={handleVerifyOtp}
          disabled={isLoading || otp.length !== 6}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Verifying...
            </>
          ) : (
            "Verify & Create Account"
          )}
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          {` Didn't receive the code? `}
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={isResending || isLoading}
            className="font-medium text-primary underline-offset-4 hover:underline disabled:opacity-50"
          >
            {isResending ? "Sending..." : "Resend OTP"}
          </button>
        </div>

        <Button
          type="button"
          variant="link"
          className="w-full"
          onClick={() => setStep(1)}
          disabled={isLoading}
        >
          <ArrowLeft className="mr-2 size-4" />
          Back to registration
        </Button>
      </CardContent>
    </Card>
  );
}
