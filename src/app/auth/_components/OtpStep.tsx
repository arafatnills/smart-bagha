import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/useAuthStore";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

export function OtpStep() {
    const email = useAuthStore((state) => state.email);
    const otp = useAuthStore((state) => state.otp);
    const setOtp = useAuthStore((state) => state.setOtp);
    const setStep = useAuthStore((state) => state.setStep);

    const handleVerifyOtp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (otp.length === 6) {
            // এখানে পরবর্তীতে OTP ভেরিফাই API কল বসাবে
            console.log("Verifying OTP:", otp);
            setStep(3); // স্ট্যাটিক্যালি ৩য় স্টেপে পাঠিয়ে দিচ্ছি
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
                <p className="text-sm text-muted-foreground">Enter the 6-digit code sent to</p>
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
                    onChange={(event) => setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))}
                    maxLength={6}
                    className="h-14 text-center text-2xl font-semibold tracking-[0.5em]"
                    required
                />
                <p className="text-xs text-muted-foreground">Enter all 6 digits.</p>
            </div>

            <Button type="submit" disabled={otp.length !== 6} className="h-11 w-full bg-red-600 text-white hover:bg-red-700">
                Verify OTP
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button type="button" variant="ghost" className="w-full" onClick={() => setStep(1)}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Change email
            </Button>
        </form>
    );
}