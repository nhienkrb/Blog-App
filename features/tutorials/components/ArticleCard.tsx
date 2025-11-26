import { PostWithRelations } from "@/features/type";
import { format } from "date-fns";
import Link from "next/link";

interface PostProp {
  post: PostWithRelations;
}

export function ArticleCard({ post }: PostProp) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="bg-card border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
        <img
          src={"https://placehold.co/300x150"}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 flex flex-col grow">
          <div className="flex items-center justify-between mb-3">
            <span
              className={`${post.category?.nameCategory} text-xs font-semibold px-2.5 py-0.5 rounded`}
            >
              {post.category?.nameCategory}
            </span>
          </div>
          <a href="#">
            <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
          </a>
          <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
            {post.content}
          </p>
          <div className="flex items-center text-sm text-muted-foreground mt-auto">
            <span>By {post.author?.name}</span>
            <span className="mx-2">•</span>
            <span>{format(new Date(post.createdAt), "dd MMM, yyyy")}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
