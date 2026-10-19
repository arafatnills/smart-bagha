
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/useAuthStore";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { HandleSendOtp } from "../_actions/handelAuth";

export function EmailStep() {
  const email = useAuthStore((state) => state.email);
  const setEmail = useAuthStore((state) => state.setEmail);
  const setStep = useAuthStore((state) => state.setStep);
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
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
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
