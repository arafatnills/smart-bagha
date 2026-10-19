
import type { ReactNode } from "react";

type GlobalBackgroundProps = {
    children: ReactNode;
    className?: string;
};

export default function GlobalBackground({
    children,
    className = "",
}: GlobalBackgroundProps) {
    return (
        <div
            className={`theme-background relative isolate min-h-screen overflow-hidden ${className}`}
        >
            {/* Top left glow */}
            <div
                aria-hidden="true"
                className="theme-glow pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            />

            {/* Bottom right glow */}
            <div
                aria-hidden="true"
                className="theme-glow pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full blur-3xl"
            />

            {/* All nested pages */}
            <div className="relative z-10 min-h-screen">
                {children}
            </div>
        </div>
    );
}
