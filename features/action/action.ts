"use server";

import { PostWithRelations,PostBase } from "@/features/type";
import { prisma } from "@/lib/prisma";

export async function getAllPosts(categoryName?: string): Promise<PostWithRelations[]> {
  try {
    const where = categoryName
      ? { category: { nameCategory: categoryName } }
      : {};

    return await prisma.post.findMany({
      where,
      include: {
        author: true,
        category: true,
        postTags: {
          include: { tag: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
