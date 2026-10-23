import { HeartPulse } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition-opacity hover:opacity-90"
    >
      <HeartPulse className="h-7 w-7 text-red-600" />
      <span className="text-xl font-bold tracking-tight">smartBagha</span>
    </Link>
  );
};

export default Logo;
