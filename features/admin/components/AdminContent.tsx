"use client";

import { AdminLayout } from "./AdminLayout";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { PostManager } from "./PostManager";
import { UserManager } from "./UserManager";
import { useAdminTabs } from "../hooks/useAdminTabs";

export default function AdminContent({ posts, user,allUser, categories }:any) {
  const { activeTab, setActiveTab } = useAdminTabs();
  return (
    <AdminLayout
      sidebar={<Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />}
      header={<Header user={user} />}
    >
      {activeTab === "posts" && <PostManager posts={posts} categories={categories}  />}
      {activeTab === "users" && <UserManager users={allUser} />}
      {activeTab === "dashboard" && <div>Dashboard...</div>}
      {activeTab === "settings" && <div>Settings...</div>}
    </AdminLayout>
  );
}
