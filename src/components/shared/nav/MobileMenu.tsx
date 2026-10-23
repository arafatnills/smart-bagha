"use client";

import { ChevronRight, LogOut, Menu, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { HandelLogout } from "@/app/auth/_actions/handelAuth";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuthStore } from "@/store/useAuthStore";
import type { User } from "@/types/user";
import Logo from "./Logo";
import { navLinks } from "./nav-links";
import UserAvatar from "./UserAvatar";

// O_POSITIVE -> O+
const formatBloodGroup = (value?: string) =>
  value ? value.replace("_POSITIVE", "+").replace("_NEGATIVE", "-") : "";

export default function MobileMenu({ user }: { user: User | null }) {
  const router = useRouter();
  const pathname = usePathname();
  const setUser = useAuthStore((s) => s.setUser);

  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    await HandelLogout();
    setUser(null);
    setOpen(false);
    setLoggingOut(false);
    router.push("/auth/login");
    router.refresh();
  };

  const bloodGroup = formatBloodGroup(user?.bloodGroup);

  return (
    <div className="flex items-center gap-1 md:hidden">
      {/* Left: profile pic only (logged-in hole) */}
      {user && (
        <UserAvatar
          user={user}
          className="size-8 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
        />
      )}

      {/* Right: 3-line hamburger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex h-dvh w-[85%] max-w-sm flex-col gap-0 p-0 data-[state=closed]:duration-150 data-[state=open]:duration-200"
        >
          {/* Header */}
          <SheetHeader className="border-b px-5 py-4 pr-14 text-left">
            <SheetTitle className="flex items-center">
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation and account links
            </SheetDescription>
          </SheetHeader>

          {/* Nav links */}
          <nav
            aria-label="Mobile"
            className="flex-1 overflow-y-auto overscroll-contain px-3 py-4"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        prefetch={false}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          active
                            ? "bg-red-50 text-red-600"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {link.name}
                        <ChevronRight className="size-4 opacity-40" />
                      </Link>
                    </SheetClose>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom: user info */}
          <div className="border-t bg-muted/30 px-5 pt-4 pb-[calc(env(safe-area-inset-bottom)+2.5rem)]">
            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <UserAvatar user={user} className="size-12" />

                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{user.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>

                  {bloodGroup && (
                    <span className="shrink-0 rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-red-600">
                      {bloodGroup}
                    </span>
                  )}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <SheetClose asChild>
                    <Button variant="outline" asChild className="gap-2">
                      <Link href="/dashboard" prefetch={false}>
                        <UserIcon className="size-4" />
                        Profile
                      </Link>
                    </Button>
                  </SheetClose>

                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    disabled={loggingOut}
                    className="gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    <LogOut className="size-4" />
                    {loggingOut ? "Logging out..." : "Log out"}
                  </Button>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <SheetClose asChild>
                  <Button variant="outline" asChild>
                    <Link href="/auth/login" prefetch={false}>
                      Sign in
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    className="bg-red-600 text-white hover:bg-red-700"
                  >
                    <Link href="/auth/register" prefetch={false}>
                      Join now
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
