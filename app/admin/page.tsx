import { getAllPosts } from "@/features/action/action";
import { getAllUser } from "@/features/admin/action/handleUser";
import AdminContent from "@/features/admin/components/AdminContent";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const allPosts = await getAllPosts();  
  const user = await getCurrentUser();
  const allUser = await getAllUser();
  const categories = await prisma.category.findMany({
    select: { id: true, nameCategory: true },
  });
  return <AdminContent posts={allPosts} user={user} allUser={allUser} categories={categories} />;
}
