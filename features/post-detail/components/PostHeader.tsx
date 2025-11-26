import { format } from "date-fns";
import { Prisma } from "@prisma/client";

type FullPost = Prisma.PostGetPayload<{
  include: {
    category: true;
    postTags: { include: { tag: true } };
    author: { select: { id: true; name: true } };
  };
}>;
export function PostHeader({ post }: { post: FullPost }) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight  ">
        {post.title}
      </h1>

      <div className="flex items-center text-sm space-x-4">
        <span className="font-medium ">
          By {post.author?.name}
        </span>
        <span>•</span>
        <span>17 lượt xem</span>
        <span>•</span>
        <time>{format(new Date(post.createdAt), "dd MMM, yyyy")}</time>
      </div>
    </header>
  );
}
