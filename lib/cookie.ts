"use server";
import { cookies } from "next/headers";

const COOKIE_NAME = "token";
export async function setAuthCookie(token: string, maxAgeSeconds: number) {
    const cookieStore = await cookies();
    cookieStore.set({
        name: COOKIE_NAME,
        value: token,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'development',
        path: '/',
        maxAge: maxAgeSeconds,
        sameSite: 'lax',
    })
}

export async function getAuthCookie() {
    const cookieStore = await cookies();

    const token = cookieStore.get(COOKIE_NAME)?.value;
    return token as string || null;
}

export async function clearAuthCookie() {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
}