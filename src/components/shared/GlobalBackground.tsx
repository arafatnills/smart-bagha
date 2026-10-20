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
            {/* Top-left glow */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute
                    -left-32 -top-32
                    size-[400px] sm:size-[500px]
                    bg-radial from-rose-300/40 via-rose-300/5 to-transparent
                "
            />

            {/* Bottom-right glow */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute
                    -bottom-32 -right-32
                    size-[500px] sm:size-[600px]
                    bg-radial from-rose-300/40 via-rose-300/5 to-transparent
                "
            />

            {/* Page content */}
            <div className="relative z-10 min-h-screen">{children}</div>
        </div>
    );
}