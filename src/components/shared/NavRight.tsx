import { getMe } from "@/lib/getMe";
import StoreInitializer from "./AuthInit";
import MobileMenu from "./MobileMenu";
import NavAuth from "./NavAuth";

export default async function NavRight() {
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
      <div className="h-9 w-9 rounded-md bg-muted md:hidden" />
    </>
  );
}
