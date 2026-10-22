"use client";

import { HeartPulse, LogOut, Menu, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { User } from "@/types/user";
import { navLinks } from "./nav-links";

export default function MobileMenu({ user }: { user: User | null }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const setUser = useAuthStore((s) => s.setUser);

  const handleLogout = async () => {
    await HandelLogout();
    setUser(null);
    setOpen(false);
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="flex flex-col gap-6">
          <SheetHeader className="text-left">
            <SheetTitle className="flex items-center gap-2">
              <HeartPulse className="h-6 w-6 text-red-600" />
              smartBagha
            </SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation and account links
            </SheetDescription>
          </SheetHeader>

          <div className="mt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.name}
                </Link>
              </SheetClose>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3">
            {user ? (
              <>
                <div className="px-1 text-sm">
                  <p className="truncate font-medium">{user.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {user.email}
                  </p>
                </div>
                <SheetClose asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard">
                      <UserIcon className="mr-2 h-4 w-4" />
                      My Profile
                    </Link>
                  </Button>
                </SheetClose>
                <Button
                  variant="destructive"
                  className="w-full justify-start"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              </>
            ) : (
              <>
                <SheetClose asChild>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/auth/login">Sign in</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    className="w-full bg-red-600 text-white hover:bg-red-700"
                    asChild
                  >
                    <Link href="/auth/register">Create account</Link>
                  </Button>
                </SheetClose>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
