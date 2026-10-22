"use server";

import type { ApiResponse, User } from "@/types/user";
import { cookies } from "next/headers";

export async function getMe(): Promise<User | null> {
  const token = (await cookies()).get("accessToken")?.value;
  if (!token) return null;

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) return null;

    const json: ApiResponse<User> = await res.json();
    return json.data;
  } catch (error) {
    console.error("[getMe] Request failed:", error);
    return null;
  }
}
