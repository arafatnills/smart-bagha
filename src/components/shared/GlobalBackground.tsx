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
      className={`theme-background relative isolate min-h-screen ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        {/* Top-left glow */}
        <div
          className="
                        absolute -left-32 -top-32
                        size-100 sm:size-125
                        bg-radial from-rose-300/40 via-rose-300/5 to-transparent
                    "
        />

        {/* Bottom-right glow */}
        <div
          className="
                        absolute -bottom-32 -right-32
                        size-125 sm:size-150
                        bg-radial from-rose-300/40 via-rose-300/5 to-transparent
                    "
        />
      </div>

      {/* Page content */}
      {children}
    </div>
  );
}
