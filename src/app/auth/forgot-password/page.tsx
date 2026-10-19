"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Check, HeartPulse } from "lucide-react";
import Link from "next/link";

import { useAuthStore } from "@/store/useAuthStore";
import { EmailStep } from "../_components/EmailStep";
import { OtpStep } from "../_components/OtpStep";
import { PasswordStep } from "../_components/PasswordStep";


const steps = [
    { title: "Email", description: "Verify your email" },
    { title: "OTP", description: "Confirm your identity" },
    { title: "Password", description: "Create a new password" },
];

export default function ForgotPasswordPage() {

    const step = useAuthStore((state) => state.step);
    const progress = (step / steps.length) * 100;

    return (
        <Card className="w-full overflow-hidden rounded-2xl border shadow-xl shadow-muted/20">
            <CardHeader className="space-y-5 pb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <HeartPulse className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold tracking-tight">
                        Reset your password
                    </CardTitle>
                    <CardDescription className="leading-6">
                        Follow these three steps to securely regain access to your account.
                    </CardDescription>
                </div>

                {/* Step indicator */}
                <div className="space-y-4 pt-2">
                    <Progress value={progress} className="h-2" />
                    <div className="grid grid-cols-3 gap-2">
                        {steps.map((item, index) => {
                            const number = index + 1;
                            const isComplete = step > number;
                            const isActive = step === number;

                            return (
                                <div key={item.title} className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${isComplete || isActive
                                                    ? "border-red-600 bg-red-600 text-white"
                                                    : "border-border text-muted-foreground"
                                                }`}
                                        >
                                            {isComplete ? <Check className="h-4 w-4" /> : number}
                                        </div>
                                        <span className={`text-xs font-medium sm:text-sm ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </CardHeader>

            <CardContent>
             
                {step === 1 && <EmailStep />}
                {step === 2 && <OtpStep />}
                {step === 3 && <PasswordStep />}
            </CardContent>

            <CardFooter className="flex flex-col gap-4 border-t bg-muted/20 px-6 py-5">
                <Separator />
                <Button asChild variant="link" className="text-muted-foreground">
                    <Link href="/auth/login">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to login
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}