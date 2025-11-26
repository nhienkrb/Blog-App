"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CreatePostBodyType,
  CreatePostSchema,
} from "@/app/schemaValidations/post.schema";
import { createPostAction } from "@/features/admin/action/handlePost";

interface PostFormProps {
  categories: { id: number; nameCategory: string }[];
}

export default function PostForm({ categories }: PostFormProps) {
  const [error, setError] = useState<string | null>(null);

  const form = useForm<CreatePostBodyType>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      categoryId: undefined,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  async function onSubmit(values: CreatePostBodyType) {
    setError(null);
    const res = await createPostAction(values);

    if (res?.success === false) {
      setError(res.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl mx-auto p-6 dark:bg-gray-800  bg-white rounded-lg shadow"
    >
      {error && (
        <div className="p-3 text-red-500 bg-red-50 rounded space-y-2">{error}</div>
      )}

      <div className="space-y-2">
        <Label>Tiêu đề</Label>
        <Input {...register("title")} placeholder="Nhập tiêu đề bài viết" />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Slug (URL)</Label>
        <Input {...register("slug")} placeholder="tieu-de-bai-viet" />
        {errors.slug && (
          <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Danh mục</Label>
        <select
          {...register("categoryId", { valueAsNumber: true })}
          className="w-full p-2 border rounded-md dark:bg-gray-800"
        >
          <option value="">-- Chọn danh mục --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nameCategory}
            </option>
          ))}
        </select>
        {errors.categoryId && (
          <p className="text-red-500 text-sm mt-1">
            {errors.categoryId.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Nội dung</Label>
        <textarea
          {...register("content")}
          className="w-full p-2 border rounded-md h-40"
          placeholder="Nội dung bài viết..."
        />
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Đang tạo..." : "Đăng bài viết"}
      </Button>
    </form>
  );
}
