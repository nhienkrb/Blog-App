import { PostWithRelations } from "@/features/type";
import { format } from "date-fns";
import Link from "next/link";
interface RecentPostsProps {
  post: PostWithRelations;
}
export function FeaturedPost({ post }: RecentPostsProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-xl dark:mb-12 border-l-4 border-brand transition-colors duration-300">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span className="bg-brand text-white text-xs font-semibold px-2.5 py-0.5 rounded">
            Featured
          </span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4 hover:text-brand transition-colors duration-200">
            {post.title}
          </h1>
        </Link>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
          {post.content}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span>By {post.author?.name || "Unknown"}</span>
          <span className="mx-2">•</span>
          <time>{format(new Date(post.createdAt), "dd MMM, yyyy")}</time>
        </div>
      </article>
    </Link>
  );
}
