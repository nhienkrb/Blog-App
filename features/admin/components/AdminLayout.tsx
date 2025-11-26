"use client";
import { ReactNode } from "react";

interface AdminLayoutProps {
  sidebar: ReactNode;
  header: ReactNode;
  children: ReactNode;
}

export function AdminLayout({ sidebar, header, children }: AdminLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 font-sans text-gray-900 dark:text-white transition-colors duration-200">
      {sidebar}
      <main className="flex-1 flex flex-col overflow-hidden">
        {header}
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
