import Link from "next/link";

import { Suspense } from "react";
import Logo from "./Logo";
import NavRight, { NavRightFallback } from "./NavRight";
import { navLinks } from "./nav-links";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Logo />

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Suspense fallback={<NavRightFallback />}>
          <NavRight />
        </Suspense>
      </div>
    </nav>
  );
}
