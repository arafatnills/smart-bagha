"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./nav-links";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors ${
              isActive
                ? "text-foreground font-semibold" // Active styles
                : "text-muted-foreground hover:text-foreground" // Inactive styles
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
