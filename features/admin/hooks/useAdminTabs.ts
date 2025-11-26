"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export type TabType = "dashboard" | "posts" | "users" | "comments" | "settings";

export function useAdminTabs(defaultTab: TabType = "posts") {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const activeTab = (searchParams.get("tab") as TabType) || defaultTab;
    const setActiveTab = useCallback((tab: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("tab", tab);
        router.push(`${pathname}?${params.toString()}`);
    }, [pathname, router, searchParams])
    return { activeTab, setActiveTab }
}