import z from 'zod'

export const CreatePostSchema = z.object({
  title: z.string()
    .min(5, "Tiêu đề phải có ít nhất 5 ký tự.")
    .max(256, "Tiêu đề không được quá 256 ký tự."),

  slug: z.string()
    .trim()
    .min(5, "Slug phải có ít nhất 5 ký tự")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug không hợp lệ (chỉ dùng chữ thường, số và dấu gạch ngang)."),

  content: z.string()
    .min(20, "Nội dung bài viết quá ngắn (tối thiểu 20 ký tự)."),

  categoryId: z.number()
    .int()
    .positive({ message: "Vui lòng chọn một danh mục hợp lệ." }),

})

export type CreatePostBodyType = z.infer<typeof CreatePostSchema>

const PostResponseSchema = CreatePostSchema.extend({
  id: z.number(),
  authorId: z.number(),
})

export const PostRes = z.object({
  data: PostResponseSchema,
  message: z.string()
})
export type PostResType = z.infer<typeof PostRes>

export const PostListRes = z.object({
  data: z.array(PostResponseSchema),
  message: z.string()
})
export type PostListResType = z.infer<typeof PostListRes>

export const UpdatePostBody = CreatePostSchema.extend({
  id: z.number().int().positive()
})
export type UpdatePostBodyType = z.infer<typeof UpdatePostBody>

export const PostParams = z.object({
  id: z.coerce.number()
})
export type PostParamsType = z.infer<typeof PostParams>

export const PostSlug = z.object({
  slug: z.string()
})
export type PostSlugType = z.infer<typeof PostSlug>
