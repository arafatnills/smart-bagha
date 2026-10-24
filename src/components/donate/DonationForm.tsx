"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeartPulse, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
    MAX_DONATION,
    MIN_DONATION,
    formatTaka,
    presetAmounts,
} from "./donate-data";

export default function DonationForm() {
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validate = (value: string) => {
        const n = Number(value);
        if (!value) return "Please enter an amount.";
        if (!Number.isFinite(n) || n <= 0) return "Enter a valid amount.";
        if (n < MIN_DONATION) return `Minimum donation is ${formatTaka(MIN_DONATION)}.`;
        if (n > MAX_DONATION) return `Maximum donation is ${formatTaka(MAX_DONATION)}.`;
        return "";
    };

    const handleChange = (value: string) => {
        const clean = value.replace(/[^0-9]/g, "");
        setAmount(clean);
        if (error) setError(validate(clean));
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const message = validate(amount);
        setError(message);
        if (message) return;

        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 900));
        setIsLoading(false);
        toast.success(`Thank you! Your ${formatTaka(Number(amount))} donation is received.`);
        setAmount("");
    };

    return (
        <Card
            id="donation-form"
            className="w-full rounded-2xl border shadow-xl shadow-muted/20"
        >
            <CardHeader className="space-y-4 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950">
                    <HeartPulse className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold tracking-tight">
                        Make a Donation
                    </CardTitle>
                    <CardDescription className="leading-6">
                        Enter the amount you would like to give.
                    </CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="space-y-2">
                        <Label htmlFor="amount">Donation amount</Label>
                        <div className="relative">
                            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-lg font-semibold text-muted-foreground">
                                ৳
                            </span>
                            <Input
                                id="amount"
                                inputMode="numeric"
                                placeholder="0"
                                autoComplete="off"
                                value={amount}
                                aria-invalid={!!error}
                                onChange={(e) => handleChange(e.target.value)}
                                className="h-14 pl-10 text-xl font-semibold"
                            />
                        </div>
                        {error && <p className="text-xs text-red-500">{error}</p>}
                    </div>

                    <div className="grid grid-cols-3 gap-2.5">
                        {presetAmounts.map((preset) => {
                            const active = amount === String(preset);
                            return (
                                <button
                                    key={preset}
                                    type="button"
                                    onClick={() => handleChange(String(preset))}
                                    aria-pressed={active}
                                    className={`h-11 rounded-lg border text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                                        active
                                            ? "border-red-600 bg-red-600 text-white shadow-md shadow-red-600/30"
                                            : "bg-card hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950/30"
                                    }`}
                                >
                                    {formatTaka(preset)}
                                </button>
                            );
                        })}
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="h-12 w-full bg-red-600 text-base font-semibold text-white hover:bg-red-700"
                    >
                        {isLoading
                            ? "Processing..."
                            : amount
                              ? `Donate ${formatTaka(Number(amount))}`
                              : "Donate Now"}
                    </Button>

                    <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                        <Lock className="h-3.5 w-3.5" /> Secure &amp; transparent donations
                    </p>
                </form>
            </CardContent>
        </Card>
    );
}
