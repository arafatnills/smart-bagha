import { getMe } from "@/lib/getMe";
import { connection } from "next/server";
import StoreInitializer from "./AuthInit";
import MobileMenu from "./MobileMenu";
import NavAuth from "./NavAuth";

export default async function NavRight() {
  await connection();
  const user = await getMe();
  return (
    <>
      <StoreInitializer user={user} />

      <div className="hidden items-center gap-4 md:flex">
        <NavAuth user={user} />
      </div>

      <MobileMenu user={user} />
    </>
  );
}

export function NavRightFallback() {
  return (
    <>
      <div className="hidden h-9 w-28 rounded-md bg-muted md:block" />
      <div className="flex items-center gap-1 md:hidden">
        <div className="size-8 rounded-full bg-muted" />
        <div className="size-10 rounded-md bg-muted" />
      </div>
    </>
  );
}