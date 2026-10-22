import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// TEMPORARY: problem mille ei file delete koro
export async function GET() {
    const token = (await cookies()).get("accessToken")?.value;
    const backend = process.env.BACKEND_API_URL;

    if (!token) {
        return NextResponse.json({ step: "cookie", hasToken: false, backend });
    }

    let expiresInSec: number | null = null;
    try {
        const payload = JSON.parse(
            Buffer.from(token.split(".")[1], "base64url").toString(),
        );
        expiresInSec = payload.exp - Math.floor(Date.now() / 1000);
    } catch { }

    try {
        const res = await fetch(`${backend}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
            cache: "no-store",
        });
        const text = await res.text();
        return NextResponse.json({
            step: "backend",
            backend,
            status: res.status,
            expiresInSec,
            body: text.slice(0, 200),
        });
    } catch (e) {
        return NextResponse.json({ step: "fetch-failed", backend, error: String(e) });
    }
}