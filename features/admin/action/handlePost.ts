"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { CreatePostBodyType, CreatePostSchema, UpdatePostBodyType, UpdatePostBody, PostParamsType, PostParams } from "@/app/schemaValidations/post.schema";

export async function createPostAction(values: CreatePostBodyType) {
    try {
        const user = await getCurrentUser();
        if (!user) {
            return { success: false, message: "Bạn cần đăng nhập để thực hiện chức năng này." };
        }

        const parsed = CreatePostSchema.safeParse(values);
        if (!parsed.success) {
            return { success: false, message: "Dữ liệu không hợp lệ", errors: parsed.error.flatten().fieldErrors };
        }

        const data = parsed.data;

        const existingSlug = await prisma.post.findUnique({
            where: { slug: data.slug },
        });

        if (existingSlug) {
            return { success: false, message: "Slug này đã tồn tại, vui lòng chọn slug khác." };
        }

        await prisma.post.create({
            data: {
                title: data.title,
                slug: data.slug,
                content: data.content,
                categoryId: data.categoryId,
                authorId: user.id,
            },
        });

        revalidatePath("/posts");
        revalidatePath("/admin?tab=posts");

    } catch (error) {
        console.error(error);
        return { success: false, message: "Lỗi hệ thống khi tạo bài viết." };
    }

    redirect("/admin?tab=posts");
}

export async function updatePostAction(values: UpdatePostBodyType) {

    try {
        const user = await getCurrentUser();
        if (!user) {
            return { success: false, message: "Bạn cần đăng nhập để thực hiện chức năng này." };
        }
        const parsed = UpdatePostBody.safeParse(values);
        if (!parsed.success) {
            return { success: false, message: "Dữ liệu không hợp lệ", errors: parsed.error.flatten().fieldErrors };
        }
        const data = parsed.data;
        const existingSlug = await prisma.post.findFirst({
            where: {
                slug: data.slug,
                id: { not: data.id },
            },
        });

        if (existingSlug) {
            return { success: false, message: "Slug này đã tồn tại, vui lòng chọn slug khác." };
        }

        await prisma.post.update({
            where: { id: data.id },
            data: {
                title: data.title,
                slug: data.slug,
                content: data.content,
                categoryId: data.categoryId,
                authorId: user.id,
            },
        });

        revalidatePath("/posts");
        revalidatePath("/admin?tab=posts");
    } catch (error) {
        return { success: false, message: "Lỗi hệ thống." };

    }
}

export async function deletePostAction(values: PostParamsType) {
    try {
        const user = await getCurrentUser();
        if (!user) {
            return { success: false, message: "Bạn cần đăng nhập để thực hiện chức năng này." };
        }

        const parsed = PostParams.safeParse(values);
        if (!parsed.success) {
            return { success: false, message: "Dữ liệu không hợp lệ." };
        }

        const { id } = parsed.data;

        const existingPost = await prisma.post.findUnique({
            where: { id },
        });

        if (!existingPost) {
            return { success: false, message: "Bài viết không tồn tại." };
        }

        if (existingPost.authorId !== user.id && user.isAdmin !== true ) {
            return { success: false, message: "Bạn không có quyền xóa bài viết này." };
        }

        await prisma.post.delete({
            where: { id },
        });

        revalidatePath("/posts");
        revalidatePath("/admin?tab=posts");

        return { success: true, message: "Xóa bài viết thành công." };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Lỗi hệ thống." };
    }
}

const isExistUser = async () => {
    const user = await getCurrentUser();
    if (!user) {
        return { success: false, message: "Bạn cần đăng nhập để thực hiện chức năng này." };
    }
    return true;
}