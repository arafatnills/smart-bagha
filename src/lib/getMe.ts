import type { User } from "@/types/user";
import { cookies } from "next/headers";

export async function getMe(): Promise<User | null> {
  const token = (await cookies()).get("accessToken")?.value;

  if (!token) {
    console.log("[getMe] accessToken cookie missing");
    return null;
  }

  const backendUrl = process.env.BACKEND_API_URL;
  console.log("[getMe] Backend URL configured:", Boolean(backendUrl), backendUrl);
  if (!backendUrl) {
    console.error("[getMe] BACKEND_API_URL is missing");
    return null;
  }

  try {
    const res = await fetch(`${backendUrl}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("[getMe] Backend response:", res.status);
      return null;
    }

    const json = await res.json();

    console.log("[getMe] User fetch successful");

    return json.data ?? null;
  } catch (error) {
    console.error("[getMe] Request failed:", error);
    return null;
  }
}
