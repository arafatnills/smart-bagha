import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="absolute left-10 top-10 flex items-center gap-3 xl:left-16"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-200">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path
            d="M12 21s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.2-8 11-8 11Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div>
        <p className="text-xl font-extrabold tracking-tight text-gray-900">
          Smart<span className="text-red-600">Bagha</span>
        </p>
        <p className="text-xs text-gray-500">Every drop counts.</p>
      </div>
    </Link>
  );
};

export default Logo;
