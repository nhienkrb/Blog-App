"use server";

import { clearAuthCookie } from "@/lib/cookie";
import { redirect } from "next/navigation";

export async function logoutAction() {
    await clearAuthCookie();
    redirect("/"); 
}