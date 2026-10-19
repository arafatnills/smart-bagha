import Logo from "@/components/shared/Logo";
import Image from "next/image";
import type { ReactNode } from "react";

type AuthLayoutProps = {
    children: ReactNode;
};

export default function AuthLayout({
    children,
}: AuthLayoutProps) {
    return (
        <main className="min-h-screen lg:grid lg:grid-cols-2">
            {/* Left Side: Logo + Animation */}
            <section className="hidden min-h-screen flex-col items-center justify-center gap-8 p-10 lg:flex">
                <Logo />

                <Image
                    src="/donate.svg"
                    alt="Blood donation animation"
                    width={500}
                    height={500}
                    priority
                    className="h-auto w-full max-w-md"
                />
            </section>

            {/* Right Side: Login / Register */}
            <section className="relative flex min-h-screen items-center justify-center px-5 py-10 sm:px-10">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </section>
        </main>
    );
}