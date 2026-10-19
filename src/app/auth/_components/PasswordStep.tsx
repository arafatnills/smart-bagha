import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/useAuthStore";
import { ArrowRight, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useState } from "react";

export function PasswordStep() {
    const email = useAuthStore((state) => state.email);
    const otp = useAuthStore((state) => state.otp);
    const resetState = useAuthStore((state) => state.resetState);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleResetPassword = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password === confirmPassword && password.length >= 8) {
            // এখানে পরবর্তীতে পাসওয়ার্ড রিসেট API কল বসাবে
            console.log("Resetting password for:", email, "OTP:", otp);
            alert("Password reset successfully! (Static Check)");
            resetState(); // কাজ শেষে স্টোর খালি করে স্টেপ ১ এ নিয়ে যাবে
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
                        minLength={8}
                        className="h-11 pl-10 pr-12"
                        required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2">
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                </div>
                <p className="text-xs text-muted-foreground">Use at least 8 characters.</p>
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
                        minLength={8}
                        className="h-11 pl-10 pr-12"
                        required
                    />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2">
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            <Button type="submit" disabled={password.length < 8 || password !== confirmPassword} className="h-11 w-full bg-red-600 text-white hover:bg-red-700">
                Reset password
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </form>
    );
}