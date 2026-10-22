
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForgotAuthStore } from "@/store/useAuthStore";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { HandleSendOtp } from "../_actions/handelAuth";

export function EmailStep() {
  const email = useForgotAuthStore((state) => state.email);
  const setEmail = useForgotAuthStore((state) => state.setEmail);
  const setStep = useForgotAuthStore((state) => state.setStep);
  const [isPending, setIsPending] = useState(false);

  const handleSendOtp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsPending(true);
    try {
      const result = await HandleSendOtp(email);
      if (result.success) {
        toast.success(result.message);
        setIsPending(false);
        setStep(2);
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
    <form onSubmit={handleSendOtp} className="space-y-5">
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-11 pl-10"
            required
          />
        </div>
        <p className="text-xs leading-5 text-muted-foreground">
          We&apos;ll send a 6-digit verification code to your email.
        </p>
      </div>

      <Button
        type="submit"
        className="h-11 w-full bg-red-600 text-white hover:bg-red-700"
      >
        {isPending ? "Sending... OTP" : "Send OTP"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
