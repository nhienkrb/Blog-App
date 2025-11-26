import { getAuthCookie } from "@/lib/cookie";
import { verifyToken } from "@/lib/jwt";
import "server-only";

export async function getCurrentUser() {
    const token = await getAuthCookie();
    if (!token) return null;
    const payload = await verifyToken(token); 
    return payload as any;
}