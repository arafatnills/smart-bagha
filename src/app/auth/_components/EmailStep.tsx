import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/useAuthStore";
import { ArrowRight, Mail } from "lucide-react";

export function EmailStep() {
    const email = useAuthStore((state) => state.email);
    const setEmail = useAuthStore((state) => state.setEmail);
    const setStep = useAuthStore((state) => state.setStep);

    const handleSendOtp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // এখানে পরবর্তীতে API কল বসাবে
        console.log("Sending OTP to:", email);
        setStep(2); // স্ট্যাটিক্যালি ২য় স্টেপে পাঠিয়ে দিচ্ছি
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

            <Button type="submit" className="h-11 w-full bg-red-600 text-white hover:bg-red-700">
                Send OTP
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </form>
    );
}