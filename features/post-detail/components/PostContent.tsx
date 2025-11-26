import { Prisma } from "@prisma/client";

type FullPost = Prisma.PostGetPayload<{
  include: {
    category: true;
    postTags: { include: { tag: true } };
    author: { select: { id: true; name: true } };
  };
}>;

export function PostContent({ post }: { post: FullPost }) {
  return (
    <article className="prose prose-lg max-w-none">

      <h3 className="text-2xl font-semibold mb-4 ">Content</h3>
      <p className="leading-relaxed mb-6">
        {post.content}
      </p>
    </article>
  );
}
