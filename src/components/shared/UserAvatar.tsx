"use client";

import type { User } from "@/types/user";
import { useState } from "react";

function getInitials(name: string) {
    const words = name.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return "?";
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase(); // Arafat Nill -> AN
}

export default function UserAvatar({
    user,
    className = "h-9 w-9",
}: {
    user: Pick<User, "name" | "profilePhoto">;
    className?: string;
}) {
    const [imgError, setImgError] = useState(false);
    const showPhoto = !!user.profilePhoto && !imgError;

    return (
        <span
            className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-red-600 bg-red-50 text-sm font-semibold text-red-600 ${className}`}
        >
            {showPhoto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={user.profilePhoto!}
                    alt={user.name}
                    width={36}
                    height={36}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover"
                />
            ) : (
                getInitials(user.name)
            )}
        </span>
    );
}