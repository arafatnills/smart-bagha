"use client";

import { HeartPulse, LogOut, Menu, Settings, User } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";

export default function Navbar() {
  const isLoggedIn = true;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Find Blood", href: "/donors" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Left: Logo */}
        <Logo/>

        {/* Center/Left: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Desktop Auth & User Menu */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 cursor-pointer focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Sign in</Link>
              </Button>
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Link href="/auth/register">Create account</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile: Hamburger Menu (Shadcn Sheet) */}
        <div className="md:hidden">
          <Sheet>
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
              </SheetHeader>

              <div className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3">
                {isLoggedIn ? (
                  <>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="/dashboard">
                        <User className="mr-2 h-4 w-4" />
                        My Profile
                      </Link>
                    </Button>
                    <Button
                      variant="destructive"
                      className="w-full justify-start"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/auth/login">Sign in</Link>
                    </Button>
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      asChild
                    >
                      <Link href="/auth/register">Create account</Link>
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
