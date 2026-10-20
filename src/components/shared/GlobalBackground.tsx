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
    h-80 w-80 rounded-full
    bg-rose-300/15
    blur-[100px]
    sm:bg-rose-300/20
    md:bg-rose-300/25 md:blur-[120px]
  "
      />

      {/* Bottom-right glow */}
      <div
        aria-hidden="true"
        className="
    pointer-events-none absolute
    -bottom-32 -right-32
    h-96 w-96 rounded-full
    bg-rose-300/15
    blur-[100px]
    sm:bg-rose-300/20
    md:bg-rose-300/25 md:blur-[120px]
  "
      />

      {/* Page content */}
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
}
