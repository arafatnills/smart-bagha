import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { User } from "@/types/user";
import UserMenu from "./UserMenu";

export default function NavAuth({ user }: { user: User | null }) {
  if (!user) {
    return (
      <>
        <Button variant="ghost" asChild>
          <Link href="/auth/login">Sign in</Link>
        </Button>
        <Button asChild className="bg-red-600 text-white hover:bg-red-700">
          <Link href="/auth/register">Create account</Link>
        </Button>
      </>
    );
  }

  return <UserMenu user={user} />;
}