"use server";

import { PostParams, PostSlug } from "@/app/schemaValidations/post.schema";
import { PostWithRelations } from "@/features/type";
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

export async function getOnePostAction(values: { slug: string }) {
  try {
    const parsed = PostSlug.safeParse(values);
    if (!parsed.success) {
      return {
        success: false,
        message: "ID không hợp lệ.",
      };
    }

    const { slug } = parsed.data;

    const post = await prisma.post.findUnique({
      where: { slug },
      include: {
        category: true,
        postTags: {
          include: { tag: true },
        },
        author: {
          select: { id: true, name: true },
        },
      },
    });

    if (!post) {
      return {
        success: false,
        message: "Bài viết không tồn tại.",
      };
    }

    return {
      success: true,
      data: post,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Lỗi hệ thống.",
    };
  }
}
