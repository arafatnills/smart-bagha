"use client";

import { useAuthStore } from "@/store/useAuthStore";
import type { User } from "@/types/user";
import { useEffect } from "react";

export default function StoreInitializer({ user }: { user: User | null }) {
    const setUser = useAuthStore((s) => s.setUser);

    useEffect(() => {
        setUser(user);
    }, [user, setUser]);

    return null;
}